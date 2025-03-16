let nameInput = document.querySelector("#nameInput")
let numberInput = document.querySelector("#numberInput")
let addbtn = document.querySelector("#addbtn")
let mainDiv = document.querySelector(".main-div")
let imgInput = document.querySelector("#imgInput")






let imgSrc=""

imgInput.addEventListener('change', function(event){    
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imgSrc=e.target.result
        }
        reader.readAsDataURL(file);        
    }
});




addbtn.addEventListener("click", () => {
    if(nameInput.value !="" && numberInput.value !="" && imgSrc !==""){
    let card_Div = document.createElement("div")
    card_Div.setAttribute("class", "card")
    card_Div.style.width = "15rem"

    let carBodyDiv = document.createElement("div");
    let myImg= document.createElement('img')
    let cardTitle = document.createElement("h2");
    let phoneNumber = document.createElement("p");
    
    carBodyDiv.setAttribute("class", "card-body");



      if(myImg){
          myImg.src=imgSrc
       card_Div.appendChild(myImg)

      }



    mainDiv.appendChild(card_Div);
    card_Div.appendChild(carBodyDiv);
    carBodyDiv.appendChild(cardTitle);
    carBodyDiv.appendChild(phoneNumber);

    // console.log(imgInput)

   







   
        cardTitle.textContent = nameInput.value;
        phoneNumber.textContent = numberInput.value;

        numberInput.value  ="";
        nameInput.value =""
      imgInput.value=""
        imgSrc=""
    }

})