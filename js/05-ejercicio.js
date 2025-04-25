const frase = prompt("Escribe una frase");

function mayusculas(frase){
    const resultado = frase.toLocaleUpperCase()
    return resultado
}
function minusculas(frase){
    const resultado = frase.toLocaleLowerCase()
    return resultado
}

       const resultadoMayusculas =  mayusculas(frase)
       const resultadoMinusculas =  minusculas(frase)

    if (frase === null || !isNaN(frase) ) {
        alert("Fin del programa. Ingresaste un valor invalido.")
        document.writeln(`Por favor recarga la pagina🔃`)
      }
      else{

       if(resultadoMayusculas === frase){document.writeln(`La frase que ingresaste está escrita solo con mayúsculas`)}
       else if(resultadoMinusculas === frase){document.writeln(`La frase que ingresaste está escrita solo con minúsculas`)}
       else{document.writeln(`La frase que ingresaste contiene mayúsculas y minúsculas`)}
      }