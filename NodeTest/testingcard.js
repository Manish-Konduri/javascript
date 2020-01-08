var j = 20;
var d2;
var k=0;
const app = document.createElement('div');
app.setAttribute('id','root')

// const card = document.createElement('div');
//  card.setAttribute('id','root')
document.body.appendChild(app)
function calling(loadmore) {
    var xhr = new XMLHttpRequest();
    var v1=CallURL();
    xhr.open('GET', v1, true);
    xhr.onload = function () {
        loading();
        var d = JSON.parse(this.response);
        d2 = d["results"];
        for(i=0;i<20;i++){
            addingData(d2[i]);
        }
        // else {
        //     alert("This is the last page available!!!!!")
        //     document.getElementById('button').style.visibility = "hidden";
        // }
    }

    xhr.send();
 
}
function calculating(d2){
    for(var i=j;i<j+20;i++)
    {
        if(i== d2.length){
            j=20;
            calling();
        }
        console.log(i)
        loading();
        addingData(d2[i]);
        // if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        //     calculating()
        //     j+=6;
            
        // }
    }
    j+=20;
    return true
}
function CallURL()
{
    return "https://randomuser.me/api/?results=100"
}
function loading(){
    document.getElementById("loader").style.visibility = "hidden";
}
window.onscroll = function() {
    this.console.log(window.innerHeight+" "+ window.scrollY+" "+document.body.scrollHeight)
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        document.getElementById("loader").style.visibility = "visible";
        calculating(d2)
        return true
    }
};
function addingData(i){
//     const app = document.createElement('div');
// app.setAttribute('id','root')

// // const card = document.createElement('div');
// // card.setAttribute('id','root')
// document.body.appendChild(app)
    const card = document.createElement('div')
                    card.setAttribute('class', 'card')
    
                    const details = document.createElement('div')
                    // const details = document.createElement('div')
                    details.setAttribute('class', 'container')
                    if(i.picture.large){
                        var retimg = AddImage(i);
                        card.appendChild(retimg)
                    }
                    else{
                        var retimgnone = AddImage(i);
                        details.appendChild(retimgnone)
                    }
    
                    const h1 = document.createElement('h1')
                    var fn="";
                    var ln="";
                    if((i.name.first!==null && i.name.last!==null)||(i.name.first==null && i.name.last===null)){
                    fn=fn+AddFirstName(i);
                    ln=ln+AddLastName(i);
                    }
                    else{
                        if(i.name.first==null){
                            fn=""
                            ln=i.name.last;
                        }
                        else{
                            ln=""
                            fn=i.name.first;
                        }                  
                    }
                    h1.textContent=fn+ln;
                    
                    const p = document.createElement('p')
                    var emailAdd = AddingEmail(i);
                    
                    p.textContent = emailAdd
    
                    details.appendChild(h1)
                    details.appendChild(p)
                    card.appendChild(details);
                    app.appendChild(card);
                }
            
function AddImage(i){
                    const image = document.createElement('img')
                    const imagereplace = document.createElement('h2')
                    // i.picture.large=null
                    if (i.picture.large) {
                        image.src = i.picture.large;
                        image.setAttribute('class', 'img')
                        return image;
                    }
                    else {
                        iNA=document.createElement('div')
                        var fn="";
                        var ln="";
                        // i.name.first=null
                        // //  i.name.last=null
                        if(i.name.first ==null && i.name.last==null){
                            fn="N"
                            ln="A"
                        }
                        else if(i.name.first==null && i.name.last!==null ){
                            fn=" "
                        }
                        else{
                            fn=i.name.first[0];
                        }
                        if(i.name.first!==null && i.name.last==null){
                            ln=" "
                        }
                        else{
                            ln=i.name.last[0];
                        }
                        iNA.textContent=fn+ ln
                        iNA.setAttribute('class','profileImage')
                        details.appendChild(iNA)
                        return imagereplace
            }
        }
    function AddFirstName(i)
    {
        if(i.name.first==null){
            return "Name Not"
        }
        else{
            return i.name.first
        }

    }
    function AddLastName(i)
    {
        if(i.name.last==null){
            return "Mentioned"
        }
        else{
            return i.name.last
        }

    }
    function AddingEmail(i)
    {
     if(i.email==null)
     {
         return "No Mail Entered"
     }                   
     else{
         return i.email
     }
    }
module.exports={calling,addingData,AddImage,AddFirstName,AddLastName,AddingEmail,CallURL,onscroll,calculating}