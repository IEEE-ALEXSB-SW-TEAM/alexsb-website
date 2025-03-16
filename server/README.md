This is the backend for IEEE AlexSb Website, built with **Node.js, Express, Prisma, and PostgreSQL**.
## 📂 Project Structure

```
server/
│── resources/
│   ├── emailTemplates.json   # Contains templates for email service
│── src/
│   ├── config/        # Configuration files (Swagger, DB, etc.)
│   ├── controllers/   # Business logic for API routes
│   ├── routes/        # API route definitions
│   ├── services/      # Core business logic and integrations
│   ├── middlewares/   # Middleware functions
│   ├── server.js      # Entry point of the server
│── prisma/
│   ├── migrations/    # Database migrations
│   ├── schema.prisma  # Database schema
│   ├── seed.js        # Seed script for test data
│── .env               # Environment variables
│── package.json       # Project metadata and dependencies
│── README.md          # Project documentation
```

---

##  Getting Started

### **1. Clone the Repository and Checkout the Test Branch**

```sh
git clone https://github.com/IEEE-ALEXSB-SW-TEAM/alexsb-website.git
git checkout test
```

### **2. Create a New Feature Branch from Test**

```sh
git checkout -b feature/your-feature
```

### **3. Change to Server Directory**

```sh
cd server
```

### **4. Install Dependencies**

```sh
npm install
```

### **5. Configure Environment Variables**

Create a `.env` file in the root directory and add the following:
```ini
#  Server Configuration
PORT=5000
NODE_ENV=development

#  Database Configuration
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

#  Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com  # Change this for other providers
SMTP_PORT=587             # Common ports: 465 (SSL) or 587 (TLS)
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
EMAIL_FROM=your-email@example.com
```

---

##  Using Different Email Providers

| **Provider**  | **SMTP Host**           | **Port** | **Notes** |
|--------------|-------------------------|--------|--------------------------------|
| Gmail       | `smtp.gmail.com`         | 587    | Use **App Password**, not your regular password |
| Outlook     | `smtp.office365.com`     | 587    | Requires **TLS** |
| Yahoo       | `smtp.mail.yahoo.com`    | 465    | Requires **SSL** |


---


##  Database Setup

### **1. Apply Existing Migrations**

```sh
npx prisma migrate dev
```

### **2. Generate Prisma Client**

```sh
npx prisma generate
```

### **3. Seed the Database** *(Optional: If you need initial data)*

```sh
npx prisma db seed
```

---

##  Running the Server

### **Development Mode**

```sh
npm run dev
```

### **Production Mode**

```sh
npm start
```

The API will be available at **`http://localhost:5000`**.

---

## 📄 API Documentation (Swagger)

Once the server is running, access the API docs at:
🔗 **[http://localhost:5000/api-docs](http://localhost:5000/api-docs)**

---
