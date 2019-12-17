var i=1
const app = document.getElementById('root');
function calling(){
var xhr = new XMLHttpRequest();
var v ="https://reqres.in/api/users?page="
v=v+i
xhr.open('GET', v, true);
xhr.onload= function()
{
var d = JSON.parse(this.response);
var d2=d["data"];
if(d2.length!==0){
for(var i=0;i<d2.length;i++){
const card=document.createElement('div')
card.setAttribute('class','card')


const image=document.createElement('img')
image.src=d2[i].avatar;
image.setAttribute('class','img')
const details=document.createElement('div')
details.setAttribute('class','container')

const h1=document.createElement('h1')
h1.textContent=d2[i].first_name+" "+d2[i].last_name

const p = document.createElement('p')
p.textContent=d2[i].email

card.appendChild(image);
details.appendChild(h1)
details.appendChild(p)
card.appendChild(details);

app.appendChild(card);
}
}
else{
    alert("This is the last page available!!!!!")
    document.getElementById('button').style.visibility="hidden";
}
}

xhr.send();
i=i+1;
}