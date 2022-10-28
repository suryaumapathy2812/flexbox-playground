const screenEl = document.getElementById("list");
console.log(screenEl);

document.getElementById("no_of_child").addEventListener("change", function (event) {
    const input = event.target.value;
    console.log(input);

    screenEl.innerHTML = ""

    for (let i = 0; i < input; i++) {
        const li = document.createElement("li");
        li.innerText = i + 1;
        screenEl.append(li)
    }
})

document.getElementById("btn-flex").addEventListener("change", function () {
    if (screenEl.style.display !== "flex") {
        console.log("property => { display : flex }")
        screenEl.style.display = "flex"
    } else {
        console.log("property => { display : block }")
        screenEl.style.display = "block"
    }
})


document.getElementsByName("flex-direction").forEach(function (btn) {
    btn.addEventListener("change", function () {
        screenEl.style.flexDirection = btn.value
    })
})


document.getElementsByName("flex-wrap").forEach(function (btn) {
    btn.addEventListener("change", function () {
        console.log("property => { flex-wrap : " + btn.value + "}")
        screenEl.style.flexWrap = btn.value
    })
})


document.getElementsByName("justify-content").forEach(function (btn) {
    btn.addEventListener("change", function () {
        console.log("property => { justify-content : " + btn.value + "}")
        screenEl.style.justifyContent = btn.value
    })
})

document.getElementsByName("align-content").forEach(function (btn) {
    btn.addEventListener("change", function () {
        console.log("property => { align-content : " + btn.value + "}")
        screenEl.style.alignContent = btn.value
    })
})