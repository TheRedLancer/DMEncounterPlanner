from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

# this data would NOT be in app memory, but rather saved to disk
# this could be in a database, a file, or some other process
id = 0
noteList = []

api = Flask(__name__)
cors = CORS(api)


@api.route("/id", methods=["GET"])
def get_nextID():
    global id
    # lookup value in database...
    # return value
    id = id + 1
    return jsonify({"id": id}), 200


@api.route("/notelist", methods=["GET"])
def get_noteList():
    global noteList
    # lookup value in database...
    # return value
    return jsonify({"noteList": noteList}), 200


@api.route("/notelist", methods=["POST"])
def set_noteList():
    global noteList
    # set value in database...
    noteList = request.json["noteList"]
    # return something indicating success
    return jsonify({"success": True, "noteList": noteList}), 201


if __name__ == "__main__":
    api.run()
