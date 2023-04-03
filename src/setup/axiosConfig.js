import axios from "axios";

let apiUrl = 'https://api.uludagenerji.net/web-sitesi/site';
apiUrl = 'http://localhost:8090/web-sitesi/site';

axios.defaults.baseURL = apiUrl;
axios.defaults.timeout = 60000;