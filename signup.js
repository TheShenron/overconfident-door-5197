document.querySelector("form").addEventListener("submit" , Getdata);

let ArrData = JSON.parse(localStorage.getItem("ArrData")) || []

function Getdata(){
    event.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pas").value;

    console.log(name , email ,pass);

    let obj = {
        name,
        email,
        pass
    }

    let isPresent = false;
    ArrData.forEach(function(el){
        if(el.email == email){
            isPresent = true;
            alert("User Present");
        }
    })
    if(isPresent==false){
        ArrData.push(obj);
        localStorage.setItem("ArrData" , JSON.stringify(ArrData))
        window.location.href = "index.html";
    }

}