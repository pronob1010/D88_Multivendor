import axios from 'axios';

export const user_data = []

// if (process.browser) {
// let authUrl = null;

// let userId = localStorage.getItem('userId');
// let res;

// console.log("process.browser ", userId);

// if (userId != null) {
    
//     res = fetch("http://localhost:8000/api/auth/"+userId).then(response =>{
//         return response.data.json;
//     });

//     // console.log(authUrl);
//     console.log(res);
//     // user_data.push(res);
// }

// }