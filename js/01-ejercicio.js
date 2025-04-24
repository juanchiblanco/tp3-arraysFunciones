const meses = [`Enero`, `Febrero`, `Marzo`, `Abril`, `Mayo`, `Junio`, `Julio`, `Agosto`, `Septiembre`, `Octubre`, `Noviembre`, `Diciembre`]

document.writeln(`<h2>Lista de meses</h2>`)
document.writeln(`<ul>`)

for(let i=0;i<meses.length;i++){
    document.writeln(`<li>${meses[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln(`<ul>`)
document.writeln(`<br>Cantidad de meses: ${meses.length}`)