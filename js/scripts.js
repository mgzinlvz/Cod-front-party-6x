// let i = prompt("Informe sua idade: ");
//        if(i < 18){
//             alert("Parabens, voce nao foi designado hoje!");
//        }else{
//             alert("Otimo, voce e zika!");
//        }


function proc(){
    console.log("Entrou na função de processamento!");
    let n = document.getElementById("nome").value;
    console.log(n);


    // Saida de dados

  let res = document.getElementById("resultados");
  res.innerHTML += "<li> " + n + "</li>";

  
}