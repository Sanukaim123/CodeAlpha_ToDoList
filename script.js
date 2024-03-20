 const inputBx =document.getElementById("inputBx");
 const list= document.getElementById("list");

// list.querySelector("i").addEventListener("click",function(){
//     list.remove();
//     list.appendChild(li);
//  })

 function addTask(){
    if(inputBx.value===""){
        alert('You must write something')
    }else{
        let li=document.createElement("li");
        li.innerHTML = inputBx.value;
        list.appendChild(li);
    }

}

