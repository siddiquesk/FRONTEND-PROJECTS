const btn=document.querySelector(".btn");
const inputbox=document.querySelector("#input-field");
const task=document.querySelector(".list");


btn.addEventListener("click",()=>{
  if(inputbox.value ==="")
  {
   alert("please add Your Task First");
  }
  else{
    let listele=document.createElement("li");
    listele.textContent=inputbox.value;
   task.appendChild(listele);
 let spanele=document.createElement("span");
 spanele.textContent="\u00d7";
 listele.appendChild(spanele);


  }
  inputbox.value=" ";
})

task.addEventListener("click",(e1)=>{
if(e1.target.tagName=="LI")
{
    e1.target.classList.toggle("checked1");
}
else if(e1.target.tagName=="SPAN"){
    e1.target.parentElement.remove();
    
}
})
