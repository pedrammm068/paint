const element =document.querySelector(".item")
const colorInput = document.querySelector("input")
const mor = document.querySelector(".wr")
const svis = document.querySelector(".svi")


function hand() {


function donid(evt){
    let getColor = colorInput.value

    const x = evt.offsetX
   const y =evt.offsetY
    const template = `<span style="left:${x}px; top:${y}px;background-color:${getColor};"; class="appear"></span>`
    element.addEventListener("mousedown", ()=>element.addEventListener("mousemove",donid))
    element.addEventListener("mouseup", ()=>{element.removeEventListener("mousemove",donid)})
    element.innerHTML+=template
    console.log(getColor)
}
element.addEventListener("click",donid)
}
function cirel(evt){
    let getColor = colorInput.value

    const x = evt.offsetX
   const y =evt.offsetY
    const template = `<span style="left:${x}px; top:${y}px;background-color:${getColor};"; class="ci"></span>`
    element.addEventListener("mousedown", ()=>element.addEventListener("mousemove",cirel))
    element.addEventListener("mouseup", ()=>{element.removeEventListener("mousemove",cirel)})
    element.innerHTML+=template
    console.log(getColor)
}
function moring(evt){
    let getColor = colorInput.value

    const x = evt.offsetX
   const y =evt.offsetY
    const template = `<span style="left:${x}px; top:${y}px;background-color:${getColor};"; class="wrin"></span>`
    element.addEventListener("mousedown", ()=>element.addEventListener("mousemove",moring))
    element.addEventListener("mouseup", ()=>{element.removeEventListener("mousemove",moring)})
    element.innerHTML+=template
    console.log(getColor)
}
