function openMenu() {
  
    document.getElementById("menu_aba").style.display = "block";
}

function closeMenu() {
 
    document.getElementById("menu_aba").style.display = "none";
}

function temaLim() {
  
    document.documentElement.style.setProperty('--cor-click', '#38184C');
    document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
    document.documentElement.style.setProperty('--cor-back2', '#4f6a93');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#38184C');
}

function temaInatel() {

    document.documentElement.style.setProperty('--cor-click', '#126ae2');
    document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
    document.documentElement.style.setProperty('--cor-back2', '#6a937a');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
}

function temaDark() {

    const cores = {
        '--cor-click': '#CEF09D',
        '--cor-sombra': '#9b0a59',
        '--cor-text': 'black',
        '--cor-back1': '#38184C',
        '--cor-back2': '#4f6a93',
        '--md-sys-color-primary': '#CEF09D'
    };

    for (const [variavel, valor] of Object.entries(cores)) {
        document.documentElement.style.setProperty(variavel, valor);
    }
}



const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

const carousel = document.querySelector('.carousel');
let index = 0;


function createCards() {
    eventos.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p><span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}</p>
            </div>
        `;
        carousel.appendChild(card);
    });
}


function nextCard() {
    index = (index + 1) % eventos.length;
    updateCarousel();
}


function prevCard() {
    index = (index - 1 + eventos.length) % eventos.length;
    updateCarousel();
}


function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}


document.getElementById('nextBtn').addEventListener('click', nextCard);
document.getElementById('prevBtn').addEventListener('click', prevCard);


setInterval(nextCard, 5000);


let startX;
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    
    if (startX - endX > 50) nextCard();
    
    if (endX - startX > 50) prevCard();
});


createCards();




class AulasComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); 
        this.aulas = [
            {
                id: 1,
                disciplina: 'S05 - Interface Homem-máquina',
                data: 'ter',
                horario: '10:00',
                local: 'P1-S17',
                prova_alert: false,
                prova: '12/05',
                frequencia: '10/25',
                nota: '10'
            },
            {
                id: 2,
                disciplina: 'E01 - Circuitos Elétricos em Corrente Contínua',
                data: 'ter',
                horario: '10:00',
                local: 'P1-S17',
                prova_alert: true,
                prova: '12/05',
                frequencia: '10/25',
                nota: '5'
            },
            {
                id: 3,
                disciplina: 'M02 - Álgebra e Geometria Analítica',
                data: 'ter',
                horario: '10:00',
                local: 'P1-S17',
                prova_alert: true,
                prova: '12/05',
                frequencia: '10/25',
                nota: '7'
            }
        ];
        this.hoje = "ter"; 
    }

    connectedCallback() {
        this.render(); 
    }

    
    render() {
        const aulasDia = this.aulas.filter(a => a.data === this.hoje); 
        
       
        this.shadowRoot.innerHTML = `
            <style>
            .comp-aula {
                position: relative;
                background-color: white;
                padding: 15px;
                margin: 20px;
                border-radius: 10px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            }

            .titulo_aula {
                font-family: "Arimo", sans-serif;
                font-weight: bold;
                font-size: 15px;
                color: var(--cor-text);
                padding-left: 5px;
                padding-right: 5px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            /* ... (Demais estilos do Web Component omitidos para brevidade, mas estão corretos no seu código) ... */
            
            .lable-nota-vermelho { background-color: red; /* Nota baixa */ }
            .lable-nota-laranja { background-color: orange; /* Nota mediana, atenção */ }
            .lable-nota-verde { background-color: green; /* Nota alta */ }
            
            .p_lable {
                font-family: "Arimo", sans-serif;
                font-size: 11px;
                color: white;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 7px;
                padding-right: 15px;
                padding-left: 15px;
                margin-right: 10px;
                border-radius: 500px;
            }
            
            /* Os estilos do Web Component que definem margens, paddings, etc. aqui */
            .lables { display: flex; }

            .lable-prova { background-color: var(--prova); margin-bottom: 10px; text-align: center }
            .lable-frequencia { background-color: var(--frequencia); }

            </style>
            
            <div>
                ${aulasDia.map(a => {
                    let provaDisplay = a.prova_alert ? '' : 'display: none;';
                    let lableNota;
                    
                    
                    if (a.nota <= 5){
                        lableNota = 'lable-nota-vermelho';
                    } else if (a.nota > 5 && a.nota < 7){ 
                        lableNota = 'lable-nota-laranja';
                    } else if (a.nota >= 7 && a.nota < 9){ 
                        lableNota = 'lable-nota-laranja';
                    } else if (a.nota >= 9 && a.nota <= 10){
                        lableNota = 'lable-nota-verde';
                    } else {
                        lableNota = 'lable-nota'; 
                    }
                    
                    return `
                        <div class="comp-aula">
                            <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
                            <div class="titulo_aula">${a.disciplina}</div>
                            <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
                            <div class="lables">
                                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                                <div class="${lableNota} p_lable">CR: <b>${a.nota}</b></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }
}


customElements.define('aulas-component', AulasComponent);



const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };


const armarios = [
    { id: 1, formato: "padrao", status: true, acessivel: false },
    { id: 2, formato: "padrao", status: true, acessivel: false },
    { id: 3, formato: "padrao", status: true, acessivel: false },
    { id: 4, formato: "padrao", status: false, acessivel: true },
    { id: 5, formato: "padrao", status: false, acessivel: true },
    { id: 6, formato: "duplo", status: true, acessivel: true },
    { id: 7, formato: "duplo", status: false, acessivel: true },
    { id: 8, formato: "duplo", status: false, acessivel: true },
];

let tipoSelecionado = null;


document.querySelectorAll('.tipo').forEach(div => {
    div.addEventListener('click', () => {
       
        document.querySelectorAll('.tipo').forEach(d => d.classList.remove('selected'));
        div.classList.add('selected');
        tipoSelecionado = div.dataset.value;
    });
});


function reservarArmario() {
    const resultado = document.getElementById("resultado");
    const armarioNumero = document.getElementById("armarioNumero");

    if (!tipoSelecionado) {
        resultado.innerText = "Por favor, selecione um tipo de armário antes de reservar.";
        armarioNumero.style.display = "none";
        return;
    }

   
    let armariosDisponiveis = armarios.filter(a =>
        a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel
    );

    if (armariosDisponiveis.length === 0) {
        resultado.innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
        armarioNumero.style.display = "none";
        return;
    }

    let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
    let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id);
    armarioEmprestado.status = false;

    
    let dataReserva = new Date();
    armarioEmprestado.dataReserva = dataReserva.toLocaleString("pt-BR");
    let dataEntrega = new Date(dataReserva.getTime() + 24 * 60 * 60 * 1000); 
    armarioEmprestado.dataEntrega = dataEntrega.toLocaleString("pt-BR");

    usuario.pendencia = true;

  
    armarioNumero.innerText = `Armário Nº ${armarioEmprestado.id}`;
    armarioNumero.style.display = "block";

    resultado.innerText =
        `Data da reserva: ${armarioEmprestado.dataReserva}\n` +
        `Data de entrega: ${armarioEmprestado.dataEntrega}`;

    console.log(usuario);
    console.log(armarios);
}



const notificacoesData = [
    {
        id: 101,
        title: "Nota Lançada: Interface HMI",
        summary: "Sua nota da P1 foi registrada. Consulte o sistema.",
        details: "A nota da primeira avaliação (P1) da disciplina S05 - Interface Homem-máquina, foi lançada no sistema. Seu resultado provisório é 8.0. Este aviso serve apenas para notificação imediata, o valor oficial deve ser consultado no Portal do Aluno.",
        date: "25/11/2025",
        time: "14:30",
        type: "nota",
        lida: false
    },
    {
        id: 102,
        title: "Prazo: Renovação de Matrícula",
        summary: "O prazo para rematrícula termina em 48 horas.",
        details: "Atenção: Você tem até o dia 30/11/2025 para finalizar o processo de renovação de matrícula no Portal do Aluno. Certifique-se de que todas as pendências financeiras e acadêmicas estejam resolvidas.",
        date: "28/11/2025",
        time: "10:00",
        type: "prazo",
        lida: false
    },
    {
        id: 103,
        title: "Nova Ação: Reserva de Armário",
        summary: "Você possui um armário reservado com entrega para hoje.",
        details: "Lembrete: O armário Nº 5 que você reservou deve ser devolvido até o final do dia (23:59). Evite multas por atraso e garanta a disponibilidade para outros alunos.",
        date: "27/11/2025",
        time: "08:00",
        type: "administrativo",
        lida: true
    }
];


const icones = {
    nota: 'grade',
    prazo: 'date_range',
    administrativo: 'lockers',
    evento: 'event'
};



function renderizarNotificacoes() {
    const listaNotificacoes = document.getElementById('listaNotificacoes');

    if (!listaNotificacoes) return;

    if (notificacoesData.length === 0) {
        listaNotificacoes.innerHTML = '<p class="font" style="text-align: center; margin-top: 20px;">Você não possui notificações no histórico.</p>';
        return;
    }

    
    listaNotificacoes.innerHTML = notificacoesData.map(notif => {
        const statusClass = notif.lida ? 'lida' : '';
        const iconName = icones[notif.type] || 'notifications';

        return `
            <div class="notificacao-item ${statusClass}" onclick="abrirDetalhes(${notif.id})">
                <div class="notificacao-icon">
                    <span class="material-symbols-outlined icoP">${iconName}</span>
                </div>
                <div class="notificacao-content">
                    <p class="notificacao-title">${notif.title}</p>
                    <p class="notificacao-subtitle">${notif.summary} - ${notif.date}</p>
                </div>
            </div>
        `;
    }).join('');
}



function abrirHistorico() {
   
    document.querySelectorAll('main > div:not(.tela-notificacao), aulas-component, .carousel-container').forEach(el => {
        
        if (el.id !== 'historicoNotificacoes' && el.id !== 'detalheNotificacao' && el.id !== 'configuracaoNotificacoes') {
             el.style.display = 'none';
        }
    });

    
    document.getElementById('historicoNotificacoes').style.display = 'block';
    document.getElementById('configuracaoNotificacoes').style.display = 'none';

    
    const detalheScreen = document.getElementById('detalheNotificacao');
    if (detalheScreen) detalheScreen.style.display = 'none';

    renderizarNotificacoes(); 
}



function abrirDetalhes(id) {
    const notif = notificacoesData.find(n => n.id === id);
    if (!notif) return;

    
    notif.lida = true;
    renderizarNotificacoes(); 

   
    let detalheScreen = document.getElementById('detalheNotificacao');
    if (!detalheScreen) {
        detalheScreen = document.createElement('div');
        detalheScreen.id = 'detalheNotificacao';
        document.body.appendChild(detalheScreen);
    }

    
    let detalheHTML = `
        <header id="detalheHeader" style="display: flex; align-items: center; margin-bottom: 20px;">
            <div id="voltar" onclick="fecharDetalhes()" style="cursor: pointer; margin-right: 15px;">
                <span class="material-symbols-outlined icoG">arrow_back</span>
            </div>
            <h2 class="titulo_aula" style="margin: 0;">Detalhes do Aviso</h2>
        </header>

        <div class="detalhe-info">
            <h3 class="titulo_aula" style="font-size: 18px; color: var(--cor-click); margin-top: 0;">${notif.title}</h3>
            <p class="font"><strong>Data e Hora:</strong> ${notif.date} às ${notif.time}</p>
            <p class="font"><strong>Tipo:</strong> ${notif.type.toUpperCase()}</p>
            <p class="font" style="line-height: 1.8; margin-top: 20px;">${notif.details}</p>

            <div class="tipo-container" style="margin-top: 30px;">
                <div class="tipo_res p_lable" onclick="marcarComoLido(${notif.id})" style="background-color: green;">
                    <span class="material-symbols-outlined icon">check_circle</span> Marcar como Lido
                </div>
                <div class="tipo_res p_lable" onclick="adicionarAoCalendario('${notif.title}', '${notif.details}', '${notif.date}', '${notif.time}')">
                    <span class="material-symbols-outlined icon">calendar_add_on</span> Adicionar ao Calendário
                </div>
                <div class="tipo_res p_lable" onclick="excluirAlerta(${notif.id})" style="background-color: red;">
                    <span class="material-symbols-outlined icon">delete</span> Excluir Alerta
                </div>
            </div>
        </div>
    `;

    detalheScreen.innerHTML = detalheHTML;
    document.getElementById('historicoNotificacoes').style.display = 'none';
    detalheScreen.style.display = 'block';
}

function fecharDetalhes() {
    document.getElementById('detalheNotificacao').style.display = 'none';
    document.getElementById('historicoNotificacoes').style.display = 'block';
    renderizarNotificacoes();
}




function marcarComoLido(id) {
    const notif = notificacoesData.find(n => n.id === id);
    if (notif) {
        notif.lida = true;
        alert(`Aviso "${notif.title}" marcado como lido (Simulado).`);
    }
    fecharDetalhes();
}

function excluirAlerta(id) {
    const index = notificacoesData.findIndex(n => n.id === id);
    if (index !== -1) {
        const titulo = notificacoesData[index].title;
        notificacoesData.splice(index, 1);
        alert(`Aviso "${titulo}" excluído do histórico (Simulado).`);
    }
    fecharDetalhes();
}

function adicionarAoCalendario(title, details, date, time) {
    alert(`Evento "${title}" (às ${time}) adicionado ao calendário (Simulado).`);
}




function abrirConfiguracoes() {
    document.getElementById('historicoNotificacoes').style.display = 'none';
    document.getElementById('configuracaoNotificacoes').style.display = 'block';
}

function fecharConfiguracoes() {
    document.getElementById('configuracaoNotificacoes').style.display = 'none';
    document.getElementById('historicoNotificacoes').style.display = 'block';
}

function salvarConfiguracoes() {
    const notas = document.getElementById('check-notas').checked;
    const provas = document.getElementById('check-provas').checked;
    const prazos = document.getElementById('check-prazos').checked;
    const eventos = document.getElementById('check-eventos').checked;

    
    alert(`Configurações salvas (Simulado):\nNotas: ${notas ? 'SIM' : 'NÃO'}\nProvas: ${provas ? 'SIM' : 'NÃO'}\nPrazos: ${prazos ? 'SIM' : 'NÃO'}\nEventos: ${eventos ? 'SIM' : 'NÃO'}`);

    fecharConfiguracoes();
}


function voltarParaMenuPrincipal() {
   
    document.getElementById('historicoNotificacoes').style.display = 'none';
    document.getElementById('configuracaoNotificacoes').style.display = 'none';
    const detalheScreen = document.getElementById('detalheNotificacao');
    if (detalheScreen) detalheScreen.style.display = 'none';

   
    document.getElementById('mensagens').style.display = 'block'; 
    document.querySelector('.carousel-container').style.display = 'block'; 
    document.querySelector('aulas-component').style.display = 'block'; 
    document.getElementById('componentes').style.display = 'block'; 
}
