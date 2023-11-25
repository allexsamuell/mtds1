const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];



//function organizar(lista,atendimento,nome){
   // if(atendimento===`atender`)[
 //       lista.shift()
  //  ]
 ///   if(atendimento===`agendar`){
     //   lista.push(nome)
  //  }
 //   console.log(lista.join(` ,`))
 //   }
    
    //organizar(pacientes,`agendar`,"allex")

    function agendarPaciente(lista,nome){
   
        lista.push(nome)
    
   
   console.log(lista.join(` ,`))
}

//  agendarPaciente(pacientes)



function atenderPaciente(lista){

lista.shift()

console.log(lista)

}

//atenderPaciente()

