from flask import Flask
from flask_mysqldb import MySQL
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

mysql = MySQL(app)

from routes.student_routes import register_routes
register_routes(app, mysql)

@app.route("/")
def home():
    return {"message": "Student CRUD API is running!"}

if __name__ == "__main__":
    app.run(debug=True)