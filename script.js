const select_menu = document.querySelectorAll("select"),
current_time = document.querySelector("h1"),
set_alarm_btn = document.querySelector("button") 

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

// Displaying current time
setInterval(() => {
    let date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    am_pm = "AM"

    if(hour >= 12) {
        hour = hour - 12
        am_pm = "PM"
    }

    hour = hour == 0 ? hour = 12 : hour // set hour to 12 if = 0

    // if value < 10, add 0 before it
    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    current_time.innerText = `${hour}:${minute}:${second} ${am_pm}`
},1000)


function setAlarm() {
    let time = `${select_menu[0].value}:${select_menu[1].value} ${select_menu[2].value}`
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please select a valid time to set alarm!")
    }
}



set_alarm_btn.addEventListener("click", setAlarm)