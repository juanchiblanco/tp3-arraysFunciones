let i = ""
let ciudades = []

do{
    i = prompt("Ingresa una ciudad:");
    ciudades.push(i);
    if (i === null || !isNaN(i) ) {
        alert("Fin del programa. Ingresaste un valor invalido.");
        ciudades.pop(ciudades[ciudades.length -1])
        break;
      }
}
    while(confirm(`Quieres ingresar otra ciudad?`))

        document.writeln(`La cantidad de ciudades que ingresaste es: ${ciudades.length}<Br>`)

        document.writeln(`<br>Elemento 1° posición: ${ciudades[0]}`)
        document.writeln(`<br>Elemento 3° posición: ${ciudades[2]}`)
        document.writeln(`<br>Elemento ultima posición: ${ciudades[ciudades.length - 1]}<br>`)

        ciudades.push ('Paris')
        document.writeln(`<br>Elemento ultima posición: ${ciudades[ciudades.length - 1]}`)

        ciudades.splice(1,0,`Barcelona`)

        document.writeln(`<h2>Lista de Ciudades</h2>`)
document.writeln(`<ul>`)

for( i=0;i<ciudades.length;i++){
    document.writeln(`<li>${ciudades[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln(`<ul>`)