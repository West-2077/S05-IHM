# Trabalho-Fetin-089 — Automação de Respostas a Alertas do Wazuh

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Docker](https://img.shields.io/badge/docker-ready-blue)
![Wazuh](https://img.shields.io/badge/Wazuh-4.x-orange)
![Licença](https://img.shields.io/badge/license-MIT-green)

<p align="center">
  <img src="https://wazuh.com/assets/img/wazuh_logo.svg" alt="Wazuh Logo" width="250"/>
</p>

---

## 📌 Sobre o Projeto
O **Trabalho-Fetin-089** é uma solução que monitora alertas gerados pelo **SIEM Wazuh** em tempo real e executa **respostas automáticas** com base no tipo e nível do alerta.

---

## 📜 Funcionalidades
- 📄 Leitura e análise do arquivo `alerts.json` em tempo real.  
- 🚫 Ações automáticas como **bloqueio de IP** malicioso.  
- 📝 Registro de incidentes para auditoria e acompanhamento.  

---

## 🐳 Instalação do Wazuh com Docker

O projeto utiliza a **imagem oficial do Wazuh** para criar um ambiente de SIEM local.

### Componentes Utilizados
- `wazuh/wazuh-manager` — Gerenciamento de agentes e regras.  
- `wazuh/wazuh-indexer` — Armazenamento e indexação de logs e alertas.  
- `wazuh/wazuh-dashboard` — Interface gráfica para análise e visualização.  

---

## 📚 Documentação Oficial
- [Documentação Wazuh - Docker](https://documentation.wazuh.com/current/deployment-options/docker/index.html)  
- [Repositório Oficial no GitHub](https://github.com/wazuh/wazuh-docker)  

---

## ⚙️ Etapas de Instalação
1. **Instale o Docker Desktop**  
   - [Download Docker Desktop](https://www.docker.com/products/docker-desktop)  

2. **Clone este repositório**  
   ```bash
   git clone https://github.com/seu-usuario/Trabalho-Fetin-089.git
   cd Trabalho-Fetin-089

3. Suba os containers
docker-compose up -d

4. Acesse o painel Wazuh

http://localhost:5601

🚀 Execução da Automação

Quando o Wazuh estiver rodando, o script de automação ficará monitorando alerts.json e:

Detectará alertas críticos.

Executará respostas automáticas (como bloqueio de IP).

Registrará eventos para auditoria.

📊 Fluxograma do Processo

flowchart TD
    A[Início] --> B[Ler alerts.json]
    B --> C{Alerta crítico?}
    C -- Sim --> D[Executar ação automática]
    D --> E[Registrar incidente]
    E --> B
    C -- Não --> B


📄 Licença
Este projeto está sob a licença MIT — veja o arquivo LICENSE para mais detalhes.


---

Se quiser, eu também posso **criar uma imagem PNG do fluxograma** para que o GitHub exiba mesmo em repositórios onde o `mermaid` não é renderizado.  
Quer que eu gere essa imagem para você agora?

