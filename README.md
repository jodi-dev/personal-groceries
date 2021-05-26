# personal-groceries
SEG3125 Lab 2.

## Criteria

- Tailor JS website to personas
- The name of the grocery store (this is not present in the code provided)
- At least 10 possible products in the product list (I have provided 3) described in terms of features appropriate to the user’s needs (containing lactose, containing nuts).
- Navigation between three zones (personal data, products, cart)
- A personal data entry area
    - A user must be able to filter between lactose-intolerant and/or nut allergies
    - Each user can indicate a preference for organic products or not. (This is not taken into account in the code provided, so it is to be added in the options, and also to add a characteristic for this purpose in the list of products).
- An area for choosing items
    - Items should have their price indicated. (to add to the code provided)
    - Items should be in price order. (to add to the code provided)
- An area giving the basket view
    - the contents of the basket and its total
- Your signature (Website designed by ...) at the bottom of the page.
- The use of external CSS (separate file) to define styles for titles, divisions, and your signature at the bottom of the site. Explore font, color, alignment, etc. changes to make the site look a little nicer. Although, for this particular lab, your evaluation will be on functionality, so don't waste too much time here if you're just starting out in JavaScript.
- The use of JavaScript (separate files) to contain the script associated with the site.


## Motivation

I will be using Bootstrap Studio to design a basic layout. Bootstrap 4 components will be used to expediate the frontend implementation. I will also be using JavaScript blended with JQuery elements because I got too ambitious in my concepts and started planning for complicated functionalities, hence it would take too long at my level to be writing only JavaScript.

Alterations in design compared to the Prof's template to improve application functionality:

1. Allergies selectable by checkboxes as opposed to single select as an individual may have multiple allergies; this is an improvement in design as the functionality of the application is better suited to user needs
1. Product selection in cards and laid out on screen at all times as opposed to being in a tab, tabs however are moved to the right hand side as a component on the page to allow the users to look at available products and modify their selection at all times

## References

Some sizeable code chunks taken from:

- [Bootstrap Cards loop](https://stackoverflow.com/questions/63074270/create-a-loop-of-bootstrap-4-card-with-given-array)
- [Restricting Card-deck sizing](https://stackoverflow.com/questions/38895106/how-to-limit-number-of-columns-of-card-deck)
- [Update DOM cards](https://stackoverflow.com/questions/54868328/html-how-to-automatically-create-bootstrap-cards-from-a-js-file)