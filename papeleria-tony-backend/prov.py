from datetime import datetime
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import Blueprint, Flask, jsonify, request
from flask_pymongo import PyMongo
from prod import mongo

app = Flask(__name__)


prove = Blueprint("prove", __name__)

# @prove.route("/prove/todos")
# def obtenerprod():
#     return "aqui estan todos los productos"

#creacion del objeto mongo de la clase PyMongo
# mongo = PyMongo() ##este hay que importarlo al main desde este archivo

#ruta que muestra la lista de todos los proveedores
@prove.route('/prove/todos', methods=['GET'])
def mostrar_pro():
    productos = mongo.db.proveedores.find()
    resp = dumps(productos)
    return resp

##Agregando un nuevo proveedor
#Poner content-type y aplication/json en el header
#poner raw y JSON en el body
@prove.route('/prove/insertando', methods=['POST'])    
def nuevo_prove():
    rfc = request.json['rfc']
    st = request.json['estatus']
    emp = request.json['nomEmpresa']
    pag = request.json['paginaWEB']
    rep = request.json['representante']
    tel = request.json['telProveedor']
    idusu = request.json['usuarioid']

    if request.method == "POST":
        proveedor = {
            'rfc': rfc,
            'estatus': st,
            'nomEmpresa': emp,
            'paginaWEB': pag,
            'representante': rep,
            'telProveedor': tel,
            'fecha_registro':datetime.now(),
            'usuarioid': idusu,
        }
        mongo.db.proveedores.insert_one(proveedor)
        return "documento agregado con exito"
    else:
        resp = jsonify({'Mensaje':'No se pudo agregar'})
        return resp

#Eliminando un proveedor 
#Poner boton delete y un id
@prove.route('/prove/elminando/<id>', methods=['DELETE'])
def eliminando(id):
    mongo.db.proveedores.delete_one({"_id":ObjectId(id)})
    resp = jsonify({"Mensaje":"El proveedor con "+id+" fue eliminado"})
    return resp

#actualizando un proveedor
#Tipo de envio PUT
#Poner content-type y aplication/json en el header
#poner raw y JSON en el body
@prove.route('/prove/actualizar', methods=['PUT'])
def update():
    id=request.json['id']
    rfc = request.json['rfc']
    st = request.json['estatus']
    emp = request.json['nomEmpresa']
    pag = request.json['paginaWEB']
    rep = request.json['representante']
    tel = request.json['telProveedor']
    idusu = request.json['usuarioid']

    Proveedor = {
            'rfc': rfc,
            'estatus': st,
            'nomEmpresa': emp,
            'paginaWEB': pag,
            'representante': rep,
            'telProveedor': tel,
            'fecha_registro':datetime.now(),
            'usuarioid': idusu,
    }
    try:
        mongo.db.proveedores.update_one({"_id":ObjectId(id)}, {'$set':Proveedor})
    except(StopIteration) as _:
        return "error"
    finally:
        resp = jsonify({"resp":'ACTUALIZADO'})
        resp.status_code=200
        return resp