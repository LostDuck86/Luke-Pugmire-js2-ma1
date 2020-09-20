export function render(renderCards) {
    const resultsContainer = document.querySelector(".results")
    
    resultsContainer.innerHTML = "";

    for (let i = 0; i < renderCards.length; i++) {
        resultsContainer.innerHTML += `<div class="result"><h2>${renderCards[i].name}</h2>
            <p>$${renderCards[i].price}</p>
            </div>`
    }
}