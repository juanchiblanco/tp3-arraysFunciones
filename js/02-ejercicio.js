let i = ""
let ciudades = []

do{
    i = prompt("ingrese ciudad:");
    ciudades.push(i);
}
    while(confirm(`Quieres ingresar otra ciudad?`))

        document.writeln(`La cantidad de ciudades que ingresaste es: ${ciudades.length}`)