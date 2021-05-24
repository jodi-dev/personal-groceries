var all_items = [
    ['Almond milk', '$5', 'nuts'],
    ['Milk', '$4', 'dairy'],
    ['Diet coke', '$2', 'aspartame'],
    ['Strawberries', '$5', 'berries'],
    ['Granola bars', '$6', 'nuts']
]

var allergiesChecked = [];

$(document).ready( function filterProds() {
    // allergies list
    // var nuts = document.getElementsByName("nuts");
    // var dairy = document.getElementsByName("dairy"); 
    // var berries = document.getElementsByName("berries");

    // $("#apply").click(function() {
    //     $.each($("input[name='allergy']:checked"), function() {
    //         if (! allergiesChecked.includes($(this).val())) {
    //             allergiesChecked.push($(this).val());
    //         }
    //     });
    //     alert("my allergies are: " + allergiesChecked.join(","));
    // });
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

    $('#apply').click(function() {
        alert("my allergies are: " + allergiesChecked.join(","));
    });
});

// clear button
$(document).ready( function clearSelections() {
    $("#clear").click(function() {
        document.getElementById("nuts").checked = false;
        document.getElementById("dairy").checked = false;
        document.getElementById("berries").checked = false;
        allergiesChecked = [];
        alert("All selections cleared");
    });
});