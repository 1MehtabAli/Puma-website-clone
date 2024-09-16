let list1=document.getElementById("list1")
console.log(list1);
list1.style.cursor="pointer"



list1.onmouseover =() =>{
    let divjs=document.getElementById("divjs")
    console.log(divjs);
    list1.style.borderBottom="2px solid #8A7350"
    divjs.style.visibility="visible"
    divjs.style.transitionDuration="1s"
}
    
list1.onmouseout = () =>{
        divjs.style.visibility="hidden"
        list1.style.borderBottom="none"
        // divjs.style.transitionDelay="1s"
}
divjs.onmouseover =() =>{
    divjs.style.visibility="visible"
}
divjs.onmouseout =() =>{
    divjs.style.visibility="hidden"
}
// ------------------------------------------------------------


let list5=document.getElementById("list5")
console.log(list5);
list5.style.cursor="pointer"

list5.onmouseover = () =>{
    let divjs5=document.getElementById("divjs5")
    divjs5.style.visibility="visible"
    list5.style.borderBottom="2px solid #8A7350"
    divjs5.style.transitionDuration="1s"
}
list5.onmouseout = () =>{
    divjs5.style.visibility="hidden"
    list5.style.borderBottom="none"
}
divjs5.onmouseover =() =>{
    divjs5.style.visibility="visible"
}
divjs5.onmouseout = () => {
    divjs5.style.visibility="hidden"
}




// --------------------------------------------------------------------------------




let list2=document.getElementById("list2")
console.log(list2);
list2.style.cursor="pointer"


list2.onmouseover = () => {
    let divjs2=document.getElementById("divjs2")
    divjs2.style.visibility="visible"
    list2.style.borderBottom="2px solid #8A7350"
    divjs2.style.transitionDuration="0.5s"
    
}
list2.onmouseout = ()=>{
    divjs2.style.visibility="hidden"
    list2.style.border="none"
}

divjs2.onmouseover =()=>{
    divjs2.style.visibility="visible"
}
divjs2.onmouseout =()=>{
    divjs2.style.visibility="hidden"
}




let list6=document.getElementById("list6")
console.log(list6);

list6.onmouseover =() =>{
    let divjs6=document.getElementById("divjs6")
    divjs6.style.visibility="visible"
    list6.style.borderBottom="2px solid #8A7350"
    list6.style.cursor="pointer"
    divjs6.style.transitionDuration="1s"
}
list6.onmouseout =() =>{
    divjs6.style.visibility="hidden"
    list6.style.borderBottom="none"
}
divjs6.onmouseover =()=>{
    divjs6.style.visibility="visible"
    list6.style.borderBottom="2px solid #8A7350"
}
divjs6.onmouseout =()=>{
    list6.style.borderBottom="none"
    divjs6.style.visibility="hidden"
}



let list7=document.getElementById("list7")
console.log(list7);
list7.style.cursor="pointer"

list7.onmouseover = ()=>{
    let divjs7=document.getElementById("divjs7")
    divjs7.style.visibility="visible"
    divjs7.style.transitionDuration="1s"
    list7.style.borderBottom="2px solid #8A7350"
}
list7.onmouseleave =()=>{
    divjs7.style.visibility="hidden"
    list7.style.border="none"
}
divjs7.onmouseover =()=>{
    divjs7.style.visibility="visible"
    list7.style.borderBottom="2px solid #8A7350"
}
divjs7.onmouseleave =()=>{
    divjs7.style.visibility="hidden"
    list7.style.border="none"
}





let list4=document.getElementById("list4")
console.log(list4);
list4.style.cursor="pointer"

list4.onmouseover =()=>{
    let divjs4=document.getElementById("divjs4")
    divjs4.style.visibility="visible"
    divjs4.style.transitionDuration="1s"
    list4.style.borderBottom="2px solid #8A7350"
}
list4.onmouseout =()=>{
    divjs4.style.visibility="hidden"
     list4.style.borderBottom="none"
}
divjs4.onmouseover =()=>{
    divjs4.style.visibility="visible"
    list4.style.borderBottom="2px solid #8A7350"
}
divjs4.onmouseout =()=>{
    divjs4.style.visibility="hidden"
     list4.style.borderBottom="none"
}