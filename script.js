function dayTime(){
    var date = new Date();
    var h =  18 //date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h >= '0' && h <= '12') {
        document.getElementById('color').classList.remove('evening');
        document.getElementById('color').classList.remove('night');
        document.getElementById('color').classList.add('morning');
        document.querySelector('.hour').innerHTML = ('Agora é ' + h + ' horas, ' + m + ' minutos e ' + s + ' segundos.<br>Bom dia!')
    }

    if (h >= '13' && h < '18') {
        document.getElementById('color').classList.remove('morning');
        document.getElementById('color').classList.remove('night');
        document.getElementById('color').classList.add('evening');
        document.querySelector('.hour').innerHTML = ('Agora é ' + h + ' horas, ' + m + ' minutos e ' + s + ' segundos.<br>Boa tarde!')
    }

    if (h >= '18' && h <= '23') {
        document.getElementById('color').classList.remove('morning');
        document.getElementById('color').classList.remove('evening');
        document.getElementById('color').classList.add('night');
        document.querySelector('.hour').innerHTML = ('Agora é ' + h + ' horas, ' + m + ' minutos e ' + s + ' segundos.<br>Boa noite!')
    }

    setTimeout(dayTime, 1000);
}

dayTime();