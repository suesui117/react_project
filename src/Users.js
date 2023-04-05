import { Component } from 'react';

import axios from 'axios';

class ApiData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        let linkToAPI = 'https://jsonplaceholder.typicode.com/users';

        try {
            let response = await axios.get(linkToAPI);
            // console.log(response) to see
            // the whole response object
            // we only need the actual data
            // which we get from response.data
            this.setState({ users: response.data });

            // we're just catching the API error message, 
            // the API sets the error message, 
            // whatever it wants to say
        } catch (error) {
            if (error.response) {
                /*
                    * The request was made and the server responded with a
                    * status code that falls out of the range of 2xx
                    */
                console.log(error.response.data);
                console.log(error.response.status);
            }

        }
    }


    // this is where you put the markup
    render() {
        return (
            <div className="container">
                {// array of objects, we wanna transform with map into react elements
                    // in this user array, taking the object ad building the react element.
                    // when we use map, we need to supply it with a key, thankfully, we have a unique ID associated with each object

                    this.state.users.map((user) => {
                        return (
                            <div key={user.id}>
                                <h3>Name: {user.name}</h3>
                                <h4>Email: {user.email}</h4>
                                <h4>Username: {user.username}</h4>
                            </div>
                        )
                    }

                    )
                }
            </div>
        )
    }
}

export default ApiData;



// import React from 'react';

// class ApiData extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }

//     handleClick = () => {
//         this.setState({ count: this.state.count + 1 });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>My Component</h1>
//                 <p>Blah blah blah: {this.state.count}</p>
//                 <button onClick={this.handleClick}>Click me</button>
//             </div>
//         );
//     }
// }

// export default ApiData;
