$(document).ready(function(){
    let content = '';

    if (allergiesChecked.length == 0) {
        all_items.forEach(p=> {
            content += 
            `
            <div class="card"><img class="card-img-top w-100 d-block">
                <div class="card-body">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="product" value=${p[0]}>
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

function updateShop(shop) {
    let filtered = [];
    let v;
    //alert("my allergies are: " + allergiesChecked.join(","));
    for (let i = 0; i<all_items.length; i+=1) {
        v = true;
        for (let j = 0; j<allergiesChecked.length; j+=1) {
            if (all_items[i][2] == allergiesChecked[j]) {
                v = false;
            }
        }
        if (v == true) {
            filtered.push(all_items[i]);
        }
        //filtered.push(all_items[i]);
    }
    //alert("my items are: " + filtered.join(","));
    filtered_items = filtered;
    
    var shop = document.getElementById(shop);	
    shop.innerHTML = "";

	for (let i = 0; i < filtered_items.length; i+= 1) {

		let card = document.createElement('div');
        card.className = 'card';
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        let formCheck = document.createElement('div');
        formCheck.className = 'form-check';
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
		checkBox.name = "product";
		checkBox.value = filtered_items[i][0];
        let cardTitle = document.createElement('h4');
        cardTitle.innerText = filtered_items[i][0];

        formCheck.appendChild(checkBox);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(formCheck);
        card.appendChild(cardBody);
        shop.appendChild(card);
	}
}

function selectedItems(){
	
	let ele = document.getElementsByName("product");
	let chosenProducts = [];
	
	let c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	let para = document.createElement("p");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	//c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}