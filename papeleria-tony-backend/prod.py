from datetime import datetime
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import Blueprint, Flask, jsonify, request
from flask_pymongo import PyMongo

app = Flask(__name__)


productos = Blueprint("productos", __name__)

# @productos.route("/productos/todos")
# def obtenerprod():
#     return "aqui estan todos los productos"

#creacion del objeto mongo de la clase PyMongo
mongo = PyMongo()

#ruta que muestra la lista de todos los productos
@productos.route('/productos/todos', methods=['GET'])
def mostrar_produc():
    productos = mongo.db.productos.find()
    resp = dumps(productos)
    return resp

##Ruta que muestra los proeductos ordenados por nombre
@productos.route('/prod/todos', methods=['GET'])
def prod():
    query = {}
    sort = [("nombre", 1)]
    project = {"_id":0, "nombre":1, "origen":1, "status":1}
    productos = mongo.db.productos.find(query, project).sort(sort)
    return dumps(productos)

#Buscando un solo articulo
@productos.route('/prod/uno', methods=['GET'])
def unico():
    query = {"nombre":"lapiz de grafito"}
    project = {"_id":0, "nombre":1, "origen":1, "costo":1 ,"status":1}
    productos = mongo.db.productos.find(query, project)
    return dumps(productos)

#Buscando por un articulo dado en la ruta
@productos.route('/prod/por/<nombre>', methods=['GET'])
def pornombre(nombre):
    query = {"nombre":{'$eq':nombre}}
    project = {"_id":0, "nombre":1, "origen":1, "costo":1 ,"status":1}
    try:
        productos = mongo.db.productos.find(query, project)
        return dumps(productos)
    except(StopIteration) as _:
        return None

    except Exception as _e:
        return{}

#busqeuda por ID
@productos.route('/prod/x/<id>', methods=['GET'])
def porid(id):
    producto = mongo.db.productos.find_one({'_id':ObjectId(id)})
    return dumps(producto)

##Greather than pór costo
@productos.route('/prod/porcosto/<costo>', methods=['GET'])
def prod_costo(costo):
    a=int(costo)
    query = {"costo":{"$gte":a}}
    project = {"_id":0, "nombre":1, "origen":1, "status":1}
    productos = mongo.db.productos.find(query, project)
    return dumps(productos)

#lte
@productos.route('/prod/porcostomenor/<costob>', methods=['GET'])
def prod_costo_menor(costob):
    b=int(costob)
    query = {"costo":{"$lte":b}}
    project = {"_id":0, "nombre":1, "origen":1, "status":1}
    productos = mongo.db.productos.find(query, project)
    return dumps(productos)

#not equal
@productos.route('/prod/categorianombre/<categoria>', methods=['GET'])
def prodcategoria(categoria):
    query = {"categoria.nombre":{"$ne":categoria}}
    project = {"_id":0, "nombre":1, "categoria.nombre":1, "status":1}
    productos = mongo.db.productos.find(query, project)
    return dumps(productos)

#and
@productos.route('/prod/nomycosto/<nombre>/<costos>', methods=['GET'])
def prodnombycosto(nombre, costos):
    co = float(costos)
    query = {"$and":[{"nombre":nombre},{"costo":co}]}
    project = {"_id":0, "nombre":1, "categoria.nombre":1, "status":1}
    productos = mongo.db.productos.find(query, project)
    return dumps(productos)

#or
@productos.route('/prod/origenorcolor/<origen>/<color>', methods=['GET'])
def prodorigenorcolor(origen,color):
    query = {"$or":[{"origen":origen},{"color":color}]}
    project = {"_id":0, "nombre":1, "categoria.nombre":1, "status":1}
    productos = mongo.db.productos.find(query, project)
    return dumps(productos)

#in
@productos.route('/prod/dentrode/<costo1>/<costo2>/<costo3>', methods=['GET'])
def prodporin(costo1,costo2,costo3):
    c1 = int(costo1)
    c2 = float(costo2)
    c3 = int(costo3)
    query = {"costo":{"$in":[c1,c2,c3]}}
    project = {"_id":0, "nombre":1, "categoria.nombre":1, "status":1}
    productos = mongo.db.productos.find(query, project)
    return dumps(productos)

#nin
@productos.route('/recuperaNom/<color1>/<color2>', methods=['GET'])
def recuperar(color1, color2):   
    query = {"color":{'$nin':[color1, color2]}}
    proyect = {"_id":0,"nombre":1,"caracteristicas":1,"categoria":1,"costo":1,"color":1}
    productos = mongo.db.productos.find(query,proyect)
    return dumps(productos)

