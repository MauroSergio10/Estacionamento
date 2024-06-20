from app import db, login_manager, bcrypt
from flask_login import UserMixin

@login_manager.user_loader
def get_user(user_id):
    return User.query.filter_by(id=user_id).first()
# Create a table in the db

class User(db.Model, UserMixin):
    __tablename__ = 'usuario'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    nome = db.Column(db.String(35), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    senha = db.Column(db.String(100), unique=False, nullable=False)

    def __init__(self, nome, cpf, email, senha, saldototal):
        self.nome = nome
        self.email = email
        self.senha = bcrypt.generate_password_hash(senha)

    def verify_password(self, pwd):
        return bcrypt.check_password_hash(self.senha, pwd)
    
class Cliente(db.Model):
    __tablename__ = 'cliente'
    idcliente = db.Column(db.Integer, autoincrement=True, primary_key=True)
    placa = db.Column(db.String(35), unique=False, nullable=False)

    def __init__(self, placa):
        self.placa = placa

class Garagem(db.Model):
    __tablename__ = 'garagem'
    idgaragem = db.Column(db.Integer, autoincrement=True, primary_key=True)

    def __init__(self, idgaragem):
        self.idgaragem = idgaragem

class Transacao(db.Model):
    __tablename__ = 'transacao'
    idtransacao = db.Column(db.Integer, primary_key=True)
    hora_entrada = db.Column(db.String(35), unique=False, nullable=False)
    hora_saida = db.Column(db.String(11), nullable=False)
    valor = db.Column(db.String(120), unique=True, nullable=False)
    idcliente = db.Column(db.String(100), unique=False, nullable=False)
    idgaragem = db.Column(db.String(100), unique=False, nullable=False)

    def __init__(self, hora_entrada, hora_saida, valor, idcliente, idgaragem):
        self.hora_entrada = hora_entrada
        self.hora_saida = hora_saida
        self.valor = valor
        self.idcliente = idcliente
        self.idgaragem = idgaragem

