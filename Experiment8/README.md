## Experiment No. 8 - Develop RESTful APIs using Backend Framework (Flask)

### Project Structure

```bash
Experiment8/
│
└── backend/
    │
    └── rest-api-lab/
        │
        ├── __pycache__/              # Compiled Python files (auto-generated)
        │
        ├── routes/                   # Contains all route modules
        │   └── student_routes.py     # Student CRUD API routes
        │
        ├── virenv/                   # Virtual Environment folder
        │   ├── Include/
        │   ├── Lib/
        │   ├── Scripts/
        │   ├── .gitignore
        │   └── pyvenv.cfg
        │
        ├── app.py                    # Flask app factory & configuration
        │
        ├── run.py                    # Entry point to start the server
        │
        ├── Procfile                  # Deployment configuration file
        │
        ├── requirements.txt          # Project dependencies
        │
        ├── README.md                 # Project documentation
        │
        └── Screenshots/              # (Recommended: move screenshots here)
            ├── Screenshot1.png
            ├── Screenshot2.png
            ├── Screenshot3.png
            ├── Screenshot4.png
            └── Screenshot5.png

### Technologies Used

- Python
- Flask
- REST API
- Postman
- Render (Cloud Deployment)
- Virtual Environment (virenv)

### Deployment Base URL --> [Render Link](https://experiment8fsd2.onrender.com/)


## STEPS & SCREENSHOTS
### 1. Server Running
![](rest-api-lab/SERVERRUN.png)
Flask development server successfully started.

### 2. CREATE Student (POST)
![Create Student 1](rest-api-lab/CREATE.png)

### 3. READ ALL Students (GET)
![Read All Students](rest-api-lab/READ.png)

### 4. READ ONE Student
### GET Student ID = 1
![Read One - ID 1](rest-api-lab/READ1.png)

### 5. UPDATE Student (PUT)
![Update Student](rest-api-lab/UPDATE.png)

### 6. DELETE Student
![Delete Student](rest-api-lab/DELETE.png)


## API Endpoints Summary
| Method | Endpoint | Description |
|--------|----------|------------|
| POST   | /students | Create new student |
| GET    | /students | Get all students |
| GET    | /students/<id> | Get student by ID |
| PUT    | /students/<id> | Update student |
| DELETE | /students/<id> | Delete student |

## Learning Outcome
- Understood how to set up and configure a Flask application for building RESTful APIs.
- Learned to map HTTP methods "(GET, POST, PUT, DELETE)" to corresponding CRUD operations on a Student resource.
- Learnt to create virtual enviroment of python using venv
- Learnt about flask in python
- Learnt about RESTful APIs
- Learnt to route in flask