const  num = parseInt(prompt(`Ingresa un numero`))

if(num===null || isNaN(num)){
    alert(`Fin del programa. Ingresaste un numero invalido.`)
    document.writeln(`Por favor recarga la pagina🔃`)
}
else{

    function resto (numero1,numero2){
        const resultado = numero1 % numero2
        return resultado
    }

    const resultado = resto(num,2)

    if(resultado===0){document.writeln(`El numero "${num}" es par.`)}
    else{document.writeln(`El numero "${num}" es impar.`)}
}