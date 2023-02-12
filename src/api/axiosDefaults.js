import axios from "axios";

/*
 * API utility which allows the frontend to access the backend.
 */

axios.defaults.baseURL = "https://taskosaurus-backend.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
