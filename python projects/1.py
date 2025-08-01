import turtle
import colorsys

#setup screen 
screen = turtle.Screen()
screen.bgcolor("black")

#Create turtle
pen = turtle.Turtle()
pen.speed(0)
pen.width(2)
pen.hideturtle()

#Flower parameters 
h = 0 #hue  value
n = 36 # number of petals 

for i in range(360):
    c =colorsys.hsv_to_rgb(h, 1, 1)
    pen.color(c)
    h += 1/n 
    pen.forward(i * 3 / n + i)
    pen.left(59)
    pen.forward(i * 3 / n + i)
    pen.left(60)
    

turtle.done()    
    
