from flask import Blueprint, jsonify

bp = Blueprint('routes', __name__)

@bp.route('/test')
def test():
    return jsonify({"msg": "Test route"})