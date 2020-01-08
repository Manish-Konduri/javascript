const {domaddname}=require('./domindex');
test('Testing domaddname function',function(){
    expect(document.getElementsByTagName("div")).toBeTruthy();
    const d = document.getElementsByClassName("main");
    expect(d[0].innerHTML).toBe('My App');
 });