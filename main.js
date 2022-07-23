console.log("")


let count = 0
let div = document.querySelector(".box2");
console.log(div.scrollWidth)

document.querySelector("#left").addEventListener("click" , left);
function left(){
    
    // let LC = 0
    // let a = setInterval(()=>{
    //     if(count <= div.scrollWidth){
    //         if(LC >150){
    //             clearInterval(a);
    //             return
    //         }
    //         count+= document.querySelector(".box2 > div").clientWidth
    //         div.scrollLeft = count
    //         LC++
    //         console.log("Cool" , count , div.offsetWidth)
    //     }
    // } , 1)

    if(count >= div.clientWidth){
        return
    }

    count += document.querySelector(".box2 > div").clientWidth - 30
    div.scrollLeft = count
 
}


document.querySelector("#right").addEventListener("click" , right);
function right(){
     
    // let LC = 150
    // let a = setInterval(()=>{
    //     if(count >= 0){
    //         if(LC<0){
    //             clearInterval(a);
    //             return
    //         }
    //         count-= document.querySelector(".box2 > div").clientWidth
    //         div.scrollLeft = count
    //         LC--
    //         console.log("Cool" , count , div.offsetWidth)
    //     }
    // } , 1)

    if(count <= 0){
        return
    }

    count -= document.querySelector(".box2 > div").clientWidth - 30
    div.scrollLeft = count

}