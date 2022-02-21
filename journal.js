import {getDatabase, ref, child, get, update, remove} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js';
let bookAndJournalObj = {};
const db = getDatabase();
const parentSection = document.querySelector(".main-section")
function selectData (){
  const dbref = ref(db);

  get(child(dbref, "My_Resources"))
  .then((snapshot)=>{
    if(snapshot.exists()){
      console.log(snapshot.val());
      bookAndJournalObj = snapshot.val()
      if (bookAndJournalObj){
        snapshot.val().Journals.forEach((item) => {
            parentSection.innerHTML +=
                `<div class="card col-lg-3 col-md-4 my-5 mx-2 container">
                    <img class="card-img-top" src=${item.Img} alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title"><strong>${item.Title}</strong></h5>
                    </div>
                    <div class="card-footer my-1">
                    <button class="btn bg-primary"><a href=${item.Pdf} class="lead text-white"><span class="iconify-inline mx-1" data-icon="ant-design:book-outlined" style="color: white;"></span>Preview Book</a></button>
                    </div>
              </div>
                `
            
        })
    }
    }
  })
  .catch(err => console.log(err));
}

window.addEventListener('load', ()=>{
  selectData();
})





