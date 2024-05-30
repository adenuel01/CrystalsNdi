// Array to hold the items
let items = [];

// Function to add item to the end of the list
function addItemToEnd() {
  const input = document.getElementById('itemInput');
  const item = input.value.trim();

  if (item) {
    items.push(item);
    input.value = '';
    displayItems();
  }
}

// Function to add item to the beginning of the list
function addItemToStart() {
  const input = document.getElementById('itemInput');
  const item = input.value.trim();

  if (item) {
    items.unshift(item);
    input.value = '';
    displayItems();
  }
}

// Function to remove item from the end of the list
function removeItemFromEnd() {
  if (items.length > 0) {
    items.pop();
    displayItems();
  }
}

// Function to remove item from the beginning of the list
function removeItemFromStart() {
  if (items.length > 0) {
    items.shift();
    displayItems();
  }
}
 





// Function to display the items
function displayItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
  });
}
