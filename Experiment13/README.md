# EXPERIMENT 13 - 23BIS70052 (Student CRUD API)

Flask + MySQL REST API for managing student records.

## Setup
1. Clone repo and install: `pip install -r requirements.txt`
2. Create `.env` from `.env.example` and fill in your DB credentials
3. Run MySQL setup SQL from `schema.sql`
4. Start server: `python app.py`

## Render Deployable Link: https://two3bis70052-experiment13fsd2-2.onrender.com

## Screenshots

### 1. Server/DB Connection Running
![Server Running](SERVERRUN.png)

### 2. Create User
![POST](CREATE.png)

### 3. Read User
![GET all Orders](READ.png)

### 4. Update User
![PUT](UPDATE.png)

### 5. Validation Procedure
![Verification](VALIDATION.png)

### 6. Delete User
![Delete](DELETE.png)

### 7. Database Show
![Database showcase](DATABASE.png)



## Endpoints

| Method | Endpoint              | Description        |
|--------|-----------------------|--------------------|
| POST   | /api/students         | Create student     |
| GET    | /api/students         | Get all students   |
| GET    | /api/students/<id>    | Get one student    |
| PUT    | /api/students/<id>    | Update student     |
| DELETE | /api/students/<id>    | Delete student     |

## Validations
- Name: min 2 characters
- Email: valid format, must be unique
- Age: number between 1–120
- Course: min 2 characters


## Learning Outcomes

### 1. Understanding REST API Architecture
### 2. Flask Backend Development
### 3. Database Connectivity
### 4. CRUD Operations
### 5. Input Validation
### 6. Environment Variable Management
### 7. Cloud Database Integration
### 8. API Deployment on Cloud
### 9. API Testing with Postman
### 10. Error Handling
