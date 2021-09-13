 const Tesseract = require('tesseract.js');
 const fs = require('fs')

 let curent = 67
 let last = 67

 function transform() {
   Tesseract.recognize(
    `./imgs/${curent}.jpg`,
    'ces',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    let logStream = fs.createWriteStream('result.txt', {flags: 'a'});
    logStream.write( '\n\n\n\n\n'  + text + '\n\n\n\n\n NOVA STRANA NOVA STRANA NOVA STRANA NOVA STRANA');
    if(curent !== last + 1) {
      curent++
      transform()
     } 
  })
 }
 transform()
 