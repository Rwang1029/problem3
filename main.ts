let x0 = 0
let y0 = 0
let j = 0
let x1 = 0
let y1 = 0
let x2 = 0
let y2 = 0
function showLwd (x: number, y: number, dir: number) {
    x0 = 4
    y0 = 0
    for (let I = 0; I <= 2; I++) {
        j = 0
        led.plot(x0, y0)
        while (j <= I - 1) {
            j += 1
            x1 = x0
            y1 = y0 - j
            x2 = x0 + j
            y2 = y0
            led.plot(x1, y1)
            led.plot(x2, y2)
        }
        basic.pause(200)
        x0 = x0 - 1
        y0 = y0 + 1
    }
    basic.clearScreen()
}
basic.forever(function () {
    showLwd(0, 0, 0)
    showLwd(4, 0, 1)
    showLwd(0, 4, 2)
    showLwd(0, 4, 3)
})
basic.forever(function () {
	
})
