#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include <RTClib.h>
#include <Stepper.h>

#define MOTION_SENSOR_PIN 2
#define RANGE_TRIGGER_PIN 3
#define RANGE_ECHO_PIN 4
#define STEPPER_STEP_PIN 14
#define STEPPER_DIR_PIN 15
#define LED_RED_PIN 18
#define LED_GREEN_PIN 21
#define LED_BLUE_PIN 22
#define CLOCK_SCL_PIN 19
#define CLOCK_SDA_PIN 20


#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);
RTC_DS1307 rtc;
Stepper stepper(2048, STEPPER_STEP_PIN, STEPPER_DIR_PIN);

void setup() {
  Serial.begin(115200);


  Serial.println(F("Initializing OLED display..."));
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("SSD1306 allocation failed"));
    for(;;);
  }
  display.display();
  delay(2000);
  display.clearDisplay();

  // Initialize RTC
  Serial.println(F("Initializing RTC..."));
  if (!rtc.begin()) {
    Serial.println("Couldn't find RTC");
    while (1);
  }

  if (!rtc.isrunning()) {
    Serial.println("RTC is NOT running!");
    rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
  }

  pinMode(MOTION_SENSOR_PIN, INPUT);
  pinMode(RANGE_TRIGGER_PIN, OUTPUT);
  pinMode(RANGE_ECHO_PIN, INPUT);
  pinMode(LED_RED_PIN, OUTPUT);
  pinMode(LED_GREEN_PIN, OUTPUT);
  pinMode(LED_BLUE_PIN, OUTPUT);

  stepper.setSpeed(10); 

  Serial.println(F("Setup complete."));
}

void loop() {
  // Check motion sensor
  bool motionDetected = digitalRead(MOTION_SENSOR_PIN);
  Serial.print(F("Motion detected: "));
  Serial.println(motionDetected ? "Yes" : "No");

 long duration, distance;
  digitalWrite(RANGE_TRIGGER_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(RANGE_TRIGGER_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(RANGE_TRIGGER_PIN, LOW);
  duration = pulseIn(RANGE_ECHO_PIN, HIGH);
  distance = (duration / 2) / 29.1;
  Serial.print(F("Distance: "));
  Serial.print(distance);
  Serial.println(F(" cm"));

  bool intruder = motionDetected || (distance < 100); 
  Serial.print(F("Intruder detected: "));
  Serial.println(intruder ? "Yes" : "No");


  digitalWrite(LED_RED_PIN, intruder ? HIGH : LOW);
  digitalWrite(LED_GREEN_PIN, intruder ? LOW : HIGH); 


  DateTime now = rtc.now();
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 0);
  display.print("Time: ");
  display.print(now.hour());
  display.print(":");
  display.print(now.minute());
  display.setCursor(0, 10);
  display.print("Intruder: ");
  display.print(intruder ? "Yes" : "No");
  display.setCursor(0, 20);
  display.print("Distance: ");
  display.print(distance);
  display.print(" cm");

  stepper.step(1);
  Serial.println(F("Stepper motor moved one step."));

  delay(5000); 
