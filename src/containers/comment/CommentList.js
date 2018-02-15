import React from 'react';
import Comment from './Comment';
import TextField from 'material-ui/TextField';


const containerStyle = {
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4)',
    height: '400px',
    width: '500px',
    margin: '20px',
    textAlign: 'center',
    position: 'fixed',
    top: '8px',
    left: '550px',
    overflow: 'auto'

};
const inputStyle = {
    width: '90%'
}
const h1Style = {
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    color: '#666',
    textAlign: 'left',
    padding: '20px 20px'
}

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue,
        });
    }
        

    keydownHandler = (e) => {
        if (e.keyCode === 13 && e.ctrlKey) {
            if(this.state.value.trim()) {
                this.props.handlePostComment(this.props.itemId, this.state.value)
            }
            this.setState({
                value: '',
            })
            this.props.refreshCommentCounter()
        }
    }

    render() {
        const inputField = this.props.isInput ? <TextField
            hintText={'Press ctrl+Enter'}
            multiLine={true}
            rows={2}
            rowsMax={4}
            style={inputStyle}
            onKeyDown={this.keydownHandler}
            onChange={this.handleChange}
            value={this.state.value}

        /> :
            null;
        return (
            <div style={containerStyle}>
                <h1 style={h1Style}>Comments</h1>
                {inputField}
                {
                    this.props.comments.map(comment => (
                        <Comment
                            key={comment.key}
                            commentText={comment}
                        />)
                    )
                }
            </div>
        );
    }
}
export default CommentList;