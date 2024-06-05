import json
import random
from datetime import datetime, timedelta
import time

# Carregar os dados do arquivo JSON
with open('D:\\College\\WebProgramming\\Projeto-final-web\\src\\bd.json', 'r') as f:
    # Your code here

    data = json.load(f)

# Função para gerar uma data aleatória
def random_date():
    start_date = datetime(2024, 5, 30)
    end_date = start_date + timedelta(days=1)

    time_between_dates = end_date - start_date
    random_number_of_seconds = random.randrange(int(time_between_dates.total_seconds()))

    random_date = start_date + timedelta(seconds=random_number_of_seconds)

    return random_date.isoformat()

# Função para alterar os dados
# Função para alterar os dados
# Função para alterar os dados
def alter_data(data):
    # Seleciona entre 1 a 2 itens para alterar
    items_to_change = random.sample(data, k=random.randint(1, 2))

    for item in items_to_change:
        old_item = item.copy()

        item['active'] = bool(random.getrandbits(1))
        item['placa'] = 'DISPONIVEL' if item['active'] else ''.join(random.choice('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890') for _ in range(7))
        item['dataEntrada'] = datetime.now().isoformat() if not item['active'] else ''

        if old_item != item:
            print(f"Alterado: {item}")

# Alterar os dados a cada intervalo de tempo aleatório
while True:
    alter_data(data)
    with open('D:\\College\\WebProgramming\\Projeto-final-web\\src\\bd.json', 'w') as f:
    # Your code here

        json.dump(data, f, indent=4)
    time.sleep(random.randint(10, 10))  # espera entre 1 e 5 minutos