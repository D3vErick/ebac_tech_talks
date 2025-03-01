AOS.init();

//Função do contador de dias até o evento.
const dataDoEvento = new Date("Dec 12, 2025 19:00:00"); //Data do evento definida.
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() { //Função que armazena a data atual e atualiza a cada 1 segundo.
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; //Variável que conta o tempo restante entre a data atual até a data do evento.

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60; //Variáveis para ficar mais agradável visualmente.
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); //Função que calcula os dias até o evento.
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs); //Função que calcula as horas.
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs); //Função que calcula os minutos.
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000); //Função que calcula os segundos.

    document.getElementById('contador').innerHTML = `${diasAteOEvento}D ${horasAteOEvento}H ${minutosAteOEvento}M ${segundosAteOEvento}S`;
    //Mostra o contador atualizando em tempo real.

    if (distanciaAteOEvento < 0) { //Resposta caso chegue e/ou ultrapasse a data do evento.
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'O evento já começou!'
    }
}, 1000);