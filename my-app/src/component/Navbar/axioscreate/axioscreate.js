import axios from "axios";

const axioscreate = axios.create({
  baseURL: "https://api.unsplash.com/photos"
      headers:{
        Authorization:'Client-ID UXOobA6ZGMO7pkaqUUqTTi6WYAopL2LgJedHSBIjrbo'
      }
  
});

export default axioscreate;
