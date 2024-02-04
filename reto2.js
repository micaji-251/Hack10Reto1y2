// PROGRAMACION BANCO
// CUENTAS
let cuentas = [ 
    {nombre: "Mali", soles: 200, password: '1234', dni: 44788834, dolares:100  }, 
    {nombre: "Gera", soles: 150, password: '5678', dni: 10247439, dolares:150}, 
    {nombre: "Sabi", soles: 60, password: '9102', dni: 98005362, dolares:200} 
]; 

let saldoActual = 0;
let passwordActual = '';
let paso = '';
let DniIngresado = 0;
let saldoActualSoles = 0;
let saldoActualDolares = 0;
let moneda = '';

// VALIDACION DEL DNI
const inputDni = document.getElementById('inputDni');
const btnConformeDni = document.getElementById('btnConformeDni');
const btnConrregirDni = document.getElementById('btnConrregirDni')
const pantallaDni = document.querySelector('.introduccion');
const pantallaMenu = document.querySelector('.menu');
const pantallaClave = document.getElementById('clave');
let passwordInput = document.getElementById('passwordInput');
const pantallaConsulta = document.querySelector('.consulta');
const pantallaRetiroMoneda = document.querySelector('.retiro1');
const pantallaRetiro = document.getElementById('montoARetirar');
const pantallaDepositoMoneda = document.querySelector('.pago1');
const saldoTextoSoles = document.querySelector('.saldoSoles');
const saldoTextoDolares = document.querySelector('.saldoDolares');
const pantallaResultadoRetiro = document.querySelector('.resultadoRetiro');
const textoResultadoRetirar = document.querySelector('.textoResultadoRetirar');
const textoSaldoRetirar = document.querySelector('.textoSaldoRetirar');
const pantallaDeposito = document.querySelector('.pago1');
const pantallaResultadoDeposito = document.querySelector('.resultadoDeposito');
const textoSaldoDepositar = document.querySelector('.textoSaldoDepositar');
const textoResultadoDepositar = document.querySelector('.textoResultadoDepositar');

btnConformeDni.addEventListener('click', ()=>{
    DniIngresado = Number(inputDni.value);
    validarDni(DniIngresado);
}
);

btnConrregirDni.addEventListener('click', ()=>{
    btnConcluir();
}
);

function showScreen(a){
    a.classList.remove('none');
}

function hideScreen(a){
    a.classList.add('none');
}


function validarDni(){
    // console.log(DniIngresado);
    usuario = cuentas.findIndex(({dni}) => dni === DniIngresado);

    if (usuario === -1){
        alert('Dni ingresado no es cliente del Banco Multired')

    }else{
        hideScreen(pantallaDni);
        showScreen(pantallaMenu);
        saldoActualSoles = cuentas[usuario].soles;
        saldoActualDolares = cuentas[usuario].dolares;
        passwordActual = cuentas[usuario].password;
        Menu();
    }

}

function Menu(){
        pantallaMenu.addEventListener('click', (e)=>{
            // console.log(e.target);

            if(e.target.classList.contains('btnMenuSaldo')){
                console.log('Quiere ir al menu de saldo');
                paso = 'Saldo';
                validarContraseña();
            }
            if(e.target.classList.contains('btnMenuRetiro')){
                console.log('Quiere ir al menu de Retiro');
                paso = 'Retiro';
                validarContraseña();
            }
            if(e.target.classList.contains('btnMenuDeposito')){
                console.log('Quiere ir al menu de Deposito');
                paso = 'Deposito';
                validarContraseña();
            }

        })
}

function validarContraseña(){
    
    showScreen(pantallaClave);
    hideScreen(pantallaMenu);

    pantallaClave.addEventListener('click', (e) =>{

        if(e.target.classList.contains('contraseña')){

            console.log('Ingresar contraseña');
            

            if(passwordInput.value === ''){
                // alert('Falta Ingresar la contraseña');
                
            } else if(passwordInput.value === passwordActual){

                console.log('Contraseña correcta');
                validarContraseña2();
                
            } else {
                alert('Contraseña incorrecta, ingresar nuevamente ...');
            }

        }

        if(e.target.classList.contains('concluir')){
            btnConcluir();
        }

            
    })

}

function borrarContraseña(){
    console.log(passwordInput.value);
    passwordInput.value='';
    console.log(passwordInput.value);
}

