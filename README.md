#Trabalho-Fetin-089 — Automação de Respostas a Alertas do Wazuh

Este projeto monitora os alertas gerados pelo SIEM Wazuh em tempo real e executa respostas automáticas com base no tipo e nível do alerta.

📌 Funcionalidades

📄 Leitura e análise do arquivo alerts.json em tempo real.

🚫 Execução de ações automáticas, como bloqueio de IP malicioso.

📝 Registro de incidentes para auditoria e acompanhamento.

🐳 Instalação do Wazuh com Docker

O projeto utiliza a imagem oficial do Wazuh para criar um ambiente de SIEM local de forma rápida e prática.

Componentes Utilizados

wazuh/wazuh-manager — Responsável pelo gerenciamento de agentes e regras.

wazuh/wazuh-indexer — Armazena e indexa os logs e alertas.

wazuh/wazuh-dashboard — Interface gráfica para visualização e análise.

📚 Documentação Oficial

Documentação Wazuh - Docker

Repositório Oficial no GitHub

⚙️ Etapas de Instalação

1. Instale o Docker Desktop

  Download Docker Desktop

2. Clone este repositório
   git clone https://github.com/seu-usuario/Trabalho-Fetin-089.git
cd Trabalho-Fetin-089

3. Suba os containers
   docker-compose up -d
   
4. Acesse o painel Wazuh

Abra no navegador: http://localhost:5601

🚀 Execução da Automação

Após o Wazuh estar rodando, o script de automação ficará monitorando o arquivo alerts.json e:

Identificará alertas críticos.

Executará comandos de resposta (como bloqueio de IP via firewall).

Registrará todos os eventos para posterior análise.
