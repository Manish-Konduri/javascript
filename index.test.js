const {calling,addingData,AddImage,AddFirstName,AddLastName,AddingEmail,CallURL,onscroll,calculating} = require('./testingcard.js');
test('Testing AddImage function',function(){
    const cv=document.getElementsByClassName('card');
    // console.log(cv[0])
    var data={"name":{"first":"Juventino","last":"Lopes"},"email":"juventino.lopes@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/99.jpg"}};
    // var data1=data.picture.large
    // addingData(data);
    AddImage(data)
    // console.log(cv.img);
    expect(document.getElementsByTagName('img')).toBeTruthy;
});
test('Testing AddImage function',function(){
    const cv=document.getElementsByClassName('card');
    // console.log(cv[0])
    var data={"name":{"first":"Juventino","last":"Lopes"},"email":"juventino.lopes@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/99.jpg"}};
    // var data1=data.picture.large
    // addingData(data);
    AddImage(data)
    // console.log(cv.img);
    expect(document.getElementsByTagName('div')).toBeTruthy;
});

 test('Testing AddFirstName function',function(){
    const cv=document.getElementsByClassName('card');
    // console.log(cv[0])
    var data={"name":{"first":"Juventino","last":"Lopes"},"email":"juventino.lopes@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/99.jpg"}};
    expect(AddFirstName(data)).toBeTruthy();
 });
 test('Testing AddLastName function',function(){
    const cv=document.getElementsByClassName('card');
    // console.log(cv[0])
    var data={"name":{"first":"Juventino","last":"Lopes"},"email":"juventino.lopes@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/99.jpg"}};
    expect(AddFirstName(data)).toBeTruthy();
 });
test('Testing CallURl function',function(){
    const cv=document.getElementsByClassName('card');
    // console.log(cv[0])
    var data={"name":{"first":"Juventino","last":"Lopes"},"email":"juventino.lopes@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/99.jpg"}};
    expect(CallURL()).toBeTruthy();
});
// test('Testing LoadMore function',function(){
//     expect(onscroll() || calculating()).toBeTruthy();
// });
test('Testing AddEmail function',function(){
    const cv=document.getElementsByClassName('card');
    // console.log(cv[0])
    var data={"name":{"first":"Juventino","last":"Lopes"},"email":"juventino.lopes@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/99.jpg"}};
    expect(AddFirstName(data)).toBeTruthy();
});
// test('Testing OnScroll function',function(){
//     // const cv=document.getElementsByClassName('card');
//     // // console.log(cv[0])
//     var data={"name":{"first":"Juventino","last":"Lopes"},"email":"juventino.lopes@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/99.jpg"}};
//     calculating(data)
//     expect(onscroll()).toBeTruthy();
// });