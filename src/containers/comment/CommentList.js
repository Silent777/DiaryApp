import React from 'react';
import Comment from './Comment';
import TextField from 'material-ui/TextField';

const containerStyle = {
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4)',
    height: 'auto',
    width: '500px',
    margin: '20px',
    textAlign: 'center',
};
const inputStyle = {
    width: '90%'
}

class CommentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const inputField = this.props.isInput ? <TextField
            multiLine={true}
            rows={2}
            rowsMax={4}
            style={inputStyle}
        /> :
            null;
        return (
            <div style={containerStyle}>
                {
                    this.props.comments.map(comment => (
                        <Comment
                            key={comment.key}
                            commentText={comment}
                        />)
                    )
                }
                {inputField}
            </div>
        );
    }
}
export default CommentList;