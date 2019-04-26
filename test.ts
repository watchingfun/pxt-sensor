// This tests all three channels of the MonkMakes Sensor for micro:bit
// Connect the board as shown in README.md.
// Pressing button A reports the sound level measured by the microphone 0-100
// Pressing button B measures the temperature in degrees C
// Pressing both A+B buttons together reports the  light level 0-100


input.onButtonPressed(Button.A, function () {
    basic.showString("Sound=")
    basic.showNumber(Sensor.soundLevel(AnalogPin.P0))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Temp=")
    basic.showNumber(Sensor.tempC(AnalogPin.P1))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Light=")
    basic.showNumber(Sensor.lightLevel(AnalogPin.P2))
})
