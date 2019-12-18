var i = 1
const app = document.getElementById('root');
function calling() {
    var xhr = new XMLHttpRequest();
    var v = "https://randomuser.me/api/?results=100"
    xhr.open('GET', v, true);
    xhr.onload = function () {
        var d = JSON.parse(this.response);
        var d2 = d["results"];
        if (d2.length !== 0) {
            for (var i = 0; i < 12; i++) {
                addingData(d2[i])
            }
        }
        else {
            alert("This is the last page available!!!!!")
            document.getElementById('button').style.visibility = "hidden";
        }
    }

    xhr.send();
    i = i + 1;
}
function addingData(i){
    const card = document.createElement('div')
                    card.setAttribute('class', 'card')
    
                    const details = document.createElement('div')
                    const image = document.createElement('img')
                    const imagereplace = document.createElement('h2')
                    // i.avatar=null
                    if (i.picture.large) {
                        image.src = i.picture.large;
                        image.setAttribute('class', 'img')
                    }
                    else {
                        iNA=document.createElement('div')
                        iNA.textContent=i.name.first[0].toUpperCase()+ i.name.last[0].toUpperCase()
                        iNA.setAttribute('class','profileImage')
                        details.appendChild(iNA)

                    }
                    // const details = document.createElement('div')
                    details.setAttribute('class', 'container')
    
                    const h1 = document.createElement('h1')
                    h1.textContent = i.name.first + " " + i.name.last
    
                    const p = document.createElement('p')
                    p.textContent = i.email
    
                    card.appendChild(image);
                    details.appendChild(imagereplace)
                    details.appendChild(h1)
                    details.appendChild(p)
                    card.appendChild(details);
                    // card.append(imagereplace)
                    app.appendChild(card);
                }