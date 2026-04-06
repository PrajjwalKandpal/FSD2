# EXPERIMENT 13 - 23BIS70052 (Student CRUD API)

Flask + MySQL REST API for managing student records.

## Setup
1. Clone repo and install: `pip install -r requirements.txt`
2. Create `.env` from `.env.example` and fill in your DB credentials
3. Run MySQL setup SQL from `schema.sql`
4. Start server: `python app.py`

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