import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron />
                <div className="container-small">
                    <div className="row justify-content-around">
                        {facilityList.map((facility, index) => (
                            <GoReserve className="fac col-3" key={index} src={facility.src} name={facility.name} />
                        ))}
                        <div className="offset-300"></div>
                    </div>
                </div>
            </div>
        );

    }
}
class GoReserve extends React.Component {
    render() {
        return (
            <div>
                <img alt={this.props.name} src={this.props.src}></img>
                <Link to={{
                    pathname: "/reserve",
                    state : {
                        name: this.props.name
                    }
                }}>
                    <div className="reserve-button">{this.props.name} 예약</div>
                </Link>
            </div>
        );
    }
}

export default Home;

const facilityList = [
    {
        name: "송촌 풋살장",
        src: "https://placehold.it/300X250" //img 주소 적으면 됨.
    },
    {
        name: "송촌 테니스장",
        src: "https://placehold.it/300X250"
    },
    {
        name: "을미기 축구장",
        src: "https://placehold.it/300X250"
    },
    {
        name: "을미기 테니스장",
        src: "https://placehold.it/300X250"
    },
    {
        name: "대청 수상 레포츠",
        src: "https://placehold.it/300X250"
    }
];