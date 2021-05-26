// name, price, allergen, bool
var all_items = [
    ['Almond milk', '5', 'nuts'],
    ['Milk', '4', 'dairy'],
    ['Diet coke', '2', 'none'],
    ['Strawberries', '5', 'berries'],
    ['Granola bars', '6', 'nuts'],
    ['Blueberries', '4', 'berries'],
    ['Bread', '2', 'gluten'],
    ['Cereal', '5', 'gluten'],
    ['Cheese', '7', 'dairy'],
    ['Beef', '12', 'none']
]

var filtered_items;

var minPrice = 0;
var maxPrice = 100;

var allergiesChecked = [];

$(document).ready( function filterProds() {
    // document change listeners

    $('#nuts').change(function() {
        if(this.checked) {
            //alert('nuts allergy');
            if (! allergiesChecked.includes($(this).val())) {
                allergiesChecked.push($(this).val());
            }
        } else {
            //alert('remove nut allergy');
            if (allergiesChecked.includes($(this).val())) {
                var index = allergiesChecked.indexOf($(this).val());
                if (index >= 0) {
                    allergiesChecked.splice( index, 1);
                }
            }
        }
    });
    $('#dairy').change(function() {
        if(this.checked) {
            //alert('dairy allergy');
            if (! allergiesChecked.includes($(this).val())) {
                allergiesChecked.push($(this).val());
            }
        } else {
            //alert('remove dairy allergy');
            if (allergiesChecked.includes($(this).val())) {
                var index = allergiesChecked.indexOf($(this).val());
                if (index >= 0) {
                    allergiesChecked.splice( index, 1);
                }
            }
        }
    });
    $('#berries').change(function() {
        if(this.checked) {
            //alert('berries allergy');
            if (! allergiesChecked.includes($(this).val())) {
                allergiesChecked.push($(this).val());
            }
        } else {
            //alert('remove berries allergy');
            if (allergiesChecked.includes($(this).val())) {
                var index = allergiesChecked.indexOf($(this).val());
                if (index >= 0) {
                    allergiesChecked.splice( index, 1);
                }
            }
        }
    });

    // min price update
    $('#min-price').change(function() {
        minPrice = $(this).val();
    });

    // max price update
    $('#max-price').change(function() {
        maxPrice = $(this).val();
    });

    // apply selections
    $('#apply').click(function() {
        let filtered = [];
        let v;
        alert("my allergies are: " + allergiesChecked.join(","));
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
        alert("my items are: " + filtered.join(","));
        filtered_items = filtered;
    });

    // clear selections
    $("#clear").click(function() {
        document.getElementById("nuts").checked = false;
        document.getElementById("dairy").checked = false;
        document.getElementById("berries").checked = false;
        minPrice = 0;
        maxPrice = 100;
        allergiesChecked = [];
        alert("All selections cleared");
    });
});