package com.ecoweaves.backend;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

public class Database {
    private static final String MYSQL_URL = "jdbc:mysql://localhost:3306/eco_weaves_db?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";
    private static final String MYSQL_USER = "root";
    private static final String MYSQL_PASS = "Shinchan123";

    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            // Mysql driver optional
        }
    }

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(MYSQL_URL, MYSQL_USER, MYSQL_PASS);
    }

    public static void initTables() {
        String createDbSql = "CREATE DATABASE IF NOT EXISTS eco_weaves_db";
        String quotesTable = "CREATE TABLE IF NOT EXISTS quotes (" +
                "id INT AUTO_INCREMENT PRIMARY KEY, " +
                "client_name VARCHAR(255) NOT NULL, " +
                "email VARCHAR(255) NOT NULL, " +
                "phone VARCHAR(50), " +
                "product_name VARCHAR(255) NOT NULL, " +
                "fabric_name VARCHAR(255) NOT NULL, " +
                "quantity INT NOT NULL, " +
                "notes TEXT, " +
                "status VARCHAR(50) DEFAULT 'Pending', " +
                "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";

        String samplesTable = "CREATE TABLE IF NOT EXISTS sample_requests (" +
                "id INT AUTO_INCREMENT PRIMARY KEY, " +
                "client_name VARCHAR(255) NOT NULL, " +
                "email VARCHAR(255) NOT NULL, " +
                "phone VARCHAR(50), " +
                "address TEXT NOT NULL, " +
                "selected_fabrics TEXT NOT NULL, " +
                "status VARCHAR(50) DEFAULT 'Pending', " +
                "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";

        String contactTable = "CREATE TABLE IF NOT EXISTS contact_messages (" +
                "id INT AUTO_INCREMENT PRIMARY KEY, " +
                "name VARCHAR(255) NOT NULL, " +
                "email VARCHAR(255) NOT NULL, " +
                "phone VARCHAR(50), " +
                "company VARCHAR(255), " +
                "subject VARCHAR(255), " +
                "message TEXT NOT NULL, " +
                "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";

        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/?useSSL=false&allowPublicKeyRetrieval=true", MYSQL_USER, MYSQL_PASS);
             Statement stmt = conn.createStatement()) {
            stmt.executeUpdate(createDbSql);
        } catch (Exception e) {
            System.err.println("Notice: " + e.getMessage());
        }

        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement()) {
            stmt.executeUpdate(quotesTable);
            stmt.executeUpdate(samplesTable);
            stmt.executeUpdate(contactTable);
            System.out.println("✅ MySQL Database & Tables Ready!");
        } catch (Exception e) {
            System.err.println("Notice: " + e.getMessage());
        }
    }
}
