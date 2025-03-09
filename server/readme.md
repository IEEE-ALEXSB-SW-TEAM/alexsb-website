This is the backend for IEEE AlexSb Website, built with **Node.js, Express, Prisma, and PostgreSQL**.
## 📂 Project Structure

```
server/
│── src/
│   ├── config/        # Configuration files (Swagger, DB, etc.)
│   ├── controllers/   # Business logic for API routes
│   ├── routes/        # API route definitions
│   ├── utils/         # Utility functions and helpers
│   ├── middlewares/   # Middleware functions
│   ├── index.js       # Entry point of the server
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
cd backend
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
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
PORT=5000
```

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
