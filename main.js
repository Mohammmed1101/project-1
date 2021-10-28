const btnAdd = document.querySelector('.btnAdd')
const text = document.querySelector('.input')
const list =  document.querySelector('.list')





btnAdd.addEventListener('click' , function(){
    const textAdd = text.value
    text.value = ''
 
    const element = document.createElement('div')
    const divSpan = document.createElement('span')
   // list style
    list.classList.add('foo')

   
    element.append(divSpan)
    divSpan.innerHTML = textAdd
    
    // Delete
    const btnDel = document.createElement('button')
    btnDel.innerHTML = 'Delete'
    element.append(btnDel)
    list.append(element)

    btnDel.addEventListener('click' , function() {
        element.remove();
        console.log(list.childElementCount);
        if(list.childElementCount == 0){
            list.classList.remove('foo')
        }

    })
    // edit
    const edit = document.createAttribute('contenteditable')
    divSpan.setAttributeNode(edit)

    //change text color blue  
    divSpan.addEventListener('click' , function(){
    divSpan.style.color = 'blue'
    
    })
    //back text color  
    divSpan.addEventListener('dblclick' , function(){
        divSpan.style.color = 'black'
    })
})
