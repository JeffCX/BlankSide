from PIL import Image
from io import BytesIO
import base64
import cv2
import numpy
from random import randint
from flask import jsonify,request,Flask
from api import ocr_google_api
import os

def get_image(url):
    imgdata = base64.b64decode(str(url))
    image = Image.open(BytesIO(imgdata))
    ImageName = "image" + str(randint(0, 10000)) + ".jpg"
    image.save("Home/" + ImageName, "JPEG")

    img = numpy.asarray(image)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return img,ImageName

#1 lots of text, #0 resuable
def binary_image(img,ImageName,threshold = 0.05):
    img = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, \
                                cv2.THRESH_BINARY, 11, 2)

    #saveImage.show()

    area = img.shape[0] * img.shape[1]
    black = numpy.count_nonzero(img == 0)
    usage = black / area
    if usage > threshold:
        result = 0
    else:
        result = 1
    data = ocr_google_api("Home/" + ImageName)
    if(data!=""):
        f = open("data.txt","w")
        f.write(data)
        f.close()
    else:
        f = open("data.txt", "w")
        f.write("")
        f.close()
    command = "node Home {} {}".format(ImageName, str(result))
    os.system(command)

    return result







#0 is black 255 is white
#1 recycle
#0 usable



app = Flask(__name__)
ip = "10.18.106.228"

@app.route("/classify_image",methods=["POST"])
def index():
    try:
        content = request.json
        print("data" in content)
        if "data" in content:
            url = content["data"]
            img,name = get_image(url)
            result = binary_image(img,name)

            print(result)
            return jsonify({"result": result})
        else:
            return jsonify({"result": "500"})
    except:
        return jsonify({"result": "500"})

app.run(host=ip)