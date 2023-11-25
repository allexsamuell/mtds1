
const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]




function procurarpet(lista,nomedopet){
    let usuario;
  
    for(let i=0;i<lista.length;i++){
      if(lista[i].pets.includes(nomedopet)){
          usuario=lista[i]
      }
    }
    if(usuario){
      console.log(`o dono(a) do(a) ${nomedopet} e o(a) ${usuario.nome}`)
    }else{
      console.log(`Que pena ${nomedopet}, nao encontramos seu dono(a)`)
    }
  }
  
  procurarpet(usuarios,"Salsicha")