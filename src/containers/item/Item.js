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
        };
    }

    render() {
        const deleteBtn = <RaisedButton label="Delete" secondary={true} style={deleteBtnStyle} />
        return (
            <div>
                <Card style={cardStyle}>
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