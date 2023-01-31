pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    Fentes += 1
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallDiamond)
    control.reset()
})
let f1 = 0
let Fentes = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
let f2 = 0
f2 = 0
f2 = 0
basic.forever(function () {
    f1 = Fentes
    if (f1 > f2) {
        radio.sendString("" + (Fentes))
    }
    f2 = f1
    basic.pause(10)
})
