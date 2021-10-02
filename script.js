var escreva = document.querySelector('#novanota')
var btnAdd = document.querySelector('#btnmais')
var listaItems = document.querySelector('#items')
var contaItems = document.querySelector('#qntitemslista')
var quantItems = []
btnAdd.addEventListener('click', addItems)

function addItems(){    
    
    if(escreva.value.length == 0 ){
        escreva.value = ''//reseta o placeholder
        escreva.focus()
        console.log ('invalido')
        
    }else if(escreva.value[0] == ' '){
        console.log('also invalid')
        escreva.value = ''//reseta o placeholder
        escreva.focus()
    
    }else if(escreva.value[0] == ' ' & escreva.value.length == 0 ){
        console.log('also invalid')
        escreva.value = ''//reseta o placeholder
        escreva.focus()
    
    }else{
        quantItems.push(listaItems)

        if(quantItems.length === 1){
            contaItems.innerHTML = `${quantItems.length} item anotado`
        }else{
            contaItems.innerHTML = `${quantItems.length} items anotados`
        }
        

        let novoItem = '<li>' + escreva.value + '</li>'       
        listaItems.innerHTML += novoItem
        escreva.value = ''//reseta o placeholder
        escreva.focus()
    }   
}

//adiciona item quando tecla ENTER for pressionada
escreva.addEventListener('keyup', function(enter){  
    
    //console.log(e.keyCode);
    if(enter.keyCode === 13){
        if(escreva.value.length == 0 ){
            console.log ('invalido')
            escreva.value = ''//reseta o placeholder
            escreva.focus()
        }else if(escreva.value[0] == ' '){
            console.log('also invalid')
            escreva.value = ''//reseta o placeholder
            escreva.focus()
        }else{
            addItems();
        }
    }
})


