input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    play = 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Yes)
    play = 1
    while (play != 0) {
        currfreq = Math.map(input.acceleration(Dimension.X), -1024, 1023, 1, 5000)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        Math.map(input.acceleration(Dimension.X), -1024, 1023, 1, 5000),
        Math.map(input.acceleration(Dimension.Y), -1024, 1023, 1, 5000),
        randint(0, 1024),
        randint(0, 1024),
        randint(40, 100),
        SoundExpressionEffect.Vibrato,
        InterpolationCurve.Curve
        ), SoundExpressionPlayMode.UntilDone)
        lastfreq = currfreq
    }
})
let lastfreq = 0
let currfreq = 0
let play = 0
play = 0
