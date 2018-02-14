import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

const cardHeaderStyle = {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
};

const cardStyle = {
    boxShadow: 'none'
}
const deleteBtnStyle = {
    cursor: 'pointer',

};

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        };
    }
    handleClick = () => {
        this.props.handleActiveItem(this.props.id)
    }

    handleDelete = () => {
        this.props.handleDelete(this.props.id)
    }

    render() {
        const deleteBtn = <RaisedButton
            label="Delete"
            secondary={true}
            style={deleteBtnStyle}
            onClick={this.handleDelete} />

        return (
            <div>
                <Card style={cardStyle}
                    onClick={this.handleClick}>
                    <CardHeader
                        actAsExpander={true}
                        style={cardHeaderStyle}
                        title={this.props.title}
                        subtitle={this.props.description}
                        children={deleteBtn}
                    />
                    <Divider />
                </Card>
            </div >
        );
    }
}
export default Item;