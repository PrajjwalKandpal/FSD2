from flask import Flask
from flask_mysqldb import MySQL
from config import Config
from routes.student_routes import student_bp, mysql

app = Flask(__name__)
app.config.from_object(Config)

mysql.init_app(app)

app.register_blueprint(student_bp, url_prefix="/api")

@app.route("/")
def home():
    return {"message": "Student CRUD API is running!"}

if __name__ == "__main__":
    app.run(debug=True)