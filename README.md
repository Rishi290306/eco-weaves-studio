# Eco Weaves Studio LLP | Modern Sustainable Apparel & Textiles

> **Official Website & Full Stack Enterprise System**  
> Established on 7th March 2025.  
> **Tagline**: `DESIGN. SUSTAIN. INSPIRE.`  
> **Official Email**: `ECOM.RAVI@YAHOO.COM`  
> **GitHub Repo**: [https://github.com/Rishi290306/eco-weaves-studio.git](https://github.com/Rishi290306/eco-weaves-studio.git)  
> **Live Published Website**: [https://rishi290306.github.io/eco-weaves-studio/](https://rishi290306.github.io/eco-weaves-studio/)

---

## 📁 Repository Project Structure

```
eco-weaves-studio/
├── backend/                             # Java 24 REST API Backend & MySQL Database System
│   ├── src/com/ecoweaves/backend/
│   │   ├── Main.java                    # Java HTTP REST API Server (Port 8080)
│   │   └── Database.java                # MySQL JDBC Connection Pool (@Shinchan123)
│   ├── lib/
│   │   └── mysql-connector-j-8.3.0.jar  # Official MySQL JDBC Driver
│   ├── schema.sql                       # MySQL Schema (eco_weaves_db & 3 Tables)
│   └── compile_and_run.bat              # 1-Click Windows Compiler & Runner Script
├── src/                                 # Modern React + Vite Frontend
│   ├── components/                      # ParticleCanvas, CustomCursor, Navbar, Footer, etc.
│   ├── pages/                           # Home, Products, Fabrics, QuoteEstimator, Contact, etc.
│   ├── data/                            # productsData.js (Products & Fabric Catalogs)
│   ├── App.jsx                          # Main Router & Application Container
│   └── index.css                        # Design System, HSL Tokens & Responsiveness
├── public/                              # Static Public Assets (Logo, Favicons)
├── index.html                           # Root Entry Point
├── package.json                         # Node Dependencies & Build Scripts
└── README.md                            # Complete Setup & Developer Guide
```

---

## 💻 How to Open and Run in VS Code

### 1. Clone the Repository
Open VS Code, press ``Ctrl + ` `` to open Terminal, and run:
```bash
git clone https://github.com/Rishi290306/eco-weaves-studio.git
cd eco-weaves-studio
```

### 2. Run the React Frontend (Port 3000)
In VS Code Terminal, run:
```bash
npm install
npm run dev
```
Open your browser at: **`http://localhost:3000`**

---

## ☕ Java Backend & MySQL Setup

### 1. Initialize MySQL Database
Open your MySQL CLI (`mysql -u root -p`) and run:
```sql
CREATE DATABASE IF NOT EXISTS eco_weaves_db;
USE eco_weaves_db;
```
Or import `backend/schema.sql`:
```bash
mysql -u root -p < backend/schema.sql
```

### 2. Start the Java REST API Server (Port 8080)
In VS Code Terminal, navigate to `backend` folder and run:
```cmd
cd backend
compile_and_run.bat
```
*(Or manually compile with: `javac -cp "lib/mysql-connector-j-8.3.0.jar" -d bin src/com/ecoweaves/backend/*.java` and run: `java -cp "bin;lib/mysql-connector-j-8.3.0.jar" com.ecoweaves.backend.Main`)*

---

## 🗄️ Viewing Database Entries in MySQL

Open MySQL CLI:
```sql
USE eco_weaves_db;

-- 1. View all Submitted Contact Messages
SELECT * FROM contact_messages;

-- 2. View all Price Quotes
SELECT * FROM quotes;

-- 3. View all Fabric Sample Box Requests
SELECT * FROM sample_requests;
```

---

## 🌐 Features & Tech Stack

- **Frontend**: React 18, Vite 8, Vanilla HSL CSS Design Tokens, FontAwesome 6, Cormorant Garamond & Outfit Typography.
- **Animations**: HTML5 60fps Gold Particle Trail Canvas Cursor, Dynamic Glassmorphism Cards, Interactive Modals.
- **Backend**: Java 24 REST API Server (`com.sun.net.httpserver`), CORS Enabled.
- **Database**: MySQL 8.0 Relational DB (`eco_weaves_db`) with JDBC Connector `8.3.0`.
- **Deployment**: Automatic GitHub Pages hosting via static bundle assets in root.
