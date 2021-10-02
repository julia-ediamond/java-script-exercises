let shopping_list_items = ["milk", "eggs", "bread"]
let list_element = document.getElementById("shopping-list-items");
shopping_list_items.forEach((item) => {
    console.log(item)
    let item_element = document.createElement("li");
    item_element.innerText = item;
    list_element.appendChild(item_element)
});

function addItem() {

    let item = document.getElementById("new-item-text").value;
    shopping_list_items.push(item);
    console.log(shopping_list_items);
    updateItems()
}

function updateItems() {
    let list_element = document.getElementById("shopping-list-items");
    list_element.innerHTML = "";
    shopping_list_items.forEach((item) => {let item_element = document.createElement("li");
    item_element.innerText = item;
    list_element.appendChild(item_element);
});
}
function clearItems() {
    shopping_list_items.pop()
    updateItems()
}

function clearInput() {
    let inputTextField = document.getElementById('new-item-text')
    inputTextField.removeAttribute('placeholder');
    
}