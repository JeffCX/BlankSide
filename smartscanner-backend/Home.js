var admin = require('firebase-admin');
const serviceAccount = require('./privateKey.json')
const uuid = require('uuid/v4');
var fs = require('fs');

//database config
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://smart-scanner-38c89.firebaseio.com",
    storageBucket:"smart-scanner-38c89.appspot.com"
  });
  
//data

let img = process.argv[2]
let status = process.argv[3]

const upload = (imgName) =>{
   
    //use realtime database and firebase cloud storage
    var storage = admin.storage().bucket()
    var database = admin.database()

    //upload image 

    var id = uuid()
    var uploadConfig = {
        destination: imgName,
        uploadType: "media",
        metadata: {
          metadata: {
            firebaseStorageDownloadTokens: id
          }
        }
      }
    var url = "https://firebasestorage.googleapis.com/v0/b/smart-scanner-38c89.appspot.com" + "/o/" +img + "?alt=media&token=" + id
    storage.upload(`Home/${img}`,uploadConfig)

    const data = {
        imgPath:url
    }

    //insert data into database 
    database.ref("Home").push(data).then(()=>{
        console.log("good")
    })

    var contents = fs.readFileSync('data.txt', 'utf8');

    database.ref("data").set({
        imgUrl:url,
        status:status,
        texts:contents

    })
    console.log("Done")
}


upload(img)

setTimeout (()=>{
    process.exit(1)
},1000)

















  