from PIL import Image


img = Image.open("static\img\icon-django.png")
img = img.resize((40, 40), Image.ANTIALIAS)
img.save("static\img\icon-django.png")