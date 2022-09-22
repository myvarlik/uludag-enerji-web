import axios from "axios";

let apiUrl = 'https://api.uludagenerji.net/web-sitesi';
//apiUrl = 'http://localhost:4006/web-sitesi';

axios.defaults.baseURL = apiUrl;
axios.defaults.timeout = 60000;