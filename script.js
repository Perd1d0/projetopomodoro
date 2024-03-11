//Selecionando os elementos do DOM
const startEL = document.getElementById('start');
const TimerEL = document.getElementById('timer');
const StopEL = document.getElementById('stop');
const ReseEl = document.getElementById('reset');

//declarando as variáveis
let intervalo;
let timeleft = 1500;

//função de atualizar o timer
function updateTimer(){
    let minutos = Math.floor(timeleft/60)
    let segundos = timeleft % 60
    let tempoFormatado = `${minutos.toString().padStart(2,'0')} : ${segundos.toString().padStart(2,'0')}`
    TimerEL.innerHTML = tempoFormatado
}

//Função de start do tempo
function startTimer(){
    intervalo = setInterval(()=>{
        timeleft--
        updateTimer()
             if(timeleft === 0){
                clearInterval(intervalo)
                alert('O tempo acabou')
                timeleft = 1500
                updateTimer()
             }
    },1000)
};

//função stop
function stopTimer(){
    clearInterval(intervalo)
}

//função reset
function resetTimer(){
    clearInterval(intervalo)
    timeleft = 1500
    updateTimer()
}

//Setendo a função no botão Start
startEL.addEventListener('click', startTimer);
StopEL.addEventListener('click',stopTimer);
ReseEl.addEventListener('click', resetTimer);
