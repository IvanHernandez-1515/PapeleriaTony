from datetime import datetime
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import Blueprint, Flask, jsonify, request
from flask_pymongo import PyMongo
from prod import mongo

app = Flask(__name__)

#Creacion del modulo blueprint
marcas = Blueprint("marcas", __name__)

#creacion del objeto mongo de la clase PyMongo
# mongo = PyMongo() ##este hay que importarlo al main desde este archivo

#ruta que muestra la lista de todas las marcas
@marcas.route('/marcas/todos', methods=['GET'])
def mostrar_marcas():
    productos = mongo.db.Marca.find()
    resp = dumps(productos)
    return resp

##Agregando nueva marca
#Poner content-type y aplication/json en el header
#poner raw y JSON en el body
@marcas.route('/marca/insertando', methods=['POST'])    
def nueva_marca():
    marca = request.json['marca']
    logo = request.json['logotipo']
    num = request.json['numero']

    if request.method == "POST":
        marca = {
            'marca':marca,
            'logotipo':logo,
            'numero': num
        }
        mongo.db.Marca.insert_one(marca)
        return "documento agregado con exito"
    else:
        resp = jsonify({'Mensaje':'No se pudo agregar'})
        return resp

#Eliminando una marca
#Poner boton delete y un id
@marcas.route('/marca/eliminando/<id>', methods=['DELETE'])
def eliminando(id):
    mongo.db.Marca.delete_one({"_id":ObjectId(id)})
    resp = jsonify({"Mensaje":"La Marca con "+id+" fue eliminado"})
    return resp

#actualizando una marca
#Tipo de envio PUT
#Poner content-type y aplication/json en el header
#poner raw y JSON en el body
@marcas.route('/marcas/actualizar', methods=['PUT'])
def update():
    id = request.json['id']
    marca = request.json['marca']
    logo = request.json['logotipo']
    num = request.json['numero']

    marca = {
        'marca':marca,
        'logotipo':logo,
        'numero': num
    }
    try:
        mongo.db.Marca.update_one({"_id":ObjectId(id)}, {'$set':marca})
    except(StopIteration) as _:
        return "error"
    finally:
        resp = jsonify({"resp":'ACTUALIZADO'})
        resp.status_code=200
        return resp