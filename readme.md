# Expense Sharing Application (Splitwise-like Backend)

## 📌 Overview
This project is a backend system for an **Expense Sharing Application** similar to Splitwise.  
It allows users to create groups, add shared expenses with different split types, track balances, simplify debts, and settle dues.

The focus of this project is **clean backend design**, **correct business logic**, and **clear API behavior**.

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB (Local – default `test` database)**
- **Mongoose**

---

## 📁 Project Structure
```

expense-sharing-app/
│
├── src/
│ ├── config/
│ │ └── db.js
│ │
│ ├── models/
│ │ ├── User.js
│ │ ├── Group.js
│ │ ├── Expense.js
│ │ └── Balance.js
│ │
│ ├── controllers/
│ │ ├── user.controller.js
│ │ ├── group.controller.js
│ │ ├── expense.controller.js
│ │ └── balance.controller.js
│ │
│ ├── routes/
│ │ ├── user.routes.js
│ │ ├── group.routes.js
│ │ ├── expense.routes.js
│ │ └── balance.routes.js
│ │
│ ├── services/
│ │ ├── expense.service.js
│ │ └── balance.service.js
│ │
│ ├── utils/
│ │ └── split.utils.js
│ │
│ ├── app.js
│ └── server.js
│
├── package.json
└── README.md
```


---

## 🚀 How to Run the Project

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start MongoDB (Local)

Ensure MongoDB is running:
```
net start MongoDB
```

Verify:
```
mongosh
```

This project uses MongoDB’s default test database.

### 3️⃣ Start the Server
```
npm run dev
```
Expected output:
```
MongoDB Connected (DB: test)
Server running on port 3000
```

### 🧠 Core Features
## ✅ Users

Create users

List all users

## ✅ Groups

Create groups

Add members to groups

## ✅ Expenses

Supports 3 split types:

Equal split

Exact amount split

Percentage split

## ✅ Balance Tracking

Tracks who owes whom

Shows:

How much a user owes

How much others owe the user

## ✅ Balance Simplification

Minimizes number of transactions

Computes net balances across all users

## ✅ Settlement

Allows users to settle dues

Reduces outstanding balances

### 🔗 API Endpoints
## 👤 Users
```
POST /users
GET  /users
```
## 👥 Groups
```
POST /groups
GET  /groups/:groupId
```

## 💸 Expenses
```
POST /expenses
```

## 💰 Balances
```
GET  /balances/:userId
POST /balances/simplify
POST /balances/settle
```

### 🧪 API Testing (Postman)
## Create User

POST /users
```
{
  "name": "Amit",
  "email": "amit@gmail.com"
}
```
## Create Group

POST /groups
```
{
  "name": "Goa Trip",
  "members": ["USER_ID_1", "USER_ID_2"]
}
```
## Add Expense (Equal Split)

POST /expenses
```
{
  "groupId": "GROUP_ID",
  "paidBy": "USER_ID_1",
  "amount": 1000,
  "splitType": "EQUAL"
}
```
## Check User Balance

GET /balances/USER_ID

Simplify Balances

POST /balances/simplify

No request body required

Settle Balance

POST /balances/settle
```
{
  "from": "USER_ID_2",
  "to": "USER_ID_1",
  "amount": 500
}
```

### ⚙️ Internal Design Decisions

Balances are stored incrementally for accuracy

Simplification is a separate step, not automatic

Uses net flow algorithm to minimize transactions

Route ordering avoids dynamic route conflicts (e.g. /settle vs /:userId)

### 🔮 Possible Improvements

Per-group balance simplification

Authentication & authorization

Expense editing & deletion

Currency support

Transaction history

Unit tests

### ✅ Status

✔ Backend complete
✔ APIs tested via Postman
✔ MongoDB local integration working