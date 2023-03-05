import axios from "axios";

const BASE_API = "http://localhost:9000/api/products" ;

class ProductService{

   getProducts(){
    return axios.get(BASE_API + "/all")
;

   }


}

 export default new ProductService();