// $(document).ready(function(){
//     let content = '';

//     if (allergiesChecked.length == 0) {
//         all_items.forEach(p=> {
//             content += 
//             `
//             <div class="card"><img class="card-img-top w-100 d-block">
//                 <div class="card-body">
//                     <div class="form-check">
//                         <input class="form-check-input" type="checkbox" id="">
//                             <label class="form-check-label" for="formCheck-1"></label>
//                     </div>
//                     <h4 class="card-title">${p[0]}</h4>
//                     <p class="card-text">$ ${p[1]}</p>
//                 </div>
//             </div>`
//         });
//         document.getElementById("shop").innerHTML = content;
//     } 
//     document.getElementById("min-price").value = minPrice;
//     document.getElementById("max-price").value = maxPrice;
// });

function updateShop(shop) {
    alert("!");
    var shop = document.getElementById(shop);	
    shop.innerHTML = "";

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (let i = 0; i < filtered_items.length; i+= 1) {
        alert(filtered_items[i][0]);
			
		let card = document.createElement('div');
        card.className = 'card';
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        let cardTitle = document.createElement('h4');
        cardTitle.innerText = filtered_items[i][0];
        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        shop.appendChild(card);
	}
}