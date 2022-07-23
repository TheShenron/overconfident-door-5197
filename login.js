document.querySelector("form").addEventListener("submit" , Checkdata);


let ArrData = JSON.parse(localStorage.getItem("ArrData")) 

function Checkdata(){
    
    event.preventDefault();

    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pas").value;

    console.log(email ,pass);

    let isPresent = false;
    ArrData.forEach(function(el){
        if(el.email == email && el.pass == pass){
            isPresent = true;
            alert("Hii " + el.name + " :)");
            return
        }
    })
    if(isPresent==false){
        alert("User Not Present :(");
    }

}