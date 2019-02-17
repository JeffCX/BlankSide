## Inspiration
According to the “contribution of National Economy of waste paper recycling”, humankind produce 1.15 trillion kg of waste per year, and recycling one ton of page save 38.8 tons of waster! 

What these numbers are not stinging enough to raise environmental awareness? Throwing away useful. Paper is also resource wasting! 

People are not good at classifying trashes! A hard-to-tell number of white and useable paper is thrown away as trash and a hard-to-tell number of paper that contains sensitive information is treated like trash.  I once accidentally throw away papers that have my SSN and passport numbers and found that paper on the street and throw away study materials that I found useable, or reusable paper just because they are in pile of. Wasted paper! 

So we want to build a system to avoid recycle useable paper to let the paper recycled efficiently, to recycle the need-to-be-recycled paper rightly and inform users if they unconsciously throw away valuable information. 

## What it does
The system is capable of recognizing information from the paper and classify recycle paper material into different category. It could also be extended as an AI scanner to recognize classified document and sending documents to paper shredding machine. It could be used prevalent in government and commercial giants for not only energy saving and environment protection but also information security.

# to run the program
### dashboard web application
create a firebase page and copy configuration file to db.js
https://firebase.google.com/

make sure nodejs is installed
https://nodejs.org/en/

run the following command

```
cd smartscanner-web
npm start
```

# to run the program
### flask backend API 
python version: 3.7

run the following command
make sure your acquire an local IP
open python index.py and change variable  IP  to local IP
to use google cloud vision API to OCR service, set up the project
https://cloud.google.com/vision/docs/quickstart

```
cd smartscanner-backend
pip install -r requirements.txt
export GOOGLE_APPLICATION_CREDENTIALS=[keyJsonPath]
export FLASK_APP=hello.py
python index.py
```

Then take a image using ios app and check the dashboard to see the extracted texts and the classified result!

### mobile app scanner
!!!! camera do not work on ios simulator !!!!
!!!! current camera scanner only support IOS !!!!

to compile the app on an ios phone,
open smartscanner-mobile / ios
open Xcode smartscanner.xcodeproj
make sure the project is signed
click build



## How I built it
We use react-native to implement a mobile scanner and use flask to build an Api to classify images and call google cloud machine learning Api to extract texts.

We use  google cloud firebase storage to store images as a backp. We use ReactJs and material UI to build a dashboard web application to inspect and view the images.

We use lego robots, AI robots to build our mechanical engineered robot vehicle. The robot is designed using physical mechanics and aerial dynamics, with a combination of color sensors, motors, touch sensors and ultrasound sensors. The idea of this robot coms from NASA Mars Rover “Opportunities”, using over twelve tires for driving and three motors for power supply. 

We design the robot using black, blue and gray. Dark colors could serve a better combination with the background within the box, making sure paper photos are more accurate.  The box is decorated using recycled paper box with light yellow and green color. The design for animal duck as the whole machine comes from Greenpeace Organization, a non-profit animal and environment protection organizations, which states in December 2018 that duck has become m ore and more popular within younger generation. We think that putting this AI scanner within the office environment with duck shape and bright color could deliver a more comfortable and slow-paced atmosphere to workers.

## Challenges I ran into
One of the challenge is that our software, escpially the camera needs to integrate. With the hardware system and capture. Image  that in good lighting condition. to solve this challenge, we use React-native-image-picker because it convert images to base64 data  and turn on the. Flashlight conveniently.

The challenge in hardware mainly lies in our mechanical design. The weight of our whole robot itself. is just over 3kg, but with our paper and software sensors, the weight exceeds 6kg. This requires strong and stable physical structure. To solve the problem, we use five motor rollers and two extra motors just for dispatch of supply forces. Six stabilizers are applied for robot's smooth movement on the road.

One of the major issues we met and solved is how to input and output papers once at a time, similar to printer. After thinking about the detailed design of commercial printer, we came to the idea of applying a pulley over the paper. It used Arduino for better precision because the force of pulley is extremely crucial as it should be just enough to get one paper moving but not be too heavy to move papers below the deck.

## Accomplishments that I'm proud of
Implement an end-to-end pipeline from image capturing, image classification and image visualization using what I learned and what I taught myself in the past two years.

Sophisticated mechanical structure that uses least materials for most force supply. Formula calculations to understand the maximum supply force of each robotic parts and motors. Calculation and induction used for best stable structure we could think of.

Implement pulleys to remove paper once at a time. The precision of Arduino pulley allows a more like printer paper input and output.

## What I learned
Skills and technologies:
Google Cloud Vision ML API, react-native, Photoshop, Legos, Robotic architecture design, Pulley applications, Arduino

Some thoughts:
Diverse team is key to success. We have a great team with Computer Science, Computer Engineering, Mechanical Engineering, Game Design, Interactive Arts, Business Management and Film/TV majors and minors. This allows a more general design of our product with people who are capable to provide deep knowledge about one specific area and people who have other industry ideas.

Environment and animal protection is key to human beings. Our product bring awareness of the limitation of Earth resources, as well as the protection of other species.  Through planning and background search, we are more worried about the waste of resources in not only United States but also other developed countries. Needs are always more than supply. To ensure a longer existence of human beings, it is inevitable to meet the problem of unbalanced supply-demand chain. We are happy that we did something that is meaningful not only to us but also to people around us.

Segmentation is key to project. We develop our groups into four segments, Hardware Design, Software Design, Decoration Design, Key Software Programming. Tasks could be more effectively distributed to each team member, and communication within different groups is conducted by our team manager. Detailed concentration of tasks allow a more comfortable and efficient working progress, leading to a easier but better solution.

## What's next for BlankSide
1. The next steps are fully automated the pipeline from paper delivery, image capturing and image classification. Such a system demand knowledge from the embedded system, robotic and software engineering in a cross-discipline fashion.

2. Implement the algorithm or use API to classify colorful papers and paper in different lighting conditions to maximize the reduce the cost of wasting paper. 

3. Better robotic structure if it is within commercial or government uses that require more paper input. Our structure is already stable as best as we could, but using Lego robot parts have limitations. Real industry robot parts are suggested shall the product is applied in industry environments.

4. Combination of other technologies to satisfy special needs from our clients. From home to offices, our product could be easily applied in any circumstances. Nevertheless, for extended uses such as classification information recognition or more precise two-sided paper detection, different software programming and hardware design might be required..

5. Bring awareness of saving our only planet. We hope through spreading this machine, people could be more aware of endangered species and limited resources. This is indeed our first inspiration and our ultimate goal of this project. This is what we believe the message that HackNYU is trying to deliver.