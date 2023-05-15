/**
 * Custom Blocks for the MonkMakes Sensor for micro:bit
 */

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Sensor {


    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    /**
     * Measure the sound level as a number between 0 and 100
     * @param pin The pin that the mic is attached to.
     */
    //% block
    export function soundLevel(pin: AnalogPin): number {
        // let n = 1000
        // let max = 0
        // for (let i = 0; i < n; i++) {
        //     let value = Math.round((pins.analogReadPin(pin) - 511) / 5);
        //     if (value > 100) {
        //         value = 100;
        //     }
        //     if (value > max) {
        //         max = value;
        //     }
        // }
        return getRandomInt(0, 600);
    }

    /**
     * Measure the temperature in degrees C
     * @param pin The pin that the temerature sensor is attached to.
     */
    //% block
    export function tempC(pin: AnalogPin): number {
        // let R2 = 100000.0;
        // let R25 = 100000.0;
        // let B = 4275.0;
        // let t0k = 273.15;
        // let t0 = t0k + 25;

        // let reading = pins.analogReadPin(pin);
        // let vout = reading * 3.3 / 1023.0;
        // let r = (R2 * (3.3 - vout)) / vout;
        // let inv_t = 1.0 / t0 + (1.0 / B) * Math.log(r / R25);
        // let t = (1.0 / inv_t) - t0k;
        // return (Math.round(t));
        return getRandomInt(0, 30);
    }

    /**
    * Measure the temperature in degrees F
    * @param pin The pin that the temerature sensor is attached to.
    */
    //% block
    export function tempF(pin: AnalogPin): number {
        // let temp_c = tempC(pin);
        // return (Math.round(temp_c * 9.0 / 5.0) + 32);
        return getRandomInt(0, 90);
    }

    /**
     * Measure the light level as a number between 0 and 100
     * @param pin The pin that the light sensor is attached to.
     */
    //% block
    export function lightLevel(pin: AnalogPin): number {
        // let max_reading = 28;
        // let value = Math.sqrt(pins.analogReadPin(pin)); // to compensate for inverse square indoor lack of sensitivity
        // let light_level = Math.round(pins.map(value, 0, max_reading, 0, 100));
        // if (light_level > 100) {
        //     light_level = 100;
        // }
        // return light_level;
        return getRandomInt(0, 600);
    }

}
