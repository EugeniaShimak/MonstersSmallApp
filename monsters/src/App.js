import React from 'react';
import './App.css';
import {CardList} from "./components/cardList/cardList";
import {SearchBox} from "./components/seachBox/searchBox";

class App extends React.Component {

    state = {
        monsters: [
            // {
            //     name:'Dracula',
            // },
            // {
            //     name:'Frankenstein',
            // },
            // {
            //     name:'Zombie',
            // }
        ],
        searchVal: ''
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => this.setState({monsters: res}))
    }

    changeSearchBox = (event) => {
        let val = event.target.value;
        this.setState({searchVal: val});
    };

    render() {
        const {monsters, searchVal} = this.state;
        const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchVal.toLowerCase()));
        return (
            <div className="App">
                <h1>Monsters</h1>
                <SearchBox
                    placeholder="search monster"
                    handleChange={e => this.changeSearchBox(e)}
                />
                <CardList monsters={filterMonsters}/>
            </div>
        )
    }
}

export default App;
