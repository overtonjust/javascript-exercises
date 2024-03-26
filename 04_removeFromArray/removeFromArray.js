const removeFromArray = function(arr, ...args) {
    let itemsToRemove = [...args];
    itemsToRemove.forEach(item => {
        while(arr.includes(item)) {
            arr.splice(arr.indexOf(item),1)
        }
    })
     return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
