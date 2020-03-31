if(localStorage.getItem("user")===null) 
{
   var name=prompt("Please, enter your name here?")
   localStorage.setItem("user", name)
}
else 
{
	name=localStorage.getItem("user")
}
let arr=[];
var li;
function addItem(str)
{
         ul = document.getElementById("list")
    
    var textnode=document.createTextNode(str)
            li=document.createElement('li');
        var myinput=document.createElement('input')
        myinput.type="checkbox";
        myinput.setAttribute('Id','list1')
        var label=document.createElement('label');
        ul.appendChild(label)
        li.appendChild(myinput)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        var input1=document.getElementById("one")
        input1.value='';   
        arr.push(str);
        var use = JSON.stringify(arr);
        localStorage.setItem("data", use)
}
var x=document.getElementById('two');
x.addEventListener('click',(event)=>{
         var input=document.getElementById("one")
    var item=input.value;
    if(item === '')
    {
    	return false;
    }
    else
    {
    	addItem(item);
    }
});	
var y=document.getElementById("three");
y.addEventListener('click',()=>{
	li=ul.children
	for (var i=0;i<li.length;i++)
	{
		while (li[i] ) {
			ul.removeChild(li[i])
			localStorage.removeItem("data")
		}
	}
})
var takeout = localStorage.getItem("data")
 var a1= JSON.parse(takeout);
	for(var k=0;k<a1.length;k++)
	{
		addItem(a1[k])
	}
// var arr1=[];
// var use1=JSON.stringify(arr1);
// document.getElementById("twoo").addEventListener('click',(event)=>{
// 	li=ul.children
// 	for(var i=0;i<li.length;i++)
// {
	
// 	if(li[i] && li[i].children[i].checked)
// 	{
// 		localStorage.setItem("checks",use1)
// 		arr1.push(li[i].children[i]);
// 	}
// }
// var takeout1=localStorage.getItem("checks");
// var a2=JSON.parse(takeout1);
// 	for(var j=0;j<a2.length;j++)
// 	{
// 		addItem(a2[j]);
// 	}


// })

