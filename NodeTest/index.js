var j = 6;
var d2;
var k=0;
const app = document.createElement('div');
app.setAttribute('id','root')

// const card = document.createElement('div');
// card.setAttribute('id','root')
document.body.appendChild(app)

function calling(loadmore) {
    var xhr = new XMLHttpRequest();
    var v = "https://randomuser.me/api/?results=100"
    xhr.open('GET', v, true);
    xhr.onload = function () {
        loading();
        // console.log(v)
        var d = JSON.parse(this.response);
        d2 = d["results"];
        for(i=0;i<6;i++){
            addingData(d2[i],app);
        }
        // else {
        //     alert("This is the last page available!!!!!")
        //     document.getElementById('button').style.visibility = "hidden";
        // }
    }

    xhr.send();
 
}
function calculating(){
    for(var i=j;i<j+6;i++)
    {
        if(i== 95){
            j=6;
            calling();
        }
        // console.log(i)
        addingData(d2[i],app);
    }if(wh>window.innerHeight){
        //         console.log("Yes")
        //         calculating();
        //  }
    j+=6;
}}
function loading(){
    document.getElementById("loader").style.visibility = "hidden";
}

window.onscroll = function() {
    // this.console.log(window.innerHeight+" "+ window.scrollY+" "+document.body.scrollHeight)
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        document.getElementById("loader").style.visibility = "visible";
        calculating()

    }
    // var wh=document.getElementById("root").offsetHeight;
    // var ww=window.innerWidth;
    // console.log(wh+" "+window.innerHeight)
    // if(wh>window.innerHeight){
    //         console.log("Yes")
    //         calculating();
    //  }
// console.log(wh+" "+ww)
};
function addingData(i,app){
    const card = document.createElement('div')
                    card.setAttribute('class', 'card')
    
                    const details = document.createElement('div')
                    const image = document.createElement('img')
                    const imagereplace = document.createElement('h2')
                    // i.picture.large=null
                    if (i.picture.large) {
                        image.src = i.picture.large;
                        image.setAttribute('class', 'img')
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

                    }
                    // const details = document.createElement('div')
                    details.setAttribute('class', 'container')
    
                    const h1 = document.createElement('h1')
                    var fn="";
                    var ln="";
                    // i.name.first=""
                    // i.name.last=""
                    if(i.name.first==null && i.name.last==null){
                        h1.textContent = "Name Not" + " " + "Mentioned"
                    }
                    else{
                    h1.textContent = i.name.first + " " + i.name.last
                    }
                    const p = document.createElement('p')
                    p.textContent = i.email
    
                    card.appendChild(image);
                    details.appendChild(imagereplace)
                    details.appendChild(h1)
                    details.appendChild(p)
                    card.appendChild(details);
                    // card.append(imagereplace)
                    document.body.appendChild(card);
                }
module.exports={calling,addingData};