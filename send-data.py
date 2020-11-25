import RPi.GPIO as GPIO
import requests
import time
from mfrc522 import SimpleMFRC522

btn_in = 17
buzzer = 23
green_led = 21
yellow_led = 20
red_led = 16

GPIO.setmode(GPIO.BCM)
GPIO.setup(btn_in, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

reader = SimpleMFRC522()

def buzz_setup():
  GPIO.setup(buzzer, GPIO.OUT)

def buzz_and_led(color, duration):
  GPIO.cleanup()
  GPIO.setmode(GPIO.BCM)
  GPIO.setup(color, GPIO.OUT)
  buzz_setup()
  GPIO.output(buzzer, GPIO.HIGH)
  GPIO.output(color, GPIO.HIGH)
  time.sleep(duration)
  GPIO.output(color, GPIO.LOW)
  GPIO.output(buzzer, GPIO.LOW)
  time.sleep(duration)

try:
  while True:
    print("Dekatkan kartu RFID anda ke reader! ")
    id, text = reader.read_no_block()
    if id == None:
      print('kartu rfid anda belum menempel')
    else:
      print(id, text)
      another_link = f"http://192.168.1.20:3001/api/kartu?nokartu={id}"
      result = requests.put(another_link)
      buzz_and_led(green_led, 0.5)
      GPIO.setmode(GPIO.BCM)
      GPIO.setup(btn_in, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
    time.sleep(0.5)
except KeyboardInterrupt:
  GPIO.cleanup()
finally:
  GPIO.cleanup()
