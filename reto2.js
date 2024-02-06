// PROGRAMACION BANCO
// CUENTAS
let cuentas = [ 
    {nombre: "Mali", soles: 200, password: '1234', dni: 44788834, dolares:100}, 
    {nombre: "Gera", soles: 150, password: '5678', dni: 10247439, dolares:150}, 
    {nombre: "Sabi", soles: 60, password: '9102', dni: 98005362, dolares:200} 
]; 

// DEFINIENDO VARIABLES
let saldoActual = 0;
let passwordActual = '';
let paso = '';
let DniIngresado = 0;
let saldoActualSoles = 0;
let saldoActualDolares = 0;
let moneda = '';

const inputDni = document.getElementById('inputDni');
const btnConformeDni = document.getElementById('btnConformeDni');
const btnConrregirDni = document.getElementById('btnConrregirDni')
const pantallaDni = document.querySelector('.introduccion');
const pantallaMenu = document.querySelector('.menu');
const pantallaClave = document.getElementById('clave2');
const passwordInput = document.getElementById('passwordInput');
const pantallaConsulta = document.querySelector('.consulta');
const pantallaRetiroMoneda = document.querySelector('.retiro1');
const pantallaRetiro = document.getElementById('montoARetirar');
const pantallaDepositoMoneda = document.querySelector('.pago1');
const saldoTextoSoles = document.querySelector('.saldoSoles');
const saldoTextoDolares = document.querySelector('.saldoDolares');
const pantallaResultadoRetiro = document.querySelector('.resultadoRetiro');
const textoResultadoRetirar = document.querySelector('.textoResultadoRetirar');
const textoSaldoRetirar = document.querySelector('.textoSaldoRetirar');
const pantallaDeposito = document.getElementById('pago');
const pantallaResultadoDeposito = document.querySelector('.resultadoDeposito');
const textoSaldoDepositar = document.querySelector('.textoSaldoDepositar');
const textoResultadoDepositar = document.querySelector('.textoResultadoDepositar');

dniClicks();

function dniClicks(){
    btnConformeDni.addEventListener('click', ()=>{
        DniIngresado = Number(inputDni.value);
        validarDni(DniIngresado);
    }
    );

    btnConrregirDni.addEventListener('click', ()=>{
        btnConcluir();
    }
    );
}

function showScreen(a){
    a.classList.remove('none');
}

function hideScreen(a){
    a.classList.add('none');
}


function validarDni(){
    usuario = cuentas.findIndex(({dni}) => dni === DniIngresado);

    if (usuario === -1){
        alert('Dni ingresado no es cliente del Banco Multired');

    }else{
        hideScreen(pantallaDni);
        showScreen(pantallaMenu);
        saldoActualSoles = cuentas[usuario].soles;
        saldoActualDolares = cuentas[usuario].dolares;
        passwordActual = cuentas[usuario].password;
        Menu();
    }

}

function menuOptions(a){
    
    paso = a;
    validarContraseña();
    return;
}

function Menu(){

        pantallaMenu.addEventListener('click', function escucharMenu(e){

            if(e.target.classList.contains('btnMenuSaldo')){          
                menuOptions('Saldo');
                pantallaMenu.removeEventListener('click', escucharMenu);
            }

            if(e.target.classList.contains('btnMenuRetiro')){
                menuOptions('Retiro');
                pantallaMenu.removeEventListener('click', escucharMenu);
            }
            if(e.target.classList.contains('btnMenuDeposito')){
                menuOptions('Deposito');
                pantallaMenu.removeEventListener('click', escucharMenu);
            }
            
        })

        
}

function validarContraseña(e){

    hideScreen(pantallaMenu);
    showScreen(pantallaClave);

    pantallaClave.addEventListener('click', function listenerContraseña(e){
        if(e.target.classList.contains('contraseña') && passwordInput.value === passwordActual){

            pantallaClave.removeEventListener('click',listenerContraseña);

            validarContraseñaSwitch();  
        } 
    });
    
};

function borrarContraseña(){
    passwordInput.value='';

}

function validarContraseñaSwitch(){
    switch(paso){
        case 'Saldo':
            
            hideScreen(pantallaClave);
            showScreen(pantallaConsulta);
            consultarSaldo();
            borrarContraseña();
            break;
            
        case 'Retiro':
            hideScreen(pantallaClave);
            showScreen(pantallaRetiroMoneda);
            guardarMonedaRetiro();
            borrarContraseña();
            break;

        case 'Deposito':
            hideScreen(pantallaClave);
            showScreen(pantallaDepositoMoneda);
            borrarContraseña();
            guardarMonedaDeposito();
            break;
            
    }
    
}

function consultarSaldo(){
    saldoTextoSoles.innerHTML = saldoActualSoles + '<span> soles</span>';
    saldoTextoDolares.innerHTML = saldoActualDolares + '<span> dolares</span>';

    btnOptions(pantallaConsulta);
}

function btnConcluir(){
    location.reload(true);
}

