const tablaNumero = []

function multiplicar(numero){
    for(let i=1;i<=10;i++){
        const resultado = numero * i
        tablaNumero.push(resultado)
    }
}

const numero = parseInt(prompt(`Ingresa un numero`))

if(numero===null || isNaN(numero)){
    alert(`Fin del programa. Ingresaste un numero invalido.`)
    document.writeln(`Por favor recarga la pagina🔃`)
}
else{
    multiplicar(numero)

    document.writeln(`<h2> La tabla del ${numero}</h2>`)

    document.writeln(`<table>
        <tbody>`)
    
    document.writeln(`<tr>`)
    
    document.writeln(`</tr>`)
    document.writeln(`<tr>`)
    
    document.writeln(`<td>1</td>`)
    document.writeln(`<td>${tablaNumero[0]}</td>`)
    
    document.writeln(`</tr>`)
    document.writeln(`<tr>`)
    
    document.writeln(`<td>2</td>`)
    document.writeln(`<td>${tablaNumero[1]}</td>`)
    
    document.writeln(`</tr>`)
    document.writeln(`<tr>`)
    
    document.writeln(`<td>3</td>`)
    document.writeln(`<td>${tablaNumero[2]}</td>`)
    
    document.writeln(`</tr>`)
    document.writeln(`<tr>`)
    
    document.writeln(`<td>4</td>`)
    document.writeln(`<td>${tablaNumero[3]}</td>`)
    
    document.writeln(`</tr>`)
    document.writeln(`<tr>`)
    
    document.writeln(`<td>5</td>`)
    document.writeln(`<td>${tablaNumero[4]}</td>`)
    
    document.writeln(`</tr>`)
    document.writeln(`<tr>`)
    
    document.writeln(`<td>6</td>`)
    document.writeln(`<td>${tablaNumero[5]}</td>`)
    
    document.writeln(`</tr>`)
    document.writeln(`<tr>`)
    
    document.writeln(`<td>7</td>`)
    document.writeln(`<td>${tablaNumero[6]}</td>`)
    
    document.writeln(`</tr>`)
    document.writeln(`<tr>`)
    
    document.writeln(`<td>8</td>`)
    document.writeln(`<td>${tablaNumero[7]}</td>`)
    
    document.writeln(`</tr>`)
    document.writeln(`<tr>`)
    
    document.writeln(`<td>9</td>`)
    document.writeln(`<td>${tablaNumero[8]}</td>`)
    
    document.writeln(`</tr>`)
    document.writeln(`<tr>`)
    
    document.writeln(`<td>10</td>`)
    document.writeln(`<td>${tablaNumero[9]}</td>`)
    
    document.writeln(`</tr>`)
    
    document.writeln(`
        </tbody>
     </table>`)
}