let navbar = document.querySelector(".navbar")

window.onscroll = function () {
    if(window.scrollY >= 180){
        navbar.classList.add("bg-secondary")
        navbar.classList.remove("bg-black")
    }else {
        navbar.classList.remove("bg-secondary")
        navbar.classList.add("bg-black")
    }
}



let ulList = document.querySelectorAll(".tab-switch li")
let div = document.querySelectorAll(".tabs-content div")
ulList.forEach(li => {


    li.addEventListener("click",function(e){
        

        handleActive(e)

        div.forEach(di => {
            if(e.target.dataset.class == di.className){
                di.classList.add("active")
            }else{
                di.classList.remove("active")
            }
        })

    })
  
})

let show = document.querySelectorAll(".price-box")


show.forEach(sh => {

    sh.addEventListener("click",function (){
        if(sh.classList.contains("show")){
            sh.classList.toggle("show")  
        }else {
            sh.classList.add("show")
        }

    })
})
function handleActive(ev) {

    ev.target.parentElement.querySelectorAll(".selected").forEach((ele) => {
      ele.classList.remove("selected")
    })
    ev.target.classList.add("selected")
  
  }