const functions = require('firebase-functions');
const createTable = require('./pdf.js')
const pdf = require('html-pdf')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.getPdf = functions.https.onRequest((request,response) => {
  try {
    let req = request.body
    functions.logger.info("in getPdf",req)
    console.log(req)
    let html = createTable(req)
    console.log(html)
    var options = { width:'80mm' , border:'5mm', zoomFactor:0.7,header:{height:'60mm',contents:'<div style="text-align:center;"><h1>Tandoor Hut</h1><h3>Near SBI ATM,<br>Godhna Road ARA(Bhojpur)<br>Bihar-802302</h3></div>'}}
    pdf.create(html,options).toStream((err,stream) => {
      if(err)
        return console.log(err)
      response.setHeader('Content-type','application/pdf')
      stream.pipe(response)
    })
  } catch (error) {
    functions.logger.info(error)
    response.status(401).send("Error!")
  }
})


