from app import app, db
from flask import render_template, redirect, request, url_for
from flask_login import login_user, logout_user
from app.models import User, Transacao, Garagem, Cliente 
import time


@app.route('/registrar', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        data = request.get_json()

        new_user = User(nome=data['nome'], email=data['email'], senha=data['senha'])

        db.session.add(new_user)
        db.session.commit()

    return jsonify({'message': 'Usuario Registrado com Sucesso!'})

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        data = request.get_json()

        user = User.query.filter_by(email=data['email']).first()

        if user and user.verify_password(data['pwd']):
            login_user(user)
            return jsonify({'message': 'Login Efetuado com Sucesso!'})
        else:
           return jsonify({'message': 'Email ou Senha estão Incorretos!'})

@app.route('/saida', methods=['POST'])
def investir():
    
    data = request.get_json()

    entrada = Transacao.query.filter_by(idgaragem=data['vaga']).first()

    saida = Transacao(hora_entrada=entrada.hora_entrada,hora_saida=time, valor=(entrada.hora_entrada-time)*0.5, idcliente=entrada.idcliente, idgaragem=entrada.vaga)
    
    db.session.add(saida)
    db.session.commit()

    return jsonify({'message': f'Vaga {float(entrada.vaga)} Desocupada com Sucesso!'})

@app.route('/estacionar', methods=['POST'])
def investir():
    
    data = request.get_json()

    transacao = Transacao(hora_entrada=time, idcliente=data['idcliente'], idgaragem=data['vaga'])

    db.session.add(transacao)
    db.session.commit()

    return jsonify({'message': f'Vaga {float(data['vaga'])} Ocupada com Sucesso!'})



app.run(debug=True)

