
import axios from 'axios';

// host
const HOST ='http://byiapi.herokuapp.com';
const LOCAL_HOST = 'http://127.0.0.1:8000';

const CONFIRM_PASSWORD_RESET_URL = `${LOCAL_HOST}/rest-auth/password/reset/confirm/`;

function confirmPasswordReset(password, token, uid){
	return new Promise( (resolve, reject) => {
		let data = {
			new_password1:password,
			new_password2:password,
			token:token,
            uid:uid
		}
		axios.post(
			CONFIRM_PASSWORD_RESET_URL,
			data
		)
		.then((response) => {
			resolve(response);
		})
		.catch((error) => {
			reject(error);
		})

	})
}



export {
    confirmPasswordReset,
}
