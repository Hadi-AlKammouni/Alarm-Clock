const select_menu = document.querySelectorAll("select")

// Hours
for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i
    let option = `<option value="${i}">${i}</option>`
    select_menu[0].firstElementChild.insertAdjacentHTML("afterend", option)
}

// Minutes
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i
    let option = `<option value="${i}">${i}</option>`
    select_menu[1].firstElementChild.insertAdjacentHTML("afterend", option)
}

// AM / PM
for (let i = 2; i > 0; i--) {
    let am_pm = i == 1 ? "AM" : "PM"
    let option = `<option value="${am_pm}">${am_pm}</option>`
    select_menu[2].firstElementChild.insertAdjacentHTML("afterend", option)
}