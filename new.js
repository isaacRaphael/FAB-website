const title = document.querySelector("#Title")
const imgLink = document.querySelector("#Image-Link")
const pdfLink = document.querySelector("#Pdf-Link")
const password = document.querySelector("#Password")
const Btn = document.querySelector("#Submit-Btn")
const Choice =  document.querySelector("#Choice")

import {getDatabase, ref, child, get, update, set , remove} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js';
const db = getDatabase();
const dbref = ref(db);
let myObj = {};
loadDAta();

function loadDAta(){
    get(child(dbref, "My_Resources"))
    .then((snapshot)=>{
      if(snapshot.exists()){
        console.log(snapshot.val());
        myObj = snapshot.val()
         }
        })
    .catch(err => console.log(err));
}


Btn.addEventListener("click",(e)=> {
    if (password.value === "admin1124" && myObj && title.value && imgLink.value && pdfLink.value)
        {
        
        if (Choice.value === "Book"){
            let ind = myObj.Book.length
            insertBookData(ind)
            clearFields()
            loadDAta()
        } else if (Choice.value === "Journal")
        {
            let ind = myObj.Journals.length
            insertJournalData(ind)
            clearFields()
            loadDAta()
        }
    } else {
        alert("incorrect admin details")
    }
})

console.log(myObj.Book.Length)

function insertBookData(index) {
    set(ref(db, "My_Resources/Book/"+index),{
        Title : title.value.trim(),
        Img : imgLink.value.trim(),
        Pdf : pdfLink.value.trim()
    })
    .then(()=>alert("Added Succefully"))
    .catch(err=> console.log(err))
}

function insertJournalData(index) {
    set(ref(db, "My_Resources/Journals/"+index),{
        Title : title.value.trim(),
        Img : imgLink.value.trim(),
        Pdf : pdfLink.value.trim()
    })
    .then(()=>alert("Added Succefully"))
    .catch(err=> console.log(err))
}

function clearFields (){
    title.value = ""
    imgLink.value = ""
    pdfLink.value = ""
    password.value = ""
}