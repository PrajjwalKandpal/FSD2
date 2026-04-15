from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "Backend Running Successfully"})

@app.route("/process", methods=["POST"])
def process():
    data = request.json
    name = data.get("name", "")

    return jsonify({
        "original": name,
        "upper": name.upper(),
        "length": len(name),
        "status": "processed"
    })

if __name__ == "__main__":
    app.run(debug=True)