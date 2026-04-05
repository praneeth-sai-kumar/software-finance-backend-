# 💼 Software Company Finance Backend

A production-ready backend system designed for software companies to manage financial operations, including revenue tracking, expense monitoring, project profitability, and client analytics.

---

# 🚀 Features Implemented

### 👥 User & Role Management

- Secure user registration & login (JWT)
- All users register as **VIEWER by default**
- **Admin-controlled role upgrades** (ADMIN / ANALYST)
- Role-Based Access Control (RBAC)

---

### 💰 Financial Records Management

- Full CRUD for transactions
- Supports:
  - Revenue (client payments, SaaS)
  - Expenses (salary, cloud, tools)

---

### 🔎 Advanced Filtering

- Filter by:
  - Type (REVENUE / EXPENSE)
  - Category

- (Extensible to date filtering)

---

### 📊 Dashboard & Analytics

- Total Revenue
- Total Expenses
- Net Profit
- Cost Breakdown (category-wise)
- Client Revenue
- Project Profit
- 📈 Monthly Trends (time-based analytics)

---

### 🧠 Validation & Error Handling

- Input validation using express-validator
- Separate validation for:
  - Create (strict)
  - Update (partial)

- Clean error responses

---

### 🗄️ Data Persistence

- MySQL database
- Sequelize ORM
- Proper relationships:
  - Client → Projects
  - Project → Transactions

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT Authentication
- bcrypt (Password Hashing)
- express-validator

---

# 📁 Project Structure

```bash
src/
│
├── config/        # Database config
├── models/        # Sequelize models
├── controllers/   # Business logic
├── routes/        # API routes
├── middleware/    # Auth & RBAC
├── services/      # Dashboard logic
├── seed/          # Admin creation script
│
├── app.js
│
server.js
.env
```

---

# ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone <your-repo-url>
cd software-finance-backend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Setup Environment Variables

Create `.env`:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=finance_db

JWT_SECRET=supersecretkey
```

---

## 4. Create Database

```sql
CREATE DATABASE finance_db;
```

---

## 5. Run Server

```bash
npm run dev
```

---

# 🔐 Authentication

## Signup (Viewer only)

```http
POST /api/auth/signup
```

```json
{
  "name": "User",
  "email": "user@gmail.com",
  "password": "123456"
}
```

---

## Login

```http
POST /api/auth/login
```

Returns JWT token.

---

# 👑 Admin Setup

Run:

```bash
node src/seed/admin.seed.js
```

Default:

- Email: [admin@gmail.com](mailto:admin@gmail.com)
- Password: admin123

---

# 🔑 Authorization

All protected routes require:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

# 👥 User APIs

## Update Role (ADMIN ONLY)

```http
PATCH /api/users/:id/role
```

```json
{
  "role": "ANALYST"
}
```

---

# 🏢 Client APIs

## Create Client

```http
POST /api/clients
```

## Get Clients

```http
GET /api/clients
```

---

# 💻 Project APIs

## Create Project

```http
POST /api/projects
```

```json
{
  "name": "Project A",
  "budget": 500000,
  "client_id": 1
}
```

---

## Get Projects

```http
GET /api/projects
```

---

## Update Project

```http
PUT /api/projects/:id
```

---

## Delete Project

```http
DELETE /api/projects/:id
```

---

# 💰 Transaction APIs

## Create Transaction

```http
POST /api/transactions
```

```json
{
  "amount": 50000,
  "type": "REVENUE",
  "category": "client_payment",
  "client_id": 1,
  "project_id": 1
}
```

---

## Get Transactions

```http
GET /api/transactions
```

---

## Filter Transactions

```http
GET /api/transactions?type=REVENUE&category=client_payment
```

---

## Update Transaction (Partial Allowed)

```http
PUT /api/transactions/:id
```

```json
{
  "amount": 70000
}
```

---

## Delete Transaction

```http
DELETE /api/transactions/:id
```

---

# 📊 Dashboard APIs

## Summary

```http
GET /api/dashboard/summary
```

---

## Cost Breakdown

```http
GET /api/dashboard/cost-breakdown
```

---

## Project Profit

```http
GET /api/dashboard/project-profit
```

---

## Client Revenue

```http
GET /api/dashboard/client-revenue
```

---

## Monthly Trends

```http
GET /api/dashboard/monthly-trends
```

---

# 🧪 API Testing (Postman)

## Base URL

```bash
http://localhost:5000
```

## Testing Flow

1. Signup user
2. Login as admin
3. Upgrade user role
4. Create client
5. Create project
6. Create transaction
7. Check dashboard

---

# 🌐 API Documentation

Postman Collection:
(Add your Postman public link here)

---

# 🧠 Example Workflow

- User registers → Viewer
- Admin upgrades role
- Create client
- Create project
- Add transactions
- View analytics

---

# 🔒 Security Features

- Password hashing (bcrypt)
- JWT authentication
- Role-based authorization
- No direct admin signup
- Input validation

---

# 🌟 Future Enhancements

- Date-based filtering
- Expense approval system
- Audit logs
- SaaS metrics (MRR, ARR)
- Email verification
- Swagger documentation
- Deployment (AWS / Render)

# 📌 Author

Your Name
praneeth sai kumar
