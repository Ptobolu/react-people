import React from 'react';
import './App.css';

// const sortByPower = (a, b) => {
//     return b.power - a.power;
// }
// const List = props => {
//     return (
// <>
//     <h1>React People!</h1>
//     <ul className="list">
//         {props.data.sort(sortByPower).map((person) => (
//             <li key={person.name} className="list-item">
//                 <div className="list-item-image-container">
//                     <img src={person.thumbnail} />
//                         </div>
//                         <span className="list-item-name">
//                         {person.name} ( Power:{' '}
//                         <span className="list-item-power">{person.power}</span> )
//                         </span>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }
// const App = () => {
//     const human = [
//         {
//             name: 'Kuririn',
//             thumbnail:'https://upload.wikimedia.org/wikipedia/pt/6/63/Kuririn_42311.png',
//             power: 10
//         },
//         {
//             name: 'Bulma',
//             thumbnail: 'https://upload.wikimedia.org/wikipedia/hu/1/1c/Bulma.png',
//             power: 3
//         },
//         {
//             name: 'Chi-chi',
//             thumbnail:'https://upload.wikimedia.org/wikipedia/hu/8/84/Chi-chi_dragon_ball_anime.jpg',
//             power: 30
//         }
// ];
// return (
//         <div className="App">
//             <List data={human} />
//         </div>
//     );
// }
// export default App;

class App extends React.Component {
    render() {
        const human = [
            {
            name: 'Kukirin',
            thumbnail : 'https://upload.wikimedia.org/wikipedia/pt/6/63/Kuririn_42311.png',
            power: 10
            },
            {
            name: 'Bulma',
            thumbnail : 'https://upload.wikimedia.org/wikipedia/hu/1/1c/Bulma.png',
            power: 3
            },
            {
            name: 'Chi-chi',
            thumbnail : 'https://upload.wikimedia.org/wikipedia/hu/8/84/Chi-chi_dragon_ball_anime.jpg',
            power: 30
            },
        ];
        return (
            <div className="App">
                <List data={human} />
            </div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            human: [
                {
                name: 'Kukirin',
                thumbnail:'https://upload.wikimedia.org/wikipedia/pt/6/63/Kukirin_42311.png',
                power: 10
                },
                {
                    name: 'Bulma',
                    thumbnail: 'https://upload.wikimedia.org/wikipedia/hu/1/1c/Bulma.png',
                    power: 3
                },
                {
                    name: 'Chi-chi',
                    thumbnail: 'https://upload.wikimedia.org/wikipedia/hu/8/84/Chi-chi_dragon_ball_anime.jpg',
                    power: 30
                }

            ]
        }
    }
    render() {
        return (
            <div className="App">
                <List data={this.state.human} />
            </div>
        );
    }
}

import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
    }
componentDidMount() {
    fetch('Some API URL')
    .then(Response => Response.json())
    .then(userName => this.setState({userName}));
}

render() {
    return (
    <div>
        <p>Name: {this.state.userName}</p>
    </div>
    )
}
}
export default User;