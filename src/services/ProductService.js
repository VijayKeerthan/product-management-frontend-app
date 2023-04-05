import axios from "axios";

const BASE_API = "http://localhost:9000/api/products" ;

class ProductService{

   getProducts(){
    return axios.get(BASE_API + "/all")
;

   }


   insertProduct(product){
      return axios.post(BASE_API + "/insert" , product)
  ;
  
     }

     getProductsById(id){

      return axios.get(BASE_API + "/find/" + id)
     }

}

 export default new ProductService();