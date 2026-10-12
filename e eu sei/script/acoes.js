function acao1(){
    res.innerHTML+= '<P>Clicou no primeiro botão</p>'

    var a=prompt("informe um número")
    if(a!="6"){

    }else{
        resp.innerHTML+='<h1> Diferente de 6</h1>'
    }
}

function acao2(){
    resp.innerHTML+='<P> Clicou no segundo botão<p/p>'
    switch(prompt("Como está o tempo? use chuvoso,ensolarado ou nublado")){
  //switch ("Chuvoso"){
  case "chuvoso":
   resp.innerHTML+='<h1> Lembresse de trazer guarda-chuva</h1>'
    }
}