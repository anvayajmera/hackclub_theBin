{
  "version": 1,
  "author": "The Bin - Hack Club",
  "editor": "wokwi",
  "parts": [
    { "type": "board-pi-pico-w", "id": "pico", "top": -3.25, "left": 3.55, "attrs": {} },
    { "type": "wokwi-hc-sr04", "id": "wokwi-hc-sr04-0", "top": 20.7, "left": 207.1, "attrs": {} },
    {
      "type": "board-ssd1306",
      "id": "board-ssd1306-0",
      "top": 41.54,
      "left": 441.83,
      "attrs": {}
    },
    {
      "type": "wokwi-stepper-motor",
      "id": "wokwi-stepper-motor-0",
      "top": 148.51,
      "left": 183.28,
      "attrs": {}
    },
    { "type": "wokwi-a4988", "id": "wokwi-a4988-1", "top": 254.4, "left": 417.6, "attrs": {} },
    { "type": "wokwi-buzzer", "id": "wokwi-buzzer-0", "top": 271.2, "left": 97.8, "attrs": {} },
    { "type": "wokwi-rgb-led", "id": "wokwi-rgb-led-0", "top": 52, "left": 116.3, "attrs": {} },
    {
      "type": "wokwi-pir-motion-sensor",
      "id": "wokwi-pir-motion-sensor-0",
      "top": 272.8,
      "left": -26.58,
      "attrs": {}
    },
    { "type": "wokwi-ds1307", "id": "wokwi-ds1307-0", "top": 61.8, "left": -143.9, "attrs": {} }
  ],
  "connections": [
    [ "pico:GP2", "wokwi-hc-sr04-0:TRIG" ],
    [ "pico:GP3", "wokwi-hc-sr04-0:ECHO" ],
    [ "pico:GP4", "wokwi-pir-motion-sensor-0:OUT" ],
    [ "pico:GP4", "wokwi-buzzer-0:SIG" ],
    [ "pico:GP6", "wokwi-rgb-led-0:R" ],
    [ "pico:GP7", "wokwi-rgb-led-0:G" ],
    [ "pico:GP8", "wokwi-rgb-led-0:B" ],
    [ "pico:GP9", "wokwi-stepper-motor-0:DIR" ],
    [ "pico:GP10", "wokwi-stepper-motor-0:STEP" ],
    [ "pico:GP11", "wokwi-a4988-1:DIR" ],
    [ "pico:GP12", "wokwi-a4988-1:STEP" ],
    [ "pico:GP13", "wokwi-ds1307-0:SCL" ],
    [ "pico:GP14", "wokwi-ds1307-0:SDA" ],
    [ "pico:GP15", "board-ssd1306-0:SCL" ],
    [ "pico:GP16", "board-ssd1306-0:SDA" ],
    [ "wokwi-pir-motion-sensor-0:OUT", "pico:GP5" ],
    [ "pico:GP5", "wokwi-buzzer-0:SIG" ]
  ],
  "dependencies": {}
}
