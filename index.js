function checkInput(){
    var msg=document.getElementById("errorUpdater");
    if(this.value.length <7){
        msg.textContent="Yo! the text you entered is too small";
        this.style.borderColor="red";
    }else{
        msg.textContent="";
        this.style.borderColor="";
    }
}

var elInput=document.getElementById("textInput");
elInput.addEventListener('blur',checkInput,false);



//adding a function to remove item from the list
var todo=document.querySelectorAll("fas");
for(var i=0; i<todo.length; i++){
    todo[i].addEventListener('click',function(e){
var parent=todo[i].parentNode;
console.log(e.target);
    },false)
}



//add items to the list
function update(e){
    var value=document.getElementById("textInput");
    
if(value.value!=""){
    var position= document.getElementsByTagName('ul')[0];
    var newEl= document.createElement("li");
    var text=document.createTextNode(value.value);
var icon='<i class="fas fa-trash-alt"></i>';
    e.preventDefault();
    newEl.appendChild(text);
    newEl.innerHTML+=icon;
    
    position.appendChild(newEl);
    
}
   
    

    value.value="";


}
var btn = document.getElementById("button");
btn.addEventListener('click', function(e){
    update(e);
}, false);