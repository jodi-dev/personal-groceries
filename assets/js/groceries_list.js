// name, price, allergen, bool
var all_items = [
    ['Cashews', '5', 'nuts'],
    ['Milk', '4', 'dairy'],
    ['Pepsi', '2', 'none'],
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

    // $('input[name="product"]').change(function() {
    //     selectedItems();
    // });

    $(document).on("change", 'input[name="product"]', function() {
        // Your code here
        if (this.checked) {
            selectedItems();
        } else {
            chosenProducts = [];
            selectedItems();
        }
    });

    // apply selections
    $('#checkout').click(function() {
        alert("You have checked out!");
        window.location.reload();
    });

    // clear selections
    $("#clear").click(function() {
        //document.getElementById("nuts").checked = false;
        //document.getElementById("dairy").checked = false;
        //document.getElementById("berries").checked = false;
        //minPrice = 0;
        //maxPrice = 100;
        //allergiesChecked = [];
        window.location.reload();
        alert("All selections cleared");
    });
});