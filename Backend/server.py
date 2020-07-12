from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

# this data would NOT be in app memory, but rather saved to disk
# this could be in a database, a file, or some other process
id = 0;

api = Flask(__name__)
cors = CORS(api)

@api.route("/id", methods=["GET"])
def get_nextID():
    global id
    # lookup value in database...
    # return value
    id = id + 1
    return jsonify({ "id": id }), 200

@api.route("/id", methods=["POST"])
def set_id():
    global id
    # set value in database...
    id = request.json["id"]
    # return something indicating success
    return jsonify({ "success": True, "id": id }), 201

if __name__ == "__main__":
    api.run()
