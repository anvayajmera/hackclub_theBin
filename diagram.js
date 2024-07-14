{
  "version": 1,
  "author": "The Bin - Hack Club",
  "editor": "wokwi",
  "parts": [
    { "type": "board-pi-pico-w", "id": "pico", "top": 0, "left": 0, "attrs": {} },
    { "type": "board-ssd1306", "id": "board-ssd1306-0", "top": 0, "left": 118, "attrs": {} },
    {
      "type": "wokwi-pir-motion-sensor",
      "id": "wokwi-pir-motion-sensor-0",
      "top": 215,
      "left": 0,
      "attrs": {}
    },
    { "type": "wokwi-hc-sr04", "id": "wokwi-hc-sr04-0", "top": 215, "left": 119, "attrs": {} },
    {
      "type": "wokwi-rgb-led",
      "id": "wokwi-rgb-led-0",
      "top": 407.2,
      "left": -142.9,
      "attrs": {}
    },
    { "type": "wokwi-ds1307", "id": "wokwi-ds1307-0", "top": 426.6, "left": 57.7, "attrs": {} },
    {
      "type": "wokwi-stepper-motor",
      "id": "wokwi-stepper-motor-0",
      "top": 645,
      "left": 0,
      "attrs": {}
    },
    { "type": "wokwi-a4988", "id": "wokwi-a4988-1", "top": 860, "left": 0, "attrs": {} }
  ],
  "connections": [
    [ "pico:GP0", "$serialMonitor:RX", "", [] ],
    [ "pico:GP1", "$serialMonitor:TX", "", [] ],
    [ "pico:GP2", "wokwi-pir-motion-sensor-0:out", "green", [] ],
    [ "pico:GP3", "wokwi-hc-sr04-0:trig", "blue", [] ],
    [ "pico:GP4", "wokwi-hc-sr04-0:echo", "blue", [] ],
    [ "pico:GP14", "wokwi-a4988-1:STEP", "yellow", [] ],
    [ "pico:GP15", "wokwi-a4988-1:DIR", "yellow", [] ],
    [ "pico:GP18", "wokwi-rgb-led-0:anode", "red", [] ],
    [ "pico:GP19", "wokwi-ds1307-0:SCL", "orange", [] ],
    [ "pico:GP20", "wokwi-ds1307-0:SDA", "orange", [] ],
    [ "pico:GND", "wokwi-pir-motion-sensor-0:GND", "black", [] ],
    [ "pico:3V3", "wokwi-pir-motion-sensor-0:VCC", "red", [] ],
    [ "pico:GND", "wokwi-hc-sr04-0:GND", "black", [] ],
    [ "pico:3V3", "wokwi-hc-sr04-0:VCC", "red", [] ],
    [ "pico:GND", "wokwi-rgb-led-0:cat", "black", [] ],
    [ "pico:3V3", "wokwi-rgb-led-0:anode", "red", [] ],
    [ "pico:GND", "wokwi-ds1307-0:GND", "black", [] ],
    [ "pico:3V3", "wokwi-ds1307-0:VCC", "red", [] ],
    [ "pico:GND", "wokwi-a4988-1:GND", "black", [] ],
    [ "pico:3V3", "wokwi-a4988-1:VDD", "red", [] ],
    [ "pico:GND", "wokwi-stepper-motor-0:GND", "black", [] ],
    [ "pico:3V3", "wokwi-stepper-motor-0:VCC", "red", [] ],
    [ "pico:GND", "board-ssd1306-0:GND", "black", [] ],
    [ "pico:3V3", "board-ssd1306-0:VCC", "red", [] ],
    [ "pico:GP21", "board-ssd1306-0:SCL", "purple", [] ],
    [ "pico:GP22", "board-ssd1306-0:SDA", "purple", [] ]
  ],
  "dependencies": {}
}
