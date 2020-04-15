import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class Jumbo extends React.Component {
    render() {
        return (
            <Jumbotron className="text-center">
                <br></br>
                <h3>{this.props.text}</h3>
                <br></br>
            </Jumbotron>
        );
    }
}

export default Jumbo;