// Created by: Mariam Abugamga
// Created on: Oct, 7, 2020
// This program shows the resistance of the potentiometer.
let potentiometer = 0
basic.clearScreen()
basic.forever(function () {
    potentiometer = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(potentiometer)
    basic.pause(1000)
})
