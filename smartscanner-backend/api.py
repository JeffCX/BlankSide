import io
from google.cloud import vision
from google.cloud.vision import types

def ocr_google_api(imgPath):
    client = vision.ImageAnnotatorClient()
    # The name of the image file to annotate
    # Loads the image into memory
    with io.open(imgPath, 'rb') as image_file:
        content = image_file.read()
    image = types.Image(content=content)
    # Performs label detection on the image fil
    resp = client.text_detection(image=image)
    data = (' '.join([d.description for d in resp.text_annotations]))
    return data

#ocr_google_api("test.jpg")