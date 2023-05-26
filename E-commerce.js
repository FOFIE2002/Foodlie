
//let item_count = 0;
let items = [];
function clickedMe(name){
    
    items.push(name);
     console.log(items);
    const mycartElement = document.getElementById('my-cart');
    //item_count = item_count + 1;
    mycartElement.innerHTML = 'Items on card:' + items.length;

    //console.log(name)

    const cartItemsElement = document.getElementById('cartItems');

    //for(i=0; i < items.length; i++){
        let node = document.createElement('div');
        let content = document.createTextNode(name);

        node.appendChild(content);

        cartItemsElement.appendChild(node);
        
    //}
    //cartItemsElement.innerHTML = items;
    cartItemsElement.style.backgroundColor = 'green';
}