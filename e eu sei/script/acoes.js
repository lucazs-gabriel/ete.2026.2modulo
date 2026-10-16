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


function acao3(){
    resp.innerHTML+= '<p>Clicou no terceiro botão</p>'

    let numero= prompt("Informe um número");
    for(let i=0; i<numero;i++){
        resp.innerHTML+='<p> Paragrafo ' + i + '</p>';
    }
}

function acao4(){
    resp.innerHTML+= '<p>Clicou no quarto botão</p>'

    let numero= prompt("Infomre um número");
    while(numero<=10){
        resp.innerHTML+='linha +numero+ <br/>';
        numero++;
    }
}

function acao5(){
    resp.innerHTML+= '<p> Clicou no quinto botão</p>';
    
    let var1=prompt("informe um número");
    do{
        resp.innerHTML+= 'lina +var1+ <br/>'
        var1++;
    }while(var1<=10)
}

function acao6(){
    resp.innerHTML+= '<p> Clicou no sexto botão</p>';
    let myArray=[1,2,3,4,5,6,,7,8,9,10,11];

    myArray.forEach(function(value, key){
        resp.innerHTML+= 'Chave: '+key+' valor: '+value+' <br/>';
        //document.write(value+'', key+'<br/>'); 
    });
}

function acao7(){
    let entrada= "Bem-vindo" + prompt("Informe seu nome: ")
    var saldacao= document.getElementById('titulo');
    saldacao.textContent= entrada;

    const collection= document.getElementsByName("animal");
          for(let i=0; i< collection.length;i++) {
            if(collection[i].type== "checkbox"){
            collection[i].checked= true;
            }
          }
          resp.innerHTML+='Clicou no sétimo botão'
          document.getElementsByTagName("p") [1].innerHTML= "Texto do paragrafo 2 substitui"

          let teste= document.getElementsByName("paragrafo");
          teste[1].textContent='Texto do paragrafo identificado por "paragrafo" na posição 1, substituindo com sucesso!'
}

function acao8(){
    resp.innerHTML+= '<p>Clicou no oitavo botão</p>';

    function calculararea(){
        let area=3*5
        resp.innerHTML+='<h1> Área total:'+area+'</h1>'
    }
    calculararea();
}