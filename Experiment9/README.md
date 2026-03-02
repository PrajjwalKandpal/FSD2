## Experiment No. 9 - Implement authentication using JWT

### Project Structure

```bash
Experiment9/
│
├── venv/                     # Virtual environment (do not push to GitHub)
│
├── app.py                    # Main Flask app
│
├── requirements.txt          # Python dependencies
│
├── README.md                 # Documentation
│
├── routes/                   # All route files
│   ├── __init__.py
│   ├── auth_routes.py        # Login & token generation
│   └── protected_routes.py   # JWT protected APIs
│
├── utils/                    # Helper functions
│   ├── __init__.py
│   └── jwt_handler.py        # Token create/verify logic
│
├── config.py                 # Secret keys & config
│
└── screenshots/              # Store your PNG images here
    ├── BASICAUTH.png
    ├── JWTGEN.png
    ├── JWTACCESS.png
    ├── TOKENACCESS.png
    ├── TOKENAGEN.png
    ├── RENDERSERVER.png
```

### Technologies Used

- Python
- Flask-jwt-extended
- Flask
- Postman
- Render (Cloud Deployment)
- Virtual Environment (venv)

### Deployment Base URL --> [Render Link](https://two3bis70052experiment9fsd2.onrender.com/)


## STEPS & SCREENSHOTS
### 1. Server Running
![](RENDERSERVER.png)
Flask development server successfully started.

### 2. Basic Authentication (Login with Username & Password)(GET)
![Basic Authorization](BASICAUTH.png)

### 3. Generate Token(POST)
![Token Generation](TOKENGEN.png)

### 4. Access Token(GET)
![Token Access](TOKENACCESS.png)

### 5. Generate JWT Token(Post)
![Jwt Token Generation](JWTGEN.png)

### 6. Access JWT Token(GET)
![JWT Access](JWTACCESS.png)



## API Endpoints Summary
| Method | Endpoint | Description |
|--------|----------|------------|
| GET    | /login   | Baisc Authentication Login |
| POST   | /token   | Generate JWT token |
| GET    | /protected | Access protected route (JWT required) |



## Learning Outcome
- Understood the concept of authentication and authorization in web applications.
- Implemented Basic Authentication using Flask.
- Generated and verified JWT tokens for secure API access.
- Protected API routes using token-based authentication.
- Tested secured endpoints using Postman with Authorization headers.

