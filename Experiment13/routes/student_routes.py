from flask import Blueprint, request, jsonify
from flask_mysqldb import MySQL
from validators import validate_student

student_bp = Blueprint("students", __name__)
mysql = MySQL()

# ── CREATE ──────────────────────────────────────────────
@student_bp.route("/students", methods=["POST"])
def create_student():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No JSON body provided"}), 400

    errors = validate_student(data)
    if errors:
        return jsonify({"errors": errors}), 422

    cur = mysql.connection.cursor()
    try:
        cur.execute(
            "INSERT INTO student (name, email, age, course) VALUES (%s, %s, %s, %s)",
            (data["name"], data["email"], int(data["age"]), data["course"])
        )
        mysql.connection.commit()
        new_id = cur.lastrowid
        return jsonify({"message": "Student created", "id": new_id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cur.close()

# ── READ ALL ─────────────────────────────────────────────
@student_bp.route("/students", methods=["GET"])
def get_students():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM student")
    students = cur.fetchall()
    cur.close()
    return jsonify(students), 200

# ── READ ONE ─────────────────────────────────────────────
@student_bp.route("/students/<int:student_id>", methods=["GET"])
def get_student(student_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM student WHERE id = %s", (student_id,))
    student = cur.fetchone()
    cur.close()
    if not student:
        return jsonify({"error": "Student not found"}), 404
    return jsonify(student), 200

# ── UPDATE ───────────────────────────────────────────────
@student_bp.route("/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    data = request.get_json()
    if not data:
        return jsonify({"error": "No JSON body provided"}), 400

    errors = validate_student(data, is_update=True)
    if errors:
        return jsonify({"errors": errors}), 422

    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM student WHERE id = %s", (student_id,))
    if not cur.fetchone():
        cur.close()
        return jsonify({"error": "Student not found"}), 404

    fields = []
    values = []
    for key in ["name", "email", "age", "course"]:
        if key in data:
            fields.append(f"{key} = %s")
            values.append(data[key])
    values.append(student_id)

    try:
        cur.execute(f"UPDATE student SET {', '.join(fields)} WHERE id = %s", values)
        mysql.connection.commit()
        return jsonify({"message": "Student updated"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cur.close()

# ── DELETE ───────────────────────────────────────────────
@student_bp.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM student WHERE id = %s", (student_id,))
    if not cur.fetchone():
        cur.close()
        return jsonify({"error": "Student not found"}), 404

    cur.execute("DELETE FROM student WHERE id = %s", (student_id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "Student deleted"}), 200