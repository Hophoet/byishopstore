import {db} from './firebase';

const playStoreURL = 'https://play.google.com/store/apps/details?id=com.byi';

function subscribe(email){
    return new Promise( (resolve, reject) => {
        db.collection('emails')
        .add({
            email:email
        })
        .then(() => {
            resolve('done');
        })
        .catch(error => {
            reject(error);
        })
    })


    
}

export {
    subscribe,
    playStoreURL
}
