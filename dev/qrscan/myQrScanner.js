import QrScanner from './qr-scanner.min.js';
QrScanner.WORKER_PATH = './qr-scanner-worker.min.js';

const videoElem = document.getElementById('preview');
const qrScanner = new QrScanner(videoElem, result => console.log('decoded qr code:', result));
qrScanner.start();
//qrScanner.setGrayscaleWeights(red, green, blue, useIntegerApproximation = true);

function stop() {
    qrScanner.destroy();
    qrScanner = null;
}
