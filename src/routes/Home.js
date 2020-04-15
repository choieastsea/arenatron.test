import React, { useState } from 'react';
import Jumbo from '../components/Jumbo';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button, Modal } from 'react-bootstrap';
class Home extends React.Component {
    render() {
        return (
            <div>
                <ModalMain />
                <div />
                <div>
                    <Jumbo />
                    <Container>
                        <Row className="justify-content-around">
                            {facilityList.map((facility, index) => {
                                //console.log("index : "+index);
                                return (<GoReserve className="fac col-3" index={index} key={index} src={facility.src} name={facility.name} />);
                            })}
                            <div className="offset-300"></div>
                        </Row>
                    </Container>
                </div>
            </div>
        );

    }
}
class GoReserve extends React.Component {
    render() {
        const link_path = '/reserve/' + this.props.name;
        //console.log("link_path"+link_path);
        return (
            <Col xs={10} md={5}>
                <div className="img-wrap">
                    <div className="img">
                        <img className="responsive" alt={this.props.name} src={this.props.src}></img>
                    </div>
                    <div className="img-text">
                        <p>{this.props.name}</p>
                    </div>
                </div>
                <Link to={{
                    pathname: link_path,
                    state: {
                        name: this.props.name
                    }
                }}>
                    <div className="reserve-button">예약하기</div>
                </Link>
            </Col>
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

function ModalMain() {
    const [show, setShow] = useState(true, false);
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>공지 사항</Modal.Title>
                </Modal.Header>
                <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.</Modal.Body>
            </Modal>
        </>
    );
}
