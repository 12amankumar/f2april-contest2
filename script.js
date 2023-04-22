let Name_Ele=document.getElementById("name");

let Profession_Ele=document.getElementById("profession");
let Age_Ele=document.getElementById("age");
let tbody=document.querySelector("tbody");
let select=document.getElementById("items");
let filterbutton=document.getElementById("filter");

let adduser=document.getElementById("adduser");
let id=4;
adduser.addEventListener("click",addingdata)
select.addEventListener("change",fiterfun)
filterbutton.addEventListener("click",filterdata)

function addingdata(event){
    event.preventDefault();
   let Name=Name_Ele.value;   
   let profession= Profession_Ele.value;  
   let Age=Age_Ele.value;  

 
   tbody.innerHTML+=`<tr>
   <td>${id++}.&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp </td>
<td>Name:&nbsp &nbsp${Name}&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp&nbsp &nbsp</td>
<td>Profession:&nbsp &nbsp${profession}&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp</td>
<td>Age:&nbsp &nbsp${Age}</td>
   </tr> `
reset()
}
function reset(){
    let Name_Ele=document.getElementById("name").value="";
    let Profession_Ele=document.getElementById("profession").value="";
let Age_Ele=document.getElementById("age").value="";
}





function fiterfun(event){
    event.preventDefault();

    let filtervalue=select.value;
    console.log(filtervalue);
}

function filterdata(event){
    event.preventDefault();
    let selected=document.getElementById("items").value.toUpperCase();
    let table=document.getElementById("mytable");
    let tabletr=table.getElementsByTagName("tr");
    for(let i=0;i<tabletr.length;i++){
        let td=tabletr[i].getElementsByTagName("td")[3];
        if(td){
            let textvalue=td.textContent;
            if(textvalue.toUpperCase().indexOf(selected)>-1){
             tabletr[i].style.display="";
            }
            else{
                alert("select the profession");
            }
        }
    }
}

let arr=[
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
];
