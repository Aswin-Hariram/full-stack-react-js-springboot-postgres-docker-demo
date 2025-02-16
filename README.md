# Full-Stack React.js + Spring Boot + PostgreSQL + Docker Demo

This is a full-stack web application using **React.js** for the frontend, **Spring Boot** for the backend, and **PostgreSQL** as the database. The application is containerized using **Docker**.

## 🛠️ Tech Stack
- **Frontend**: React.js (Vite)
- **Backend**: Spring Boot (Java)
- **Database**: PostgreSQL
- **Containerization**: Docker & Docker Compose

## 📂 Project Structure
```
full-stack-app/
│── frontend/          # React.js application
│── backend/           # Spring Boot application
│── docker-compose.yml # Docker Compose for running services
```

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js & npm (for frontend)
- Java 17+ (for backend)
- Docker & Docker Compose

### 🔧 Setup & Run

#### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/full-stack-react-js-springboot-postgres-docker-demo.git
cd full-stack-react-js-springboot-postgres-docker-demo
```

#### 2️⃣ Run the Application with Docker Compose
```sh
docker-compose up --build
```
<img width="1710" alt="Screenshot 2025-02-16 at 10 52 38 PM" src="https://github.com/user-attachments/assets/06e94b3f-a500-486c-acdf-e2c839062150" />
<img width="1710" alt="Screenshot 2025-02-16 at 10 57 49 PM" src="https://github.com/user-attachments/assets/0e0cee64-3859-4079-b2c8-bad831250a59" />


This will:
- Start the PostgreSQL database
- Start the Spring Boot backend
- Start the React frontend

## 🔗 API Endpoints

### User Authentication
- **Signup**: `POST /auth/signup` - Registers a new user
- **Get All Users**: `GET /auth/users` - Retrieves all registered users

## 📜 License
This project is licensed under the MIT License.

---

🚀 **Happy Coding!**
