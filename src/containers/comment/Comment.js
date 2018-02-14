import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};

const cardStyle = {
    boxShadow: 'none',
    width: '90%',
    margin: '0 auto'
}


class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
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