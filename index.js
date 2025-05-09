/**
* Giro QR code generator
*/


//Import libraries for qr code and file generation
const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');


//For input on terminal
const prompt = require('prompt-sync')();


//Get transaction details from users
const iban = prompt('What is the iban? ');
console.log(`Your iban is ${iban}`);


const bic = prompt('What is the bic? ');
console.log(`Your bic is ${bic}`);


const receipient = prompt('What is the name of receipient? ');
console.log(`Your recepient is ${receipient}`);


const currency = prompt('What is the the currency? ');
console.log(`Your currency is ${currency}`);


let amount = prompt("What is the amount to be transacted? ");
console.log(`Your amount is ${amount}`);
amount = amount.toString().replace(",", ".").replace(/(\d+\.\d{2}).*/, "$1").replace(".", ",");


const subject = prompt("What is the subject? ");
console.log(`Your subject is ${subject}`);


const comment = prompt("Is there any comments? ");
console.log(`Your comments are ${comment}`);


//qr code data to be generated
const data = `BCD
01
1
SCT
${bic}
${receipient}
${iban}
${currency}${amount}


${subject}


${comment}
`;


//File output
const tempDir = "./qrcodes"
const fileName = `SEPA_${Date.now()}.png`;
const filePath = path.join(tempDir,fileName);


//Create output directory if it doesn't exist
if (!fs.existsSync(tempDir)) {
 fs.mkdirSync(tempDir, { recursive: true });
}
// Generate and save QR code
QRCode.toFile(filePath, data, (err) => {
 if (err) {
   console.error('QR code generation failed:', err);
 } else {
   console.log(`QR code saved successfully: ${filePath}\n`);
   console.log('GIRO data:');
   console.log(data);
   console.log("Successful!");
 }
});

