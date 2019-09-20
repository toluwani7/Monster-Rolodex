import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // fetch monsters info from the API and make it json file
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }
  // Define Search field because we using more than once
  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
  }

  // Search filter monster
    render() {
      const {monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monsters => 
        monsters.name.toLowerCase().includes(searchField.toLowerCase())
        );
  


  // Give monster state to CardList component and the component received it as a props.
    return (
      <div className="App">

      <h1> Monsters Rolodex</h1>
        
        <SearchBox
         placeholder='search monsters'
         handleChange={this.handleChange}
        />
        <CardList monsters= {filteredMonsters}/>
      </div>
    );
  }
}
export default App;

