// criar uma api que mostra os dados que estao em bd.json

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3001;

const cors = require('cors');
app.use(cors());


app.get('/dados', (req, res) => {
    fs.readFile('bd.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            res.status(500).send('Erro ao converter os dados para JSON');
        }
    });
});


// recebe o valor de placa e retorna o dado que tem a placa igual a placa
app.get('/dados/:placa', (req, res) => {
    const placa = req.params.placa;
    fs.readFile('bd.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            const registro = jsonData.find(item => item.placa === placa);
            // altera o valor de placa para DISPONIVEL, active para true e dataEntrada para vazio
            if (registro) {
                registro.placa = "DISPONIVEL";
                registro.active = true;
                registro.dataEntrada = "";
            }
            // atualiza o arquivo bd.json
            fs.writeFile('bd.json', JSON.stringify(jsonData, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Erro ao atualizar o arquivo');
                    return;
                }
            });

            if (registro) {
                res.json(registro);
            } else {
                res.status(404).send('Registro não encontrado');
            }
        } catch (error) {
            res.status(500).send('Erro ao converter os dados para JSON');
        }
    });
});

// cria uma rota para historico, recebe a placa
app.get('/historico/:placa', (req, res) => {
    const placa = req.params.placa;
    fs.readFile('historico.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            const registro = jsonData.find(item => item.placa === placa);
            // altera o valor de data de saida para a data atual
            if (registro) {
                // Cria um objeto Date para a data e hora atuais
                let agora = new Date();

                // Ajusta a data/hora para o fuso horário local (exemplo para UTC-3)
                agora.setHours(agora.getHours() - 3);

                // Converte a data/hora ajustada para o formato ISO string
                registro.dataSaida = agora.toISOString();
            }
            // atualiza o arquivo historico.json
            fs.writeFile('historico.json', JSON.stringify(jsonData, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Erro ao atualizar o arquivo');
                    return;
                }
            });
            if (registro) {
                res.json(registro);
            } else {
                res.status(404).send('Registro não encontrado');
            }
        } catch (error) {
            res.status(500).send('Erro ao converter os dados para JSON');
        }
    });
});






app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});