import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
    // .then(users => console.log(users))
  }

  render() {
    const { monster, searchField } = this.state;
    // destructuring
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField
    const filteredMonsters = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
            // if we want to see state update immediately, we have to use callback function
          }}
        />
        <CardList monsters={filteredMonsters} />
        {/* Added filter function to search bar */}
      </div>
    );
  }
}

export default App;
