const Snap = require('../../');

const snap = new Snap('../SSR/dist/index.html', {
    //publicURL: 'http://localhost',
    clearDir: true
});

(async ()=> {
    console.log('--START--');
    try {
        await snap.exec();
    } catch (e) {
        throw e;
    }
    console.log('--END--');
})();