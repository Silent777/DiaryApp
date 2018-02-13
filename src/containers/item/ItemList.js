import React from 'react';
import itemService from './ItemService';
import Item from './Item';

const containerStyle = {
    width: '90%',
    margin: '0 auto',
};

class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentWillMount() {
        this.setState({
            items: itemService()
        });
    }

    render() {
        return (
            <div style={containerStyle}>
                {
                    this.state.items.map(item => (
                        <Item
                            key={item.id.toString()}
                            title={item.title}
                            id={item.id}
                        />)
                    )
                }
            </div>
        );
    }
}
export default ItemList;