import json
import random
from datetime import datetime, timedelta
import time

# Carregar os dados do arquivo JSON original
with open('D:\\College\\WebProgramming\\Projeto-final-web\\src\\bd.json', 'r') as f:
    data = json.load(f)

# Lista para armazenar as alterações para histórico
historico = []

# Função para gerar uma data aleatória
def random_date():
    start_date = datetime(2024, 5, 30)
    end_date = start_date + timedelta(days=1)

    time_between_dates = end_date - start_date
    random_number_of_seconds = random.randrange(int(time_between_dates.total_seconds()))

    random_date = start_date + timedelta(seconds=random_number_of_seconds)

    return random_date.isoformat()

# Função para salvar alterações no histórico
def save_to_history(new_item):
    historico.append(new_item)

    with open('D:\\College\\WebProgramming\\Projeto-final-web\\src\\Historico.json', 'w') as historico_file:
        json.dump(historico, historico_file, indent=4)

# Função para alterar os dados
def alter_data(data):
    # Seleciona apenas os itens que estão ativos (active = True)
    items_to_change = [item for item in data if item['active']]

    # Limita a seleção a até 2 itens
    items_to_change = random.sample(items_to_change, k=min(len(items_to_change), random.randint(1, 2)))

    for item in items_to_change:
        old_item = item.copy()

        item['active'] = False  # Define como False para ocupar a vaga
        item['placa'] = ''.join(random.choice('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890') for _ in range(7))  # Gera uma nova placa aleatória
        item['dataEntrada'] = datetime.now().isoformat()  # Registra a data de entrada

        print(f"Vaga ocupada: {item}")
        save_to_history(item)  # Salvar apenas o novo item no histórico

# Alterar os dados a cada intervalo de tempo aleatório
while True:
    alter_data(data)
    
    # Escrever as alterações de volta no arquivo bd.json
    with open('D:\\College\\WebProgramming\\Projeto-final-web\\src\\bd.json', 'w') as f:
        json.dump(data, f, indent=4)
    
    # Esperar entre 10 e 10 segundos antes da próxima alteração
    time.sleep(random.randint(10, 10))
