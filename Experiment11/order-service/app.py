from flask import Flask, jsonify, request

app = Flask(__name__)

# Dummy order data
orders = [
    {"id": 101, "item": "Laptop", "status": "Pending"},
    {"id": 102, "item": "Phone", "status": "Shipped"},
    {"id": 103, "item": "Tablet", "status": "Delivered"}
]

# ✅ Home route (avoid 404)
@app.route('/')
def home():
    return "Order Service is running 🚀"

@app.route('/orders', methods=['GET'])
def get_orders():
    return jsonify(orders), 200

@app.route('/orders/<int:order_id>', methods=['PUT'])
def update_order(order_id):
    # ✅ Validate JSON input
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()

    if "status" not in data:
        return jsonify({"error": "Missing 'status' field"}), 400

    for order in orders:
        if order["id"] == order_id:
            order["status"] = data["status"]
            return jsonify({
                "message": "Order updated successfully",
                "order": order
            }), 200

    return jsonify({"error": "Order not found"}), 404


if __name__ == '__main__':
    app.run(port=5001, debug=True)