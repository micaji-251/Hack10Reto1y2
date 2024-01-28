// RETO 1
// 1. Crear una función que tome como parámetro un arreglo, retornar el último elemento del arreglo

function ultimoElemento() {
    const arreglo = [4, 8, 5, 3,7];
    console.log(arreglo[arreglo.length-1]);
}
// ultimoElemento();


// 2. Crear una función que tome como parámetro un arreglo y un número, retornar un nuevo arreglo con todos los elementos y el número agregado al final del arreglo. (usar el operador spread)

function unirElemento(){
    const arreglo = [2,7,5,11];
    const numero = [9];
    const NuevoArreglo = [...arreglo,...numero];
    console.log(NuevoArreglo);
}

// unirElemento();

// 3. Crear una función que tome como parámetro un arreglo de números, retornar el promedio de todos los elementos del arreglo.

function arregloPromedio(){
    const arreglo = [2, 6, 1, 8];
    let suma = 0;

    
    for (i=0;i<=arreglo.length-1;i++){
        suma = suma + arreglo[i]
    }
    console.log(suma/(arreglo.length));

}

// arregloPromedio();

// 4. Crear una función que tome como parámetro un arreglo de números, retornar un dato de tipo número con la suma de todos los números pares.

function sumaPares(){
    const arreglo = [1, 2, 5, 8, 9, 12, 2, 3];
    let suma = 0;

    for (i=1;i<=arreglo.length-1; i = i+2){
        suma = suma + arreglo[i]
    }
    console.log(suma);
}

// sumaPares();

// 5. Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.

function booleanoArray(){
    const Arreglo1= [2, 5, 2, 3, 7,2];
    const Arreglo2= [1, 5, 3,2];

    let NuevoArreglo = [...Arreglo1,...Arreglo2];

    if(NuevoArreglo.length>=10){
        console.log(NuevoArreglo);
        console.log('True');
    } else{
        console.log(NuevoArreglo);
        console.log('False');
    }
}

// booleanoArray();


function funcionArray(){
    const Arreglo1= [2, 5, 2];
    const Arreglo2= [1, 5, 3];
    let Arreglo3 = [];
    let agregar = 0;

    let NuevoArreglo = [...Arreglo1,...Arreglo2];

    for (i=0;i<=NuevoArreglo.length-1;i++){
        agregar = NuevoArreglo[i]*2;
        Arreglo3.push(agregar);
    }

    console.log(Arreglo3);
}
// funcionArray();

// 7. Escribir un programa que almacene la cadena de caracteres “password” en una variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas. 

function almacenarContraseña(){
    const inicial = 'password';
    let input = prompt("Introducir la contraseña");

    if( inicial === input.trim()){
        console.log('La contraseña es correcta');
    } else{
        console.log('La contraseña no es correcta');
    }
}

// almacenarContraseña();

// 8. Escribir un programa para una empresa que tiene salas de juegos para todas las edades y quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€. 

function precio(){
    let edad = prompt("Introduce tu edad:");
    if (edad < 4){
        console.log('Ingreso gratis');
    } else if (edad <=18){
        console.log('El costo de la entrada es 5€');
    } else{
        console.log('El costo de la entrada es 10€');
    }
}

// precio();

// 9. Para tributar un determinado impuesto se debe ser mayor de 18 años y tener un ingreso igual o superior a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no. 

function impuestoGanancia(){
    let edad = Number(prompt("Introduce tu edad:"));
    let ingresos = Number(prompt('¿Cuáles son tus ingresos mensuales?:'));

    if (edad >= 18 && ingresos >= 1000){
        console.log('Tienes que tributar');
    } else{
        console.log('No tienes que tributar');
    }
}

// impuestoGanancia();

// 10. Crea un programa que pida al usuario el diámetro de una rueda y su grosor (en metros). 

function rueda(){
    let diametro = Number(prompt('Ingrese el diámetro de una rueda:'));
    let grosor = Number(prompt('Ingrese el grosor de la rueda:'));

    if (diametro > 1.4){
        console.log('La rueda es para un vehículo grande');
    } else if (diametro > 0.8){
        console.log('La rueda es para un vehículo mediano');
    } else {
        console.log('La rueda es para un vehículo pequeño');
    }

    if ((diametro >1.4 && grosor <0.4) || (diametro<=1.4 && diametro>0.8 && grosor <0.25)){
        console.log('El grosor para esta rueda es inferior al recomendado');
    }

}

// rueda();

//  11.

// map filter sort find

let personas = [
    { nombre: 'boris', hobby: 'correr', salario: 2000 },
    { nombre: 'luis', hobby: 'cantar', salario: 1500 },
    { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
    { nombre: 'percy', hobby: 'cantar', salario: 1100 },
    { nombre: 'rosa', hobby: 'leer', salario: 3000 },
    ];

function mayorSalario(){
    // let salario1 = 0;

    // for(i=0;i<= personas.length-1;i++){
    //     if (salario1 < Number(personas[i].salario)){
    //         salario1 = personas[i].salario;
    //     }
    // }
    // console.log(salario1);  
    
    personas.sort(function(a,b){return a.salario - b.salario});
    console.log(personas[personas.length-1].salario);

}
// mayorSalario();

function hobbieCantar(gustacantar){
    // for(i=0;i<= personas.length-1;i++){
    //     if(personas[i].hobby ==='cantar'){
    //         console.log(personas[i].nombre);
    //         break
    //     }
    // }

    return gustacantar.hobby === 'cantar';
    
}

// hobbieCantar();
// console.log(personas.find(hobbieCantar).nombre);


function hobbieLeer(gustaleer){
    // for(i=0;i<= personas.length-1;i++){
    //     if(personas[i].hobby ==='leer'){
    //         console.log('True');
    //         return true;
    //     }
    // }
    return gustaleer.hobby === 'leer';
}
console.log(Boolean(personas.find(hobbieLeer)));

// hobbieLeer();


// 12. Un servicio de atención al cliente tiene establecido turnos semanales para sus empleados de manera que cada día de la semana se encarga del servicio una persona: 

let horario = [
    {dia: 'lunes', empleado: 'María'},
    {dia: 'martes', empleado: 'Luis'},
    {dia: 'miercoles', empleado: 'Antonia'},
    {dia: 'jueves', empleado: 'Pedro'},
    {dia: 'viernes', empleado: 'Marisa'},

]

function quienAtiende(){
    let dia1 = prompt('Introduce el dia de la semana:');
    let boolean1 = false;
    for (i=0;i<= horario.length-1;i++){
        if (dia1 === horario[i].dia){
            console.log('Este día se encargará ' + horario[i].empleado);
            boolean1 = true;
        }
    }

    if (boolean1 === false) {
        console.log('No hay servicio ese dia');
    }
}
// quienAtiende();

// 13. Una tienda vende monitores, teclados y ratones. Los precios se almacenan en una estructura array donde cada elemento es un par producto - precio.Diseña una función que reciba como argumento el nombre de un producto que previamente ha sido consultado por prompt y devuelva su precio

let catalogo = [
    {producto: 'monitor', precio: 200},
    {producto: 'teclado', precio: 20},
    {producto: 'ratón', precio: 10},
]

function preguntarPrecio(){
    let producto1 = prompt('Introduce el producto deseado: ');
    for(i=0;i<=catalogo.length-1;i++){
        if (catalogo[i].producto === producto1){
            console.log('El precio del ' + catalogo[i].producto + ' es de ' + catalogo[i].precio + ' euros');
        }
    }
}

// preguntarPrecio();





