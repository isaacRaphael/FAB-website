const form = document.querySelector(".contactForm")
const nameField = document.querySelector(".name-field")
const emailField = document.querySelector(".email-field")
const subjectField = document.querySelector(".subject-field")
const messageField = document.querySelector(".message-field")
const btn = document.querySelector(".but");


// form.addEventListener("submit", (e)=> {
//     e.preventDefault();
// })

btn.addEventListener('click', (e)=> {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "945405efe30824",
        Password : "ad529e7189a720",
        To : 'raphaelangelo73@gmail.com',
        From : emailField.value,
        Subject : subjectField.value,
        Body :`${messageField.value} <br> ${nameField.value}`
    }).then(
      (msg)=> {
          
          console.log(msg);
          emailField.value =""
          subjectField.value = ""
          messageField.value = ""
          nameField.value = "" 
          alert("message sent")     
      }
    );
  
})