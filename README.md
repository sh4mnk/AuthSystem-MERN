# 🔐 MERN Authentication System

A secure and scalable full-stack authentication system built using the **MERN stack**. This project demonstrates how modern authentication works in real-world applications using **JWT (JSON Web Tokens)** and **bcrypt password hashing**.

---

## 🚀 Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS (optional)

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Authentication

* JWT (JSON Web Tokens)
* bcrypt (Password Hashing)

---

## ✨ Features

* User Registration & Login
* Secure Password Hashing using bcrypt
* JWT-based Authentication
* Protected Routes
* REST API Integration
* Scalable Backend Structure

---

## 📁 Project Structure

```
/client   → Next.js frontend
/server   → Node.js backend

/server
 ├── models/
 ├── routes/
 ├── controllers/
 ├── middleware/
 └── server.js
```

---

## 🔐 How Authentication Works

1. User registers with email & password
2. Password is hashed using bcrypt
3. Data is stored in MongoDB
4. User logs in
5. Server verifies credentials
6. JWT token is generated
7. Token is used to access protected routes

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/AuthSystem-MERN.git
cd AuthSystem-MERN
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔌 API Endpoints

### 📌 Auth Routes

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| POST   | /api/register | Register new user |
| POST   | /api/login    | Login user        |
| GET    | /api/profile  | Protected route   |

---

## 🛡️ Security Practices

* Passwords are hashed using bcrypt
* JWT tokens used for secure authentication
* Protected routes using middleware
* Environment variables for sensitive data

---

## 📸 Future Improvements

* Refresh Tokens
* Email Verification
* Forgot Password System
* Role-Based Authorization
* OAuth (Google, GitHub login)

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Muhammed Shameem**
* Under Graduate Student
* Passionate Full Stack Developer
* Focused on UI/UX ,Web Development & Mobile application Development

---

⭐ If you like this project, don’t forget to star the repo!

