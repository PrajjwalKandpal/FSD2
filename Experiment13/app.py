import os
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

app.config["MYSQL_HOST"]        = os.getenv("MYSQL_HOST")
app.config["MYSQL_USER"]        = os.getenv("MYSQL_USER")
app.config["MYSQL_PASSWORD"]    = os.getenv("MYSQL_PASSWORD")
app.config["MYSQL_DB"]          = os.getenv("MYSQL_DB")
app.config["MYSQL_PORT"]        = int(os.getenv("MYSQL_PORT", 3306))
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

mysql = MySQL(app)

@app.route("/")
def home():
    return jsonify({"message": "Student CRUD API is running!"})

# ── DEBUG ROUTE ──────────────────────────────────────────
@app.route("/debug")
def debug():
    return jsonify({
        "MYSQL_HOST": os.getenv("MYSQL_HOST"),
        "MYSQL_USER": os.getenv("MYSQL_USER"),
        "MYSQL_DB":   os.getenv("MYSQL_DB"),
        "MYSQL_PORT": os.getenv("MYSQL_PORT"),
        "PASSWORD_SET": bool(os.getenv("MYSQL_PASSWORD"))
    })

@app.route("/dbtest")
def dbtest():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT 1")
        cur.close()
        return jsonify({"status": "DB connected successfully ✅"})
    except Exception as e:
        return jsonify({"status": "DB FAILED ❌", "error": str(e)}), 500

@app.route("/api/students", methods=["POST"])
def create_student():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No JSON body"}), 400
    try:
        cur = mysql.connection.cursor()
        cur.execute(
            "INSERT INTO student (name, email, age, course) VALUES (%s, %s, %s, %s)",
            (data["name"], data["email"], int(data["age"]), data["course"])
        )
        mysql.connection.commit()
        new_id = cur.lastrowid
        cur.close()
        return jsonify({"message": "Student created", "id": new_id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/students", methods=["GET"])
def get_students():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM student")
        students = cur.fetchall()
        cur.close()
        return jsonify(students), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/students/<int:student_id>", methods=["GET"])
def get_student(student_id):
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM student WHERE id = %s", (student_id,))
        student = cur.fetchone()
        cur.close()
        if not student:
            return jsonify({"error": "Student not found"}), 404
        return jsonify(student), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    data = request.get_json()
    if not data:
        return jsonify({"error": "No JSON body"}), 400
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM student WHERE id = %s", (student_id,))
        if not cur.fetchone():
            cur.close()
            return jsonify({"error": "Student not found"}), 404
        fields, values = [], []
        for key in ["name", "email", "age", "course"]:
            if key in data:
                fields.append(f"{key} = %s")
                values.append(data[key])
        values.append(student_id)
        cur.execute(f"UPDATE student SET {', '.join(fields)} WHERE id = %s", values)
        mysql.connection.commit()
        cur.close()
        return jsonify({"message": "Student updated"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM student WHERE id = %s", (student_id,))
        if not cur.fetchone():
            cur.close()
            return jsonify({"error": "Student not found"}), 404
        cur.execute("DELETE FROM student WHERE id = %s", (student_id,))
        mysql.connection.commit()
        cur.close()
        return jsonify({"message": "Student deleted"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)