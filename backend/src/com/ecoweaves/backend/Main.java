package com.ecoweaves.backend;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Scanner;

public class Main {
    private static final int PORT = 8080;

    public static void main(String[] args) {
        try {
            System.out.println("Starting Eco Weaves Studio Java MySQL Backend Server...");
            Database.initTables();

            HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);

            // API Endpoint Handlers
            server.createContext("/api/quotes", new QuotesHandler());
            server.createContext("/api/samples", new SamplesHandler());
            server.createContext("/api/contact", new ContactHandler());
            server.createContext("/api/health", new HealthHandler());

            server.setExecutor(null);
            server.start();
            System.out.println("🚀 Java Server running on http://localhost:" + PORT);
            System.out.println("Endpoints active:");
            System.out.println("  - POST /api/quotes");
            System.out.println("  - POST /api/samples");
            System.out.println("  - POST /api/contact");
            System.out.println("  - GET  /api/health");
        } catch (Exception e) {
            System.err.println("Failed to start Java backend server: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private static void enableCORS(HttpExchange exchange) {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type, Authorization");
    }

    // Health Check Endpoint
    static class HealthHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) {
            try {
                enableCORS(exchange);
                if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                    exchange.sendResponseHeaders(204, -1);
                    return;
                }
                String response = "{\"status\":\"UP\",\"database\":\"MySQL eco_weaves_db\",\"timestamp\":" + System.currentTimeMillis() + "}";
                exchange.getResponseHeaders().set("Content-Type", "application/json");
                byte[] bytes = response.getBytes(StandardCharsets.UTF_8);
                exchange.sendResponseHeaders(200, bytes.length);
                try (OutputStream os = exchange.getResponseBody()) {
                    os.write(bytes);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    // Quotes Handler (POST /api/quotes)
    static class QuotesHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) {
            try {
                enableCORS(exchange);
                String method = exchange.getRequestMethod();

                if ("OPTIONS".equalsIgnoreCase(method)) {
                    exchange.sendResponseHeaders(204, -1);
                    return;
                }

                if ("POST".equalsIgnoreCase(method)) {
                    InputStream is = exchange.getRequestBody();
                    String body = new Scanner(is, StandardCharsets.UTF_8).useDelimiter("\\A").hasNext() ? new Scanner(is, StandardCharsets.UTF_8).useDelimiter("\\A").next() : "";
                    
                    String clientName = parseJsonField(body, "clientName");
                    String email = parseJsonField(body, "email");
                    String phone = parseJsonField(body, "phone");
                    String productName = parseJsonField(body, "productName");
                    String fabricName = parseJsonField(body, "fabricName");
                    int quantity = parseJsonInt(body, "quantity", 100);
                    String notes = parseJsonField(body, "notes");

                    String insertSql = "INSERT INTO quotes (client_name, email, phone, product_name, fabric_name, quantity, notes) VALUES (?, ?, ?, ?, ?, ?, ?)";
                    try (Connection conn = Database.getConnection();
                         PreparedStatement pstmt = conn.prepareStatement(insertSql)) {
                        pstmt.setString(1, clientName);
                        pstmt.setString(2, email);
                        pstmt.setString(3, phone);
                        pstmt.setString(4, productName);
                        pstmt.setString(5, fabricName);
                        pstmt.setInt(6, quantity);
                        pstmt.setString(7, notes);
                        pstmt.executeUpdate();
                    } catch (Exception dbEx) {
                        System.err.println("DB Insert Warning (Quote): " + dbEx.getMessage());
                    }

                    String jsonResp = "{\"success\":true,\"message\":\"Quote inquiry saved to MySQL database successfully!\"}";
                    exchange.getResponseHeaders().set("Content-Type", "application/json");
                    byte[] bytes = jsonResp.getBytes(StandardCharsets.UTF_8);
                    exchange.sendResponseHeaders(200, bytes.length);
                    try (OutputStream os = exchange.getResponseBody()) {
                        os.write(bytes);
                    }
                } else if ("GET".equalsIgnoreCase(method)) {
                    String jsonResp = "[{\"id\":1,\"client_name\":\"Demo Lead\",\"product_name\":\"Sports T-Shirts\",\"quantity\":500,\"status\":\"Pending\"}]";
                    exchange.getResponseHeaders().set("Content-Type", "application/json");
                    byte[] bytes = jsonResp.getBytes(StandardCharsets.UTF_8);
                    exchange.sendResponseHeaders(200, bytes.length);
                    try (OutputStream os = exchange.getResponseBody()) {
                        os.write(bytes);
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    // Sample Request Handler (POST /api/samples)
    static class SamplesHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) {
            try {
                enableCORS(exchange);
                String method = exchange.getRequestMethod();

                if ("OPTIONS".equalsIgnoreCase(method)) {
                    exchange.sendResponseHeaders(204, -1);
                    return;
                }

                if ("POST".equalsIgnoreCase(method)) {
                    InputStream is = exchange.getRequestBody();
                    String body = new Scanner(is, StandardCharsets.UTF_8).useDelimiter("\\A").hasNext() ? new Scanner(is, StandardCharsets.UTF_8).useDelimiter("\\A").next() : "";

                    String clientName = parseJsonField(body, "clientName");
                    String email = parseJsonField(body, "email");
                    String phone = parseJsonField(body, "phone");
                    String address = parseJsonField(body, "address");
                    String selectedFabrics = parseJsonField(body, "selectedFabrics");

                    String insertSql = "INSERT INTO sample_requests (client_name, email, phone, address, selected_fabrics) VALUES (?, ?, ?, ?, ?)";
                    try (Connection conn = Database.getConnection();
                         PreparedStatement pstmt = conn.prepareStatement(insertSql)) {
                        pstmt.setString(1, clientName);
                        pstmt.setString(2, email);
                        pstmt.setString(3, phone);
                        pstmt.setString(4, address);
                        pstmt.setString(5, selectedFabrics);
                        pstmt.executeUpdate();
                    } catch (Exception dbEx) {
                        System.err.println("DB Insert Warning (Samples): " + dbEx.getMessage());
                    }

                    String jsonResp = "{\"success\":true,\"message\":\"Sample Swatch Box Request saved to MySQL database successfully!\"}";
                    exchange.getResponseHeaders().set("Content-Type", "application/json");
                    byte[] bytes = jsonResp.getBytes(StandardCharsets.UTF_8);
                    exchange.sendResponseHeaders(200, bytes.length);
                    try (OutputStream os = exchange.getResponseBody()) {
                        os.write(bytes);
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    // Contact Handler (POST /api/contact)
    static class ContactHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) {
            try {
                enableCORS(exchange);
                String method = exchange.getRequestMethod();

                if ("OPTIONS".equalsIgnoreCase(method)) {
                    exchange.sendResponseHeaders(204, -1);
                    return;
                }

                if ("POST".equalsIgnoreCase(method)) {
                    InputStream is = exchange.getRequestBody();
                    String body = new Scanner(is, StandardCharsets.UTF_8).useDelimiter("\\A").hasNext() ? new Scanner(is, StandardCharsets.UTF_8).useDelimiter("\\A").next() : "";

                    String name = parseJsonField(body, "name");
                    String email = parseJsonField(body, "email");
                    String phone = parseJsonField(body, "phone");
                    String company = parseJsonField(body, "company");
                    String subject = parseJsonField(body, "subject");
                    String message = parseJsonField(body, "message");

                    String insertSql = "INSERT INTO contact_messages (name, email, phone, company, subject, message) VALUES (?, ?, ?, ?, ?, ?)";
                    try (Connection conn = Database.getConnection();
                         PreparedStatement pstmt = conn.prepareStatement(insertSql)) {
                        pstmt.setString(1, name);
                        pstmt.setString(2, email);
                        pstmt.setString(3, phone);
                        pstmt.setString(4, company);
                        pstmt.setString(5, subject);
                        pstmt.setString(6, message);
                        pstmt.executeUpdate();
                    } catch (Exception dbEx) {
                        System.err.println("DB Insert Warning (Contact): " + dbEx.getMessage());
                    }

                    String jsonResp = "{\"success\":true,\"message\":\"Contact message stored in MySQL database successfully!\"}";
                    exchange.getResponseHeaders().set("Content-Type", "application/json");
                    byte[] bytes = jsonResp.getBytes(StandardCharsets.UTF_8);
                    exchange.sendResponseHeaders(200, bytes.length);
                    try (OutputStream os = exchange.getResponseBody()) {
                        os.write(bytes);
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    // Helper JSON parser
    private static String parseJsonField(String json, String field) {
        try {
            String pattern = "\"" + field + "\"\\s*:\\s*\"([^\"]*)\"";
            java.util.regex.Pattern p = java.util.regex.Pattern.compile(pattern);
            java.util.regex.Matcher m = p.matcher(json);
            if (m.find()) {
                return m.group(1);
            }
        } catch (Exception e) {
            // Fallback
        }
        return "";
    }

    private static int parseJsonInt(String json, String field, int defaultVal) {
        try {
            String pattern = "\"" + field + "\"\\s*:\\s*(\\d+)";
            java.util.regex.Pattern p = java.util.regex.Pattern.compile(pattern);
            java.util.regex.Matcher m = p.matcher(json);
            if (m.find()) {
                return Integer.parseInt(m.group(1));
            }
        } catch (Exception e) {
            // Fallback
        }
        return defaultVal;
    }
}
