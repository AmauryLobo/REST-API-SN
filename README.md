# 🚀 Automação de Incidentes via Scripted REST API (ServiceNow)

## 📌 Descrição do Projeto
Este projeto consiste numa **Scripted REST API** desenvolvida no ServiceNow para receber alertas de monitorização externos via Webhook e automatizar a criação de incidentes na plataforma.

## 🛠️ Tecnologias Utilizadas
* **ServiceNow:** Scripted REST API, GlideRecord, REST API Explorer.
* **Linguagens:** JavaScript, JSON.
* **Ferramentas:** GitHub, Postman.

## ⚙️ Como Funciona
1. O endpoint `/api/x_1319177_gatewa_0/webhook_de_monitoramento/create` recebe uma requisição `POST` com um corpo JSON.
2. A API lê e mapeia as chaves `short_description` e `description`.
3. É instanciado um novo registo na tabela `incident` através de `GlideRecord`.
4. A API retorna a resposta HTTP `201 Created` contendo o número do incidente gerado e o `sys_id`.

## 🧠 Aprendizagens e Troubleshooting
Durante o desenvolvimento, identifiquei bloqueios de rede/autenticação (`401 Unauthorized`) no teste externo via Postman. Para isolar e validar a lógica do código, utilizei o **REST API Explorer** nativo, confirmando o pleno funcionamento da API e o mapeamento correto dos dados.
