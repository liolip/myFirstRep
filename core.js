console.log("Hello world")

let burger =document.querySelector(".burger")
let menu =document.querySelector(".menu")
console.log('burger')

burger.addEventListener("click" , el =>{
  if( burger.classList.contains("active")){
    // неактивное меню 
    burger.classList.remove("active")
    menu.classList.remove("active")
  } else{
    // активное меню
    burger.classList.add("active")
    menu.classList.add("active")

  }
})

let map =document.querySelector(".map_img")
map.addEventListener("click" , el =>{
  if (map.classList.contains("active")){
    map.classList.remove("active")
  } else{
    map.classList.add("active")
  }
})