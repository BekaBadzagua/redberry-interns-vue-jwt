import axios from "axios";

/*
  The code can be written in much cleaner way, But since this is an app for presentation
  I won't write compleltly clean code so you won't have an option to simply copy/paste it in your project
  this way you'll spend more time reviewing and refactoring the code. and you'll understend better whats going on.
*/

let token = null;
const value = `; ${document.cookie}`;
const parts = value.split(`jwt_token=`);
if (parts.length === 2) {
  token = parts.pop().split(";").shift();
}

console.log("token <-----------------------------");
console.log(token);

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    Authorization: "Bearer " + token,
  },
});

export default axiosInstance;
