// HTML Collection and node list are same but difference is the nodelist can perform the array methods 
// htmlcollection can't perform the array methods.

let form = document.querySelector('#addform');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);

function addItem(e) {
    e.preventDefault();

    // input item
    let inputValue=document.getElementById('item').value;

    // create li and delete button

    let li =document.createElement('li');
    li.appendChild(document.createTextNode(inputValue))
    li.className="list-group-item";

    let deleteButton=document.createElement('button');
    deleteButton.className="btn btn-danger btn-sm delete";
    deleteButton.appendChild(document.createTextNode('X'));

    li.appendChild(deleteButton);

    itemList.appendChild(li);
    
    document.getElementById('item').value="";
};

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e){
    let filterText=e.target.value.toLowerCase();

    let items=itemList.children;

    Array.from(items).forEach((item)=>{
        let itemText=item.firstChild.textContent;
        if(itemText.toLowerCase().indexOf(filterText) != -1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    })
}