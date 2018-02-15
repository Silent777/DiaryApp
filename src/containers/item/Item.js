import React from 'react';
import Chip from 'material-ui/Chip';
import { Card, CardHeader } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

const cardHeaderStyle = {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    height: 'auto',
    wordWrap: 'break-word'
};

const cardStyle = {
    boxShadow: 'none',
}
const deleteBtnStyle = {
    cursor: 'pointer',
};
const chipStyle = {
    display: 'inline',
    marginRight: '20px',
    background: '#00E5FF',

}
const chipTextStyle = {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bold'
}

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments
        };
    }

    handleClick = () => {
        this.props.handleActiveItem(this.props.id)
    }

    handleDelete = () => {
        this.props.handleDelete(this.props.id)
    }

    render() {
        const deleteBtn = <div>
            <Chip style={chipStyle}
                  labelStyle={chipTextStyle}>
                {this.props.comments}
            </Chip>
            <RaisedButton
                label="Delete"
                secondary={true}
                style={deleteBtnStyle}
                onClick={this.handleDelete} />
        </div>

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