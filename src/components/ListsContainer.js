import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import NewListForm from './NewListForm';

class ListsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      lists: []
    }
    this.addNewList = this.addNewList.bind(this)
  }
  componentDidMount() {
    axios.get('api/v1/lists')
    .then(response => {
      console.log(response)
      this.setState({
        lists: response.data
      })
    })
    .catch(error => console.log(error))
  }

  addNewList(name, description) {
    axios.post( '/api/v1/lists', { list: {name, description} })
    .then(response => {
      console.log(response)
      const lists = [ ...this.state.lists, response.data ]
      this.setState({lists})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="lists-container">
        {this.state.lists.map( (list, index) => {
          return (<List list={list} key={index} />)
        })}
        <NewListForm onNewList={this.addNewList} />
      </div>
    )
  }
}
export default ListsContainer;
