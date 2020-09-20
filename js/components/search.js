import { render } from "./renderData.js";


export function searchPrice(priceData) {
    const search = document.querySelector(".filter");

    search.onkeyup = function (event) {
        console.log(event);

        const searchValue = event.target.value;

        const searchFilter = priceData.filter(function(priceData) {
            if (priceData.price.startsWith(searchValue)) {
                return true;
            }
        });

        render(searchFilter);
    }
    
}
        