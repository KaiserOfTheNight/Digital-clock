function Time(){
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let flg = "AM"

    if (h == 0){
        h = 12
    }

    if (h > 12){
        h = h - 12
        flg = "PM"
    }

    if (h < 10) h = "0" + h
    if (m < 10)  m = "0" + m
    if (s < 10) s = "0" + s
    document.querySelector(".heure").innerHTML = `${h}:${m}:${s} ${flg}`
}

setInterval(Time, 1000)


