/*Este es el primer codigo para implementar el uso y manipulacion de arreglos. */
//Declarar arreglo:
let Colores = ['rojo', 'verde', 'azul', 'negro', 'blanco'];
console.log("Se creo el arreglo = ", Colores);

//Acceder a un elemento del arreglo
console.log("El primer color es: ", Colores[0]);
console.log("Ultimo color: ", Colores[4]);

//Asi se agregan elementos al arreglo
Colores.push("amarillo");                                                   //Metodo o funcion que agrega elementos al final de arreglo
console.log("Este es el elemento agregado con metodo push: ", Colores);

Colores.unshift("naranja");                                                //Al principio del arreglo
console.log("Se agrega elemento al principio con metodo unshift",Colores);

//(Indice, Cantidad), si le pones mas de una cantidad empieza desde el indice. 
Colores.splice(3, 0, "dorado");                                            //Agregar en lugar especifico
console.log("Se agrega elemento a lugar especifico posicion[2]: ", Colores);

//Reemplazar elementos:
Colores.splice(1, 1, "morado");             //Reemplazar en la posicion [1], un elemento, "color morado",

//Obtener tamaño de arreglo
let tamaño = Colores.length;               //Metodo para obtener tamaño de cadena
console.log("Tamaño de cadena: ", tamaño);

//Iterar en un arreglo:
console.log("Asi se itera en arreglo:" );
for (let i = 0; i < Colores.length; i++ ){
    console.log(Colores[i]);
}

//Recorrer arreglo con map 
console.log("Recorriendo arreglo con map: ");
let enMayusculas = Colores.map(color => color.toUpperCase());
console.log("Resultado: ", enMayusculas);

//Buscar elemento en arreglo
console.log("Buscar 'rojo': ", Colores.indexOf('rojo'));
console.log("Buscar 'azul': ", Colores.indexOf('azul'));        //Devuelve el identificador de memoria en donde se encuetra



