import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Search extends Component{
    onSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username){
            alert('Pleae enter a username')
        }
        this.props.onSubmitForm(username);
        this.refs.username.value = '';
    }
    render(){

        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>GitHub User Name:</label>
                    <input type="text" ref="username" className="form-control"/>
                </form>
            </div>
        )
    }
}

export default Search;