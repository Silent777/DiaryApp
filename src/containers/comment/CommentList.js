import React from 'react';
import Comment from './Comment';
import TextField from 'material-ui/TextField';

const containerStyle = {
    display: 'inline-block',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4)',
    height: 'auto',
    width: '500px',
    margin: '20px',
    textAlign: 'center',
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
        if(e.keyCode===13 && e.ctrlKey) {
            this.props.handlePostComment(1, this.state.value)
        }
      }

    render() {
        const inputField = this.props.isInput ? <TextField
              hintText={'Type comment here'}
              multiLine={true}
              rows={2}
              rowsMax={4}
              style={inputStyle}
              onKeyDown={this.keydownHandler}
              onChange={this.handleChange}

        /> :
            null;
        return (
            <div style={containerStyle}>
            <h1 style={h1Style}>Comments</h1>
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