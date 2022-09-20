// Storage Controller


// Item Controller
const ItemCtrl = (function(){
    // Item Constructor
    const Item = function(id, name, carbs){
        this.id = id;
        this.name = name;
        this.carbs = carbs;
    }

    // Data Structure / State
    const data = {
        items: [
            {id: 0, name: 'Steak', carbs: 1},
            {id: 1, name: 'Eggs', carbs: 1},
            {id: 2, name: 'Cheese', carbs: 1}
        ],
        currentItem: null,
        totalCarbs: 0
    }

    //Public methods
    return {
        getItems: function(){
            return data.items;
        },
        logData: function(){
            return data;
        }
    }
})();



// UI Controller
const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn'
    }

    // Public Methods
    return {
        populateItemList: function(items){
            let html = '';

            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.carbs} Carbs</em>
                <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil right"></i>
                </a>
                </li>`;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getSelectors: function(){
            return UISelectors;
        }
    }
    
})();

// App Controller
const App = (function(ItemCtrl, UICtrl){
    // Load event listeners
    const loadEventListeners = function(){
        // Get UI selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEvenListener('click', itemAddSubmit);
    }

    // Add item submit
    const itemAddSubmit = function(e){

        console.log('Add');
        e.preventDefault();
    }

    // Public methods
    return {
        init: function(){

            // Fetches items from data structure
            const items = ItemCtrl.getItems();
            // Populates list with items
            UICtrl.populateItemList(items);

            // Load event listeners
            loadEventListeners();
        }
    }

})(ItemCtrl, UICtrl);


// Initialize App
App.init()

// ENDED ON 104 UDEMY JAVASCRIPT 8min 49sec