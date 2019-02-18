import QrScanner from './qr-scanner.min.js';
QrScanner.WORKER_PATH = './qr-scanner-worker.min.js';

const videoElem = document.getElementById('preview');
const qrScanner = new QrScanner(videoElem, result => console.log('decoded qr code:', result));
QrScanner.scanImage(image)
    .then(result => console.log(result))
    .catch(error => console.log(error || 'No QR code found.'));
qrScanner.setGrayscaleWeights(red, green, blue, useIntegerApproximation = true);
qrScanner.destroy();
qrScanner = null;