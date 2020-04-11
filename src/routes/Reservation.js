import React from 'react';
import Jumbotron from '../components/Jumbotron';

class Reservation extends React.Component {
    render() {
        const { location } = this.props;
        if (!location.state) {
            location.state = { name: "송촌 풋살장" };
        }
        return (
            <div>
                <div className="reserve-jumbo">
                    <h1>{location.state.name} 예약하기</h1>
                </div>
            </div>
        );

    }
}

export default Reservation;