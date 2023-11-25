const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
function selecao(nomes,tamanhoDoGrupo){

let conta=1
for(let i=0;i<nomes.length;i+=tamanhoDoGrupo){
let grpos=`Grupo${conta}: ${nomes.slice(i,(i+tamanhoDoGrupo)).join(` ,`)} `
console.log(grpos)
conta++
}


}
selecao(nomes,4)