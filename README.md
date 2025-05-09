# Giro QR Code Generator

This Node.js script generates a **SEPA-compatible Giro QR code** (BCD format) based on terminal input. The resulting QR code can be scanned by European banking apps to auto-fill a bank transfer form with IBAN, BIC, recipient name, amount, subject, and comment.

---

## Features

- Command-line prompts to enter transaction details
- Generates QR code in **German Giro format (BCD standard)**
- Saves the QR code as a PNG image to the `qrcodes/` folder
- Automatically creates the output folder if it doesn't exist

---

## Setup

### 1. Clone the repository or copy the script
git clone https://github.com/Jasonzhou97/giro-qrcode.git

### 2. Install dependencies 
npm install qrcode prompt-sync

### 3. Run the script
node index.js
