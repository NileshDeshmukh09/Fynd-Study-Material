import { getToken } from "./auth.js";

if( getToken() === null ) {
    window.location = '/login.html';
}