import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const cardHeaderStyle = {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
};

const cardStyle = {
    boxShadow: 'none'
}


class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        };
    }

    handleDelete = () => {
        localStorage.removeItem(this.props.id)
    }
    
    render() {
        return (
            <div>
                <Card style={cardStyle}>
                    <CardHeader
                        style={cardHeaderStyle}
                        title={this.props.commentText}
                    />
                    <Divider />
                </Card>
            </div >
        );
    }
}
export default Comment;