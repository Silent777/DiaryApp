const itemService = () => {
    let items = []
    for (let i = 0, len = localStorage.length; i < len; ++i) {
        items.push(JSON.parse(localStorage.getItem(localStorage.key( i ))));
      }
    return items;
};

const getComments = (itemId) => {
    let itemObject = JSON.parse(localStorage.getItem(itemId))
    return itemObject? itemObject['comments']:[]
}

const postComment = (itemId, commentText) => {
    let itemObject = JSON.parse(localStorage.getItem(itemId))
    if (itemObject) {
    JSON.stringify(itemObject['comments'].push(commentText))
    localStorage.setItem(itemId, JSON.stringify(itemObject))
    }
}

export {itemService, getComments, postComment}; 
