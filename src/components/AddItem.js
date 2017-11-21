
import React, { Component } from 'react';
import ItemService from './ItemService';

class AddItem extends Component {

  constructor(props) {
      super(props);
      this.state = {name_item: '',category_item:''};
      this.addItemService = new ItemService();
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
     
    
      this.addItemService.sendData(this.state);
      //this.props.history.push('/');
    }


    render() {
      return (
        <div className="container">
          <h2>Add a new Item: </h2>
          <form onSubmit={this.handleSubmit}>
            <label>
           Name:
              <input type="text" name="name_item" value={this.state.name_item} onChange={this.handleChange} className="form-control"/>
            </label><br/>
            <label>
             Category:
              <input type="text" name="category_item" value={this.state.category_item} onChange={this.handleChange} className="form-control"/>
            </label><br/>
            <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
      </div>
      );
    }
  }

export default AddItem;