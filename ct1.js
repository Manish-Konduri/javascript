var i = 1
const app = document.getElementById('root');
function calling() {
    var xhr = new XMLHttpRequest();
    var v = "https://reqres.in/api/users?page="
    v = v + i
    xhr.open('GET', v, true);
    xhr.onload = function () {
        var d = JSON.parse(this.response);
        var d2 = d["data"];
        if (d2.length !== 0) {
            for (var i = 0; i < d2.length; i++) {
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
                    if (i.avatar) {
                        image.src = i.avatar;
                        image.setAttribute('class', 'img')
                    }
                    else {
                        iNA=document.createElement('div')
                        iNA.textContent=i.first_name[0].toUpperCase()+ i.last_name[0].toUpperCase()
                        iNA.setAttribute('class','profileImage')
                        details.appendChild(iNA)

                    }
                    // const details = document.createElement('div')
                    details.setAttribute('class', 'container')
    
                    const h1 = document.createElement('h1')
                    h1.textContent = i.first_name + " " + i.last_name
    
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