function validarContraseña2(){
    switch(paso){
        case 'Saldo':
            
            hideScreen(pantallaClave);
            showScreen(pantallaConsulta);
            console.log('Eligio Saldo');
            consultarSaldo();
            borrarContraseña();
            break;
            
        case 'Retiro':
            hideScreen(pantallaClave);
            showScreen(pantallaRetiroMoneda);
            console.log('Eligio Retiro');
            guardarMonedaRetiro();
            borrarContraseña();
            break;

        case 'Deposito':
            hideScreen(pantallaClave);
            showScreen(pantallaDepositoMoneda);
            console.log('Eligio Deposito');
            borrarContraseña();
            break;
            
    }

    console.log(passwordInput.value);

    
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
    pantallaRetiroMoneda.addEventListener('click', (event) =>{
        
        // guardarMoneda(event);

        if(event.target.classList.contains('soles')){
            console.log('Eligio soles');
            moneda = 'soles';}
        if(event.target.classList.contains('dolares')){
            console.log('Eligio dolares');
            moneda = 'dolares'}
    })
}

function guardarMontoRetirar(){
        pantallaRetiro.addEventListener('click', (e) =>{
            if(e.target.classList.contains('monto')){
                montoRetirado = Number(e.target.textContent);
                hideScreen(pantallaRetiro);
                showScreen(pantallaResultadoRetiro);
                actualizarSaldo();
                resultadoRetirar();
            }
        })
}

function resultadoRetirar(){
    console.log(montoRetirado);
    console.log(saldoActualDolares);
    console.log(saldoActualSoles);

    textoResultadoRetirar.innerHTML=montoRetirado + '<span> ' + moneda+ '</span>';

    imprimirSaldo(textoSaldoRetirar);
    btnOptions(pantallaResultadoRetiro);  
}

function btnOptions(screen){

    screen.addEventListener('click', (e)=>{
        if(e.target.classList.contains('concluir')){
            btnConcluir();
        }
        if(e.target.classList.contains('regresar')){
            hideScreen(screen);
            showScreen(pantallaMenu);
        }
    })

}

function guardarMoneda(e){

    console.log('Esta en guardar moneda retiro');
    console.log(e.target.classList);

    if(e.target.classList.contains('soles')){
        // e.stopPropaggation;
        
        showScreen(pantallaDeposito);
        hideScreen(pantallaDepositoMoneda);
        guardarMontoDeposito();
        return
    }

    if(e.target.classList.contains('dolares')){
        // e.stopPropaggation;
        console.log('Eligio dolares');
        ;
        showScreen(pantallaDeposito);
        hideScreen(pantallaDepositoMoneda);
        guardarMontoDeposito();
        return
    }

    console.log('No eligio moneda');
}

function actualizarSaldo(){

    switch(moneda){
        case 'soles':
            saldoActualSoles = saldoActualSoles - montoRetirado;
            cuentas[usuario].soles = saldoActualSoles;
            break;
        case 'dolares':
            saldoActualDolares = saldoActualDolares - montoRetirado;
            cuentas[usuario].dolares = saldoActualDolares;
            break;
            
    }
}


function guardarMonedaDeposito(){
    pantallaDepositoMoneda.addEventListener('click', () =>{
        guardarMoneda(e);
    })
}

function guardarMontoDeposito(){
    pantallaDeposito.addEventListener('click', (e) =>{
        if(e.target.classList.contains('monto')){
            montoRetirado = Number(e.target.textContent);
            hideScreen(pantallaDeposito);
            showScreen(pantallaResultadoDeposito);
            actualizarSaldo();
            resultadoRetirar();
        }
    })
}

function resultadoDepositar(){
    console.log(montoRetirado);
    console.log(saldoActualDolares);
    console.log(saldoActualSoles);

    textoResultadoDepositar.innerHTML=montoRetirado + '<span> ' + moneda+ '</span>';

    imprimirSaldo(textoSaldoDepositar);


    btnOptions(pantallaResultadoDeposito);  
}

function imprimirSaldo(a){
    switch(moneda){
        case 'soles':
            a.innerHTML = saldoActualSoles + '<span> ' + moneda+ '</span>';
            console.log('doy el monto depositado');
            break;

        case 'dolares':
            a.innerHTML = saldoActualDolares + '<span> ' + moneda+ '</span>';
            console.log('doy el monto depositado');
            break;
    }
}