

// top bar
// 
// 

window.onscroll = function () {
    
    if (document.documentElement.scrollTop > 100){
        document.getElementById("header").style.background = "black";
    }
    else {
        document.getElementById("header").style.background = "none";
    }
}









// bar de recherche liste
// 
// 
// 
const voiture = [
    {name:'Renault clio 5', age:'clio_5.html'},
    {name:'Audi A3'},
    {name:'Renault clio 4'},
    {name:'Peugeot 308'},
    {name:'Mercedes class A'},
    {name:'Bmw serie 1'},
];

const shearchinput = document.getElementById('searchinput'); 

shearchinput.addEventListener('keyup', ()=> {
    const input = shearchinput.value;
    const result = voiture.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
    let suggestion = '';
   

    if(input !=''){
    result.forEach(resultItem =>
        suggestion += `
            <div class="suggestion" onclick="select(this)"><a href="${resultItem.age}" class="linkv">${resultItem.name}</a></div>
            `
        )

    }

    document.getElementById('suggestion').innerHTML = suggestion;
})


// bar de recherche selecteur

 function select(element){
     let selectUserData = element.textContent;
     // console.log(selectUserData);
     searchinput.value = selectUserData;
}


function    openPage(){
    var a = document.getElementById("searchinput").value;

    if(a === "Renault clio 5"){
        window.open("clio5.html")
    }
}



// bar de recherche end
// 
// 
// 






// form contact 
// 
// 
// 




// const form = document.querySelector('.contact-form'),
//     name = document.querySelector('.nom'),
//     email = document.querySelector('.e-mail'),
//     msg = document.querySelector('.message');

// // fuction send mail

// Email.send({
//     SecureToken : "985de7bf-be40-436f-8530-866c6b0f320d",
//     To : 'contact.sloc27@gmail.com',
//     From : email.value,
//     Subject : "Contact Form",
//     Body : msg.value
// }).then(
//   message => alert(message)
// );






//  const   form = document.querySelector('.contact-form');




// // fuction to send msg when click on button send





// function sendMsg(e) {
//      e.preventDefault();
    
//      const  name = document.querySelector('.nom'),
//             email = document.querySelector('.e-mail'),
//             msg = document.querySelector('.message');




// // fuction send mail





//             Email.send({
//                 SecureToken : "1a5af3a9-285f-4101-98c5-9d3dc5680994",
//                 To : 'contact.sloc27@gmail.com',
//                 From : email.value,
//                 Subject : "Contact Form",
//                 Body : msg.value
//             }).then(
//             message => alert(message)
//             );
// }





// // add evenlistener submit




// form.addEventListener('submit', sendMsg);


// listen for submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();

    // get input value
    let name = document.querySelector(".nom").value;
    let email = document.querySelector(".e-mail").value;
    let message = document.querySelector(".message").value;

    // saveContactInfo(name, email, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, message);
}


function sendEmail(name, email, message){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "contact.sloc27@gmail.com",
//         Password : "omcjxgjltkrlozug",
//         To : 'contact.sloc27@gmail.com',
//         From : "contact.sloc27@gmail.com",
//         Subject : `${name} sent you a message`,
//         Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
//     }).then(
//       message => alert("mail sent successfull")
//     );
// }

Email.send({
    SecureToken : "1a5af3a9-285f-4101-98c5-9d3dc5680994",
    To : 'contact.sloc27@gmail.com',
    From : "contact.sloc27@gmail.com",
    Subject : `${name} sent you a message`,
    Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
}).then(
  message => alert("Votre Message a bien été Envoyer")
);
}

// form contact end
// 
// 
// 


