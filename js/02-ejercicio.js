let i = ""
let ciudades = []

do{
    i = prompt("ingrese ciudad:");
    ciudades.push(i);
}
    while(confirm(`Quieres ingresar otra ciudad?`))

        document.writeln(`La cantidad de ciudades que ingresaste es: ${ciudades.length}<Br>`)

        document.writeln(`<br>Elemento 1° posición: ${ciudades[0]}`)
        document.writeln(`<br>Elemento 3° posición: ${ciudades[2]}`)
        document.writeln(`<br>Elemento ultima posición: ${ciudades[ciudades.length - 1]}`)