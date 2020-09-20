
import { render } from "./components/renderData.js";
import { searchPrice } from "./components/search.js";

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

async function getUrl() {
    
        try {


            const response = await fetch(url);
            const results = await response.json();
            console.log(results.data);
        
            const jsonData = results.data;

            render(jsonData);
            searchPrice(jsonData);
        } catch (error) {
            console.log(error);
        } 
    }

getUrl();
  
