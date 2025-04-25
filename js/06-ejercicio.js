function perimetro(largo,ancho){
   const resultado = 2 * (largo + ancho)
    return resultado
}

const largo = parseFloat(prompt(`Ingresa el largo del rectángulo`))
const ancho = parseFloat(prompt(`Ingresa el ancho del rectángulo`))

const resultado = perimetro(largo,ancho)

if(largo===null || isNaN(largo) || ancho===null || isNaN(ancho)){
    alert(`Fin del programa. Ingresaste un numero invalido.`)
    document.writeln(`Por favor recarga la pagina🔃`)
}
else{
    document.writeln(`El largo que ingresaste es: ${largo}m<Br>`)
    document.writeln(`El ancho que ingresaste es: ${ancho}m<br>`)
    document.writeln(`El perímetro del rectángulo es: ${resultado}m`)
}