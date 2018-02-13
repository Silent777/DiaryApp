const itemService = () => {
    let items = []
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        items.push(JSON.parse(localStorage.getItem( localStorage.key( i ))));
      }
    return items;
};

export default itemService;