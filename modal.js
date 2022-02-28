const accessBtn = document.querySelector(".Access-btn")
const Username = document.querySelector(".admin-login-texbox")
const Password = document.querySelector(".admin-login-texbox-pass")
const nextBtn = document.querySelector(".next-btn")


accessBtn.addEventListener("click", ()=>{
  console.log(Username.value)
  console.log(Password.value)
  if(Username.value === "admin" && Password.value === "admin1124"){
    nextBtn.click();
  }
})