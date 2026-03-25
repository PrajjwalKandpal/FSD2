from flask import Flask, jsonify
import requests

app = Flask(__name__)

# Dummy customer data
customers = {
    1: {"name": "John", "orders": [101, 102]},
    2: {"name": "Alice", "orders": [103]}
}

ORDER_SERVICE_URL = "http://127.0.0.1:5001/orders"

# ✅ Optional: Home route to avoid 404
@app.route('/')
def home():
    return "Customer Service is running 🚀"

@app.route('/customers/<int:customer_id>/orders', methods=['GET'])
def get_customer_orders(customer_id):
    customer = customers.get(customer_id)

    if not customer:
        return jsonify({"error": "Customer not found"}), 404

    try:
        # ✅ Add timeout (very important)
        response = requests.get(ORDER_SERVICE_URL, timeout=5)
        response.raise_for_status()  # raises error for 4xx/5xx

        all_orders = response.json()

        # ✅ Safer filtering
        customer_orders = [
            order for order in all_orders 
            if order.get("id") in customer["orders"]
        ]

        return jsonify({
            "customer": customer["name"],
            "orders": customer_orders
        })

    except requests.exceptions.RequestException:
        return jsonify({"error": "Order service unavailable"}), 500


if __name__ == '__main__':
    app.run(port=5000, debug=True)