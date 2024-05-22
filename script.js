// const endDate = "12 May 2024 10:29 AM"

// document.getElementById("end-date").innerText = endDate
// const inputs = document.querySelectorAll("input")
// function clock() {
//     const end = new Date(endDate)
//     const now = new Date()
//     const diff = (end - now) / 1000
//     if (diff < 0) return;
//     inputs[0].value = (Math.floor(diff / 3600 / 24))
//     inputs[1].value = (Math.floor(diff / 3600) % 24)
//     inputs[2].value = (Math.floor(diff / 60) % 60)
//     inputs[3].value = (Math.floor(diff) % 60)
// }
// clock()

// setInterval(() => {
//     clock()
// }, 1000);


// const endDate = "12 May 2024 5:00 PM"
// document.getElementById("end-date").innerText = endDate
// const inputs = document.querySelectorAll("input")
// function clock(){
//     const end = new Date (endDate)
//     const now = new Date()
//     const diff = ( end -now)/1000
//     if (diff<0) return;
//     inputs[0].value = (Math.floor(diff/3600/24))
//     inputs[1].value = (Math.floor(diff/3600)%24)
//     inputs[2].value = (Math.floor(diff/60)%60)
//     inputs[3].value = (Math.floor(diff)%60)
// }
// clock()
// setInterval(() => {
//     clock()
// }, 1000);
const endDate = "16 May 2024 10:00 AM"
document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")
function clock(){
    const hadii = new Date (endDate)
    const hasan = new Date ()
    const diff = (hadii-hasan)/1000
if(diff<0) return;
inputs[0].value = (Math.floor(diff/3600/24))
inputs[1].value = (Math.floor(diff/3600)%24)
inputs[2].value = (Math.floor(diff/60)%60)
inputs[3].value = (Math.floor(diff)%60)
}
clock()
setInterval(() => {
    clock()
}, 1000);