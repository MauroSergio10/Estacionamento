import json
import random
from datetime import datetime, timedelta
import time

<<<<<<< HEAD
# Caminhos dos arquivos JSON
data_path = 'C:\\Users\\mathe\\OneDrive\\Área de Trabalho\\web\\src\\bd.json'
history_path = 'C:\\Users\\mathe\\OneDrive\\Área de Trabalho\\web\\src\\historico.json'
=======
# Carregar os dados do arquivo JSON original
with open('D:\\College\\WebProgramming\\Projeto-final-web\\src\\bd.json', 'r') as f:
    data = json.load(f)
>>>>>>> 1cd5f4c053bdbe51dd3b2938e18450ea9d137228

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

<<<<<<< HEAD
def alter_data(data):
    # Seleciona os itens com active igual a true
    active_items = [item for item in data if item['active']]
    
    if not active_items:
        print("Nenhum item ativo encontrado para alterar.")
        return []

    # Seleciona entre 1 a 2 itens para alterar
    items_to_change = random.sample(active_items, k=min(2, len(active_items)))

    changes = []
=======
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
>>>>>>> 1cd5f4c053bdbe51dd3b2938e18450ea9d137228

    for item in items_to_change:
        old_item = item.copy()

<<<<<<< HEAD
        item['active'] = False
        item['placa'] = ''.join(random.choice('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890') for _ in range(7))
        item['dataEntrada'] = datetime.now().isoformat()

        if old_item != item:
            changes.append({
                'id': item['id'],
                'active': item['active'],
                'placa': item['placa'],
                'dataEntrada': item['dataEntrada'],
                'dataSaida': ''
            })
            print(f"Alterado: {item}")

    return changes

# Alterar os dados a cada intervalo de tempo específico
while True:
    # Recarrega os dados do arquivo JSON a cada iteração
    with open(data_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    changes = alter_data(data)
    if changes:
        with open(data_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4)

        # Adiciona as mudanças ao arquivo de histórico
        try:
            with open(history_path, 'r', encoding='utf-8') as f:
                history_content = f.read().strip()
                if history_content:
                    history = json.loads(history_content)
                else:
                    history = []
        except FileNotFoundError:
            history = []

        history.extend(changes)

        with open(history_path, 'w', encoding='utf-8') as f:
            json.dump(history, f, indent=4)

    time.sleep(random.randint(30, 30))  # espera entre 5 e 10 minutos
=======
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
>>>>>>> 1cd5f4c053bdbe51dd3b2938e18450ea9d137228
