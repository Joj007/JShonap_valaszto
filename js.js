
let honapokTomb = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"]
let hossz = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

honapokTomb.forEach(honap => {
    document.getElementById("honapok").innerHTML+=`<option value="${honap}">${honap}</option>`
});

function Valtozas(){

}