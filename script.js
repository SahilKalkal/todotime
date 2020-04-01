if(localStorage.getItem("user")===null) { var name=prompt("Please, enter your name here?");   localStorage.setItem("user", name)}
else {name=localStorage.getItem("user")}
let arr=[],ul ;
function addItem(str){       ul = document.getElementById("list")
        var textnode=document.createTextNode(str)
        var li=document.createElement('li');
        var myinput=document.createElement('input')
        myinput.type="checkbox";
        myinput.setAttribute('Id','list1')
        var label=document.createElement('label');
        ul.appendChild(label)
        li.appendChild(myinput)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        document.getElementById("one").value='';   
        arr.push(str);
        localStorage.setItem("data", JSON.stringify(arr));}
var x=document.getElementById('two').addEventListener('click',(event)=>{
         var item=document.getElementById("one").value
    if(item !== ''){addItem(item);}});	
var y=document.getElementById("three").addEventListener('click',()=>{
			ul.remove();
			localStorage.removeItem("data")})
 var a1= JSON.parse(localStorage.getItem("data"));
 a1.forEach((alpha)=> {addItem(alpha)})
	// for(var k=0;k<a1.length;k++)
	// {
	// 	addItem(a1[k])
	// 


