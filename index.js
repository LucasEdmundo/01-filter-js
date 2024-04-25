let pessoas = [
    {nome: 'Luiz', idade: 33},
    {nome: 'Maria', idade: 33},
    {nome: 'João', idade: 43},
]

//exemplo de Filter com For

/* let pessoasComIdadeDe33Anos = []
for(let i = 0; i < pessoas.length; i++){
     if(pessoas[i].idade === 33)
        pessoasComIdadeDe33Anos.push(pessoas[i])
 }
 console.log(pessoasComIdadeDe33Anos)*/

 
//exemplo de Filter com function

/*let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa){
    return pessoa.idade === 33
})
console.log(pessoasComIdadeDe33Anos)*/


//exemplo de Filter com arrow function

let pessoasComIdadeDe33Anos = pessoas.filter(pessoa => pessoa.idade === 33)
console.log(pessoasComIdadeDe33Anos)