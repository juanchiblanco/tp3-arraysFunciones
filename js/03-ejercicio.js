let sumas = []
let dado1 = ""
let dado2 = ""

alert(`Tirar los dados`)

function sumar(numero1,numero2){
    const resultado = numero1+numero2
    sumas.push(resultado)
}

for(let i=0;i<50;i++){
    dado1 = Math.floor((Math.random() * 6) + 1)
    dado2 = Math.floor((Math.random() * 6) + 1)

   sumar(dado1,dado2)

}

console.log(sumas)
document.writeln(sumas)

// document.writeln(`<table>
//     <tbody>`)

// document.writeln(`<tr>`)

// document.writeln(`<td>Suma🎲🎲</td>`)
// document.writeln(`<td>Apariciones</td>`)

// document.writeln(`</tr>`)
// document.writeln(`<tr>`)

// document.writeln(`<td>2</td>`)
// document.writeln(`<td>1234</td>`)

// document.writeln(`</tr>`)
// document.writeln(`<tr>`)

// document.writeln(`<td>3</td>`)
// document.writeln(`<td>1234</td>`)

// document.writeln(`</tr>`)
// document.writeln(`<tr>`)

// document.writeln(`<td>4</td>`)
// document.writeln(`<td>1234</td>`)

// document.writeln(`</tr>`)
// document.writeln(`<tr>`)

// document.writeln(`<td>5</td>`)
// document.writeln(`<td>1234</td>`)

// document.writeln(`</tr>`)
// document.writeln(`<tr>`)

// document.writeln(`<td>6</td>`)
// document.writeln(`<td>1234</td>`)

// document.writeln(`</tr>`)
// document.writeln(`<tr>`)

// document.writeln(`<td>7</td>`)
// document.writeln(`<td>1234</td>`)

// document.writeln(`</tr>`)
// document.writeln(`<tr>`)

// document.writeln(`<td>8</td>`)
// document.writeln(`<td>1234</td>`)

// document.writeln(`</tr>`)
// document.writeln(`<tr>`)

// document.writeln(`<td>9</td>`)
// document.writeln(`<td>1234</td>`)

// document.writeln(`</tr>`)
// document.writeln(`<tr>`)

// document.writeln(`<td>10</td>`)
// document.writeln(`<td>1234</td>`)

// document.writeln(`</tr>`)
// document.writeln(`<tr>`)

// document.writeln(`<td>11</td>`)
// document.writeln(`<td>1234</td>`)

// document.writeln(`</tr>`)
// document.writeln(`<tr>`)

// document.writeln(`<td>12</td>`)
// document.writeln(`<td>1234</td>`)

// document.writeln(`</tr>`)

// document.writeln(`
//     </tbody>
//  </table>`)