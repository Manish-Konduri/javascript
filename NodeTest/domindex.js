function domaddname(){
    const d =document.createElement('div');
    d.setAttribute("class","main");
    d.innerHTML="My App";
    document.body.append(d);
    return true;
}
domaddname();

module.exports={domaddname};