function guardarMonedaRetiro(){
    pantallaRetiroMoneda.addEventListener('click', function guardarMonedas(event){
        

        if(event.target.classList.contains('soles')){
            moneda = 'soles';
            pantallaRetiroMoneda.removeEventListener('click',guardarMonedas);
            showScreen(pantallaRetiro);
            hideScreen(pantallaRetiroMoneda);
            guardarMontoRetirar();
        }

        if(event.target.classList.contains('dolares')){
            moneda = 'dolares';
            pantallaRetiroMoneda.removeEventListener('click',guardarMonedas);
            showScreen(pantallaRetiro);
            hideScreen(pantallaRetiroMoneda);
            guardarMontoRetirar();
        }

        
    })   
}


function guardarMontoRetirar(){
        pantallaRetiro.addEventListener('click', function MontoGuardado(e){
            if(e.target.classList.contains('monto')){
                montoRetirado = Number(e.target.textContent);
                switch(moneda){
                    case 'soles':
                        if (saldoActualSoles - montoRetirado<0){
                            alert('No puede retirar más dinero del que tiene en la cuenta de soles');
                            btnConcluir();
                            break;
                        }
                        
                        else{
                            hideScreen(pantallaRetiro);
                            showScreen(pantallaResultadoRetiro);
                            resultadoRetirar();
                            break;
                        }
                        
            
                    case 'dolares':
                        if (saldoActualDolares - montoRetirado<0){
                            alert('No puede retirar más dinero del que tiene en la cuenta de soles');
                            btnConcluir();
                            break;
                        }
                        
                        else{
                            hideScreen(pantallaRetiro);
                            showScreen(pantallaResultadoRetiro);
                            resultadoRetirar();
                            break;
                        }
                }


                
            }

            pantallaRetiro.removeEventListener('click', MontoGuardado);
        })
}

function resultadoRetirar(){

    textoResultadoRetirar.innerHTML=montoRetirado + '<span> ' + moneda+ '</span>';
    actualizarSaldoRestar();
    imprimirSaldo(textoSaldoRetirar);
    btnOptions(pantallaResultadoRetiro);  
}

function btnOptions(screen){

    screen.addEventListener('click', function btnOptionsFunction(e){
        if(e.target.classList.contains('concluir')){
            btnConcluir();
            screen.removeEventListener('click',btnOptionsFunction);
        }
        if(e.target.classList.contains('regresar')){
            screen.removeEventListener('click',btnOptionsFunction);
            hideScreen(screen);
            showScreen(pantallaMenu);
            Menu();
        }
    })



}

function restarSaldo(a, b){
    return a-b
}


function sumarSaldo(a, b){
    return a + b
}

function actualizarSaldoRestar(){

    switch(moneda){
        case 'soles':
            saldoActualSoles = restarSaldo(saldoActualSoles, montoRetirado);
            cuentas[usuario].soles = saldoActualSoles;
            break;

        case 'dolares':
            saldoActualSoles = restarSaldo(saldoActualDolares, montoRetirado);
            cuentas[usuario].dolares = saldoActualDolares;
            break;
            
    }
}

function guardarMonedaDeposito(){
  
    pantallaDepositoMoneda.addEventListener('click', function GuardarMonedaDeposito2(e){
        if(e.target.classList.contains('soles')){
            moneda = 'soles';
            showScreen(pantallaDeposito);
            hideScreen(pantallaDepositoMoneda);
            pantallaDepositoMoneda.removeEventListener('click', GuardarMonedaDeposito2);
            guardarMontoDeposito();

        }
    
        if(e.target.classList.contains('dolares')){
            moneda = 'dolares';
            showScreen(pantallaDeposito);
            hideScreen(pantallaDepositoMoneda);
            pantallaDepositoMoneda.removeEventListener('click', GuardarMonedaDeposito2);
            guardarMontoDeposito();
        }
    })
}

function guardarMontoDeposito(){
    pantallaDeposito.addEventListener('click', function guardarMontoDepositado2(e){
        if(e.target.classList.contains('monto')){
            montoRetirado = Number(e.target.textContent);
            hideScreen(pantallaDeposito);
            showScreen(pantallaResultadoDeposito);
            actualizarSaldoSuma();
            resultadoDepositar();
        }

        pantallaDeposito.removeEventListener('click', guardarMontoDepositado2);
    })
}

function resultadoDepositar(){

    textoResultadoDepositar.innerHTML=montoRetirado + '<span> ' + moneda+ '</span>';

    imprimirSaldo(textoSaldoDepositar);
    btnOptions(pantallaResultadoDeposito);  
}

function imprimirSaldo(a){
    switch(moneda){
        case 'soles':
            a.innerHTML = saldoActualSoles + '<span> ' + moneda+ '</span>';
            break;

        case 'dolares':
            a.innerHTML = saldoActualDolares + '<span> ' + moneda+ '</span>';
            break;
    }
}

function actualizarSaldoSuma(){

    switch(moneda){
        case 'soles':
            saldoActualSoles = sumarSaldo(saldoActualSoles,montoRetirado);
            cuentas[usuario].soles = saldoActualSoles;
            break;
        case 'dolares':
            saldoActualSoles = sumarSaldo(saldoActualDolares,montoRetirado);
            cuentas[usuario].dolares = saldoActualDolares;
            break;
            
    }
}