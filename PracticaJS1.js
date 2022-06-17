//Ejercicio 1.

function Ejercicio1(fecha) {
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    let dia = fecha.getDay();
    let ampm = horas >= 12 ? ' PM' : ' AM';
    horas = horas % 12;
    horas = horas ? horas : 12;
    minutos = minutos < 10 ? '0'+minutos : minutos;

    let DiaSemana = '';
    switch (dia){
        case 0:
            DiaSemana = 'Sunday';
            break;
        case 1 :
            DiaSemana = 'Monday';
            break;    
        case 2 :
            DiaSemana = 'Tuesday';
            break;
        case 3 :
            DiaSemana = 'Wednesday';
            break;
        case 4 :
            DiaSemana = 'Thursday';
            break;         
        case 5 :
            DiaSemana = 'Friday';
            break;
        default :
            DiaSemana = 'Saturday';
            break;       
    }
    let strTime = 'Today is: '+ DiaSemana +'<br>'+'Current time is: ' + horas + ampm + ' : '+ minutos + ' : '+segundos;
    

    let contenedor = document.getElementById('id-container1');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = strTime;
    contenedor.appendChild(parrafo);

}
  

//Ejercicio 2.
function Ejercicio2 () {
    let Cadena = document.getElementById('id-input1').value; 
    let BuscarPalabra = Cadena.includes(document.getElementById('id-input2').value);

    let contenedor = document.getElementById('id-container2');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = BuscarPalabra;
    contenedor.append(parrafo);
}

//Ejercicio 3.

function Ejercicio3(){
    let num1 = parseInt(document.getElementById('id-input3').value);
    let num2 = parseInt(document.getElementById('id-input4').value);

    let resultado = 0;
    if (num1 == num2){
        resultado = (num1+num2)*4;
    }else{
        resultado = num1+num2;
    }
    
    let contenedor = document.getElementById('id-container3');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Resultado: '+resultado;
    contenedor.append(parrafo);
}
//Ejercicio 4.

function Ejercicio4(){
    let Cadena = document.getElementById('id-input5').value;
    let CadenaResultado = '';
    let BuscarPalabraU = Cadena.startsWith('Volcancode');
    let BuscarPalabraL = Cadena.startsWith('volcancode');

    /* console.log('interno '+BuscarPalabra); Solo para ver valor de la variable*/ 

    if (BuscarPalabraU){
        CadenaResultado = Cadena.replace('Volcancode','');
    }else {
        if (BuscarPalabraL){
            CadenaResultado = Cadena.replace('volcancode','');
        }else {
            CadenaResultado = 'Volcancode '+ Cadena;
        }
    }    
    console.log('test '+ CadenaResultado);
    let contenedor = document.getElementById('id-container4');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = CadenaResultado;
    contenedor.append(parrafo);

}
//Ejercicio 5.
function Ejercicio5(){

    let arreglo = [];
    arreglo[0] = document.getElementById('id-input6').value;
    arreglo[1] = document.getElementById('id-input7').value;
    arreglo[2] = document.getElementById('id-input8').value;
    let mayor = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (mayor < arreglo[i] ) {
            mayor = arreglo[i];
        }
    }
    
    let contenedor = document.getElementById('id-container5');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'El número mayor es: '+mayor;
    contenedor.append(parrafo);

    console.log(mayor);
}
