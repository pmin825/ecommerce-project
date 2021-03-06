import React, { Component } from "react";
import { CardList } from "./components/cards-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <SearchBox
                    placeholder="search monsters"
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}
