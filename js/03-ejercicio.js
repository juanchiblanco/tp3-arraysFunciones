let sumas = []
let dado1 = ""
let dado2 = ""
let dos = []
let tres = []
let cuatro = []
let cinco = []
let seis = []
let siete = []
let ocho = []
let nueve = []
let diez = []
let once = []
let doce = []

alert(`Tirar los dados`)

function sumar(numero1,numero2){
    let resultado = numero1+numero2
    sumas.push(resultado)
    if(resultado===2){dos.push(resultado)}
    else if(resultado===3){tres.push(resultado)}
    else if(resultado===4){cuatro.push(resultado)}
    else if(resultado===5){cinco.push(resultado)}
    else if(resultado===6){seis.push(resultado)}
    else if(resultado===7){siete.push(resultado)}
    else if(resultado===8){ocho.push(resultado)}
    else if(resultado===9){nueve.push(resultado)}
    else if(resultado===10){diez.push(resultado)}
    else if(resultado===11){once.push(resultado)}
    else if(resultado===12){doce.push(resultado)}
}

for(let i=0;i<50;i++){
    dado1 = Math.floor((Math.random() * 6) + 1)
    dado2 = Math.floor((Math.random() * 6) + 1)
    sumar(dado1,dado2)
}

document.writeln(`Las sumas de ambos dados son: ${sumas}`)

document.writeln(`<table>
    <tbody>`)

document.writeln(`<tr>`)

document.writeln(`<td>Suma🎲🎲</td>`)
document.writeln(`<td>Apariciones</td>`)

document.writeln(`</tr>`)
document.writeln(`<tr>`)

document.writeln(`<td>2</td>`)
document.writeln(`<td>${dos.length}</td>`)

document.writeln(`</tr>`)
document.writeln(`<tr>`)

document.writeln(`<td>3</td>`)
document.writeln(`<td>${tres.length}</td>`)

document.writeln(`</tr>`)
document.writeln(`<tr>`)

document.writeln(`<td>4</td>`)
document.writeln(`<td>${cuatro.length}</td>`)

document.writeln(`</tr>`)
document.writeln(`<tr>`)

document.writeln(`<td>5</td>`)
document.writeln(`<td>${cinco.length}</td>`)

document.writeln(`</tr>`)
document.writeln(`<tr>`)

document.writeln(`<td>6</td>`)
document.writeln(`<td>${seis.length}</td>`)

document.writeln(`</tr>`)
document.writeln(`<tr>`)

document.writeln(`<td>7</td>`)
document.writeln(`<td>${siete.length}</td>`)

document.writeln(`</tr>`)
document.writeln(`<tr>`)

document.writeln(`<td>8</td>`)
document.writeln(`<td>${ocho.length}</td>`)

document.writeln(`</tr>`)
document.writeln(`<tr>`)

document.writeln(`<td>9</td>`)
document.writeln(`<td>${nueve.length}</td>`)

document.writeln(`</tr>`)
document.writeln(`<tr>`)

document.writeln(`<td>10</td>`)
document.writeln(`<td>${diez.length}</td>`)

document.writeln(`</tr>`)
document.writeln(`<tr>`)

document.writeln(`<td>11</td>`)
document.writeln(`<td>${once.length}</td>`)

document.writeln(`</tr>`)
document.writeln(`<tr>`)

document.writeln(`<td>12</td>`)
document.writeln(`<td>${doce.length}</td>`)

document.writeln(`</tr>`)

document.writeln(`
    </tbody>
 </table>`)