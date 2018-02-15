import React from 'react';
import ItemList from './ItemList';
import CommentList from '../comment/CommentList'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {itemService, getComments, postComment} from './ItemService';

const itemContainerStyle = {
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4)',
    height: 'auto',
    width: '500px',
    margin: '20px',
    textAlign: 'center',
}

const inputStyle = {
    width: '438px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
}

const headerStyle = {
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    color: '#666',
    textAlign: 'left',
    padding: '20px 20px'
}

const addbtnStyle = {
    boxShadow: 'none',
}
const itemListStyle = {
    paddingBottom: '20px',
}

const greedStyle = {
    display: 'flex'
}
const btnStyle = {
    background: '#00E5FF'
}

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            counter: localStorage.length,
            items: [],
            comments: [],
            isInput: false,
            itemId: null
        };
    }
    componentWillMount() {
        this.setState({
            items: itemService(),
        });
    }

    handlePostComment = (id, text) => {
        postComment(id, text)
        this.setState({
            comments: getComments(id)
        })
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue,
        });
    }
    handleDelete = (id) => {
        localStorage.removeItem(id)
        this.setState({
            items: itemService(),
            isInput: false
        })
    }
    refresh = () => {
        this.setState({
            items: itemService(),
        })
    }

    handleClick = () => {
        let items = {
            id: this.state.counter,
            title: this.state.value,
            comments: []
        }
        let itemsString = JSON.stringify(items)
        localStorage.setItem(this.state.counter, itemsString)
        this.setState({
            counter: this.state.counter + 1,
            items: itemService(),
            value: ''
        })
    }
    handleActiveItem = (id) => {
        this.setState({
            comments: getComments(id),
            isInput: true,
            itemId: id
        })
    }
    render() {
        const comments = <CommentList comments={this.state.comments}
                                      isInput={this.state.isInput}
                                      handlePostComment={this.handlePostComment}
                                      itemId={this.state.itemId}
                                      refreshCommentCounter={this.refresh}/>
        return (
            <div style={greedStyle}>
                <div style={itemContainerStyle} >
                    <h1 style={headerStyle}>Items</h1>
                    <div style={inputStyle}>
                        <TextField
                            hintText="Type name here..."
                            onChange={this.handleChange}
                            value={this.state.value} />
                        <RaisedButton
                            label="Add new"
                            primary={true}
                            style={addbtnStyle}
                            onClick={this.handleClick}
                            buttonStyle={btnStyle}
                        />
                    </div>
                    <ItemList style={itemListStyle} 
                              items={this.state.items}
                              handleDelete={this.handleDelete}
                              handleActiveItem={this.handleActiveItem}
                              comments={this.state.comments} />
                </div>
                {comments}
            </div>
        );
    }
}
export default ItemContainer;