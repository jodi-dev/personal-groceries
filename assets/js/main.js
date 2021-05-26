$(document).ready(function(){
    let content = '';

    if (allergiesChecked.length == 0) {
        all_items.forEach(p=> {
            content += 
            `
            <div class="card"><img class="card-img-top w-100 d-block">
                <div class="card-body">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="">
                            <label class="form-check-label" for="formCheck-1"></label>
                    </div>
                    <h4 class="card-title">${p[0]}</h4>
                    <p class="card-text">$ ${p[1]}</p>
                </div>
            </div>`
        });
        document.getElementById("shop").innerHTML = content;
    } 
    document.getElementById("min-price").value = minPrice;
    document.getElementById("max-price").value = maxPrice;
});

function updateShop(listProds, ) {
    // updateShop function to replace the rendering of DOM with all_items cards
    
}