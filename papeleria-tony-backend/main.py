from flask import Flask
from flask_cors import CORS
from prod import mongo
from prod import productos
from prov import prove
from marcas import marcas

#creacion del objeto de la clase flask
app = Flask(__name__)

#Configuracion de la cadena de conexion
app.config["MONGO_URI"]= "mongodb+srv://davidroni61:glcTBLXA7JdWvMnX@cluster0.t22gzlj.mongodb.net/PapeleriaTONY?retryWrites=true&w=majority"
mongo.init_app(app)
CORS(app)

#registro del blueprint de proveedoresk
app.register_blueprint(prove)
app.register_blueprint(productos)
app.register_blueprint(marcas)

#Direccion en la que se ejecuta el archivo
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=4000, debug=True)