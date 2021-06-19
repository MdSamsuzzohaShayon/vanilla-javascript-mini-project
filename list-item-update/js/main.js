// https://www.youtube.com/watch?v=ZOeWdkq-L90&list=PL55RiY5tL51r1NlkJLzVhui1S480gnuNG&index=2

const countryData = {
    items: ["China", "BD", "USA"],
    addItem(item) {
        this.items.push(item);
    },
    removeItem(index) {
        this.items.splice(index, 1);
    },
    updateItem(index, newItem) {
        this.items[index] = newItem;
    }
};







// CREATING A SIMPLE LIST 
d3.select('ul')
    .selectAll('li')
    .data(countryData.items, data => data)
    .enter()
    .append("li")
    .classed('list-group-item mt-2', true)
    .text(data => data);




// ADDING A NEW ITEM TO THE LIST 
// <span class="badge bg-primary rounded-pill">14</span>
setTimeout(() => {
    countryData.addItem("AUS");
    d3.select('ul')
        .selectAll('li')
        .data(countryData.items, data => data)
        .enter()
        .append("li")
        .classed('list-group-item mt-2 list-group-item-success', true)
        .text(data => data);

}, 1500);


// REMOVING AN ITEM FROM LIST 
setTimeout(() => {
    countryData.removeItem(0);
    d3.select('ul')
        .selectAll('li')
        .data(countryData.items, data => data)
        .exit()
        .classed('list-group-item-danger', true)
    // .remove() 

}, 2000);



// UPDATE AN ITEM
setTimeout(() => {
    countryData.updateItem(1, "UK");
    d3.select('ul')
        .selectAll('li')
        .data(countryData.items, data => data)
        .exit()
        .classed('list-group-item-primary', true)
        // .text(data => data)
        .text("RUS")

}, 2500);