#eq OBJT EMBEBIDO
@productos.route('/objetoEndebido/obejto/<categoria>', methods=['GET'])
def objeto(categoria):
    query = {"categoria.nombre":{'$eq':categoria}}
    proyect = {"_id":0,"nombre":1,"caracteristicas":1,"categoria":1,"costo":1,"color":1}
    productos = mongo.db.productos.find(query,proyect)
    return dumps(productos)

#array1
@productos.route('/descripcion/array/<descrip1>/<descrip2>/<descrip3>', methods=['GET'])
def descripcion(descrip1, descrip2, descrip3):
    query = {"descripcion":[descrip1, descrip2, descrip3]}
    proyect = {"_id":0,"nombre":1,"caracteristicas":1,"categoria":1,"costo":1,"color":1,'descripcion':1}
    productos = mongo.db.productos.find(query,proyect)
    return dumps(productos)

#array2
@productos.route('/descripcion/arrayxd/<des1>', methods=['GET'])
def desuno(des1):
    query = {"descripcion":des1}
    proyect = {"_id":0,"nombre":1,"caracteristicas":1,"categoria":1,"costo":1,"color":1,'descripcion':1}
    productos = mongo.db.productos.find(query,proyect)
    return dumps(productos)

#fechadate PENDIENTE
@productos.route('/Tipofecha/fecha/<fecha_ad>', methods=['GET'])
def dfecha_ad(fecha_ad):
    query = {"fecha_ad":{"$gte":(fecha_ad)}}
    proyect = {"_id":0,"nombre":1,"caracteristicas":1,"categoria":1,"costo":1,"color":1}
    productos = mongo.db.productos.find(query,proyect)
    return dumps(productos)

#Eliminando un producto
#poner boton delete y un id 
@productos.route('/prod/elminando/<id>', methods=['DELETE'])
def eliminar(id):
    mongo.db.productos.delete_one({"_id":ObjectId(id)})
    resp = jsonify({"Mensaje":"El producto con "+id+" fue eliminado"})
    return resp

##Agregando un nuevo producto
#Poner content-type y aplication/json en el header
#poner raw y JSON en el body
@productos.route('/prod/insertando', methods=['POST'])    
def nuevo_prod():
    clv = request.json['clave']
    nom = request.json['nombre']
    cos = request.json['costo']
    col = request.json['color'] 
    desc = request.json['descripcion']
    fot = request.json['foto']
    orig = request.json['origen']
    sta = request.json['status']
    catn = request.json['categoria']['nombre']
    catde = request.json['categoria']['descripcion']
    med = request.json['medida']
    modna = request.json['modelo']['nombre']
    moddes = request.json['modelo']['descripcion']
    ##Forma correcta de insertar array
    listadesc = []
    listadesc = desc.split(',')
    pre=float(cos)
    ##
    if request.method == "POST":
        producto = {
            'clave':clv,
            'nombre':nom,
            'costo':pre,
            'precio':pre+(pre*30)/100,
            'color':col,
            'descripcion':listadesc,
            'fecha_ad':datetime.now(),
            'foto':fot,
            'origen':orig,
            'status':sta,
            'categoria':{'nombre':catn, 'descripcion':catde},
            'medida':med,
            'modelo':{'nombre':modna, 'descripcion':moddes}
        }
        mongo.db.productos.insert_one(producto)
        return "documento agregado con exito"
    else:
        resp = jsonify({'Mensaje':'No se pudo agregar'})
        return resp

#actualizar
@productos.route('/productos/utpdate', methods=['PUT'])
def update():
    id = request.json['id']
    clv = request.json['clave']
    nom = request.json['nombre']
    cos = request.json['costo']
    col = request.json['color'] 
    desc = request.json['descripcion']
    fot = request.json['foto']
    orig = request.json['origen']
    sta = request.json['status']
    catn = request.json['categoria']['nombre']
    catde = request.json['categoria']['descripcion']
    med = request.json['medida']
    modna = request.json['modelo']['nombre']
    moddes = request.json['modelo']['descripcion']
    costo = int(cos)
    listadesc=[]
    listadesc = desc.split(',')

    ProdA = {
        'clave':clv,
        'nombre':nom,
        'costo':cos,
        'precio':cos+(cos*30)/100,
        'color':col,
        'descripcion':listadesc,
        'fecha_ad':datetime.now(),
        'foto':fot,
        'origen':orig,
        'status':sta,
        'categoria':{'nombre':catn, 'descripcion':catde},
        'medida':med,
        'modelo':{'nombre':modna, 'descripcion':moddes}
    }
    try:
        mongo.db.productos.update_one({"_id":ObjectId(id)}, {'$set':ProdA})
    except(StopIteration) as _:
        return "error"
    finally:
        resp = jsonify({"resp":'ACTUALIZADO'})
        resp.status_code=200
        return resp