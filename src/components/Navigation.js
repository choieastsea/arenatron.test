import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    // componentDidMount(){
    //     console.log($(".navbar-collapse").css("display"));
    //     if($(".navbar-collapse").css("display")=="block"){
    //         $(".bi.bi-person.ml-2").hide();
    //     }
    //     return;
    // }
    render() {
        return (
            <Navbar sticky="top" bg="light" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand className="mr-auto ml-2" href="/">대덕 스포츠 클럽</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-3">
                        <NavDropdown title="시설물 예약">
                            <NavDropdown.Item href="/reserve/송촌풋살장">송촌풋살장</NavDropdown.Item>
                            <NavDropdown.Item href="/reserve/송촌테니스장">송촌테니스장</NavDropdown.Item>
                            <NavDropdown.Item href="/reserve/을미기축구장">을미기축구장</NavDropdown.Item>
                            <NavDropdown.Item href="/reserve/을미기테니스장">을미기테니스장</NavDropdown.Item>
                            <NavDropdown.Item href="/reserve/대청수상레포츠">대청수상레포츠</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/inquiry">예약 조회</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="fixed">
                    <Link to="/login">
                        <svg className="bi bi-person ml-2" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </Navbar>
        );
    }// Link의 to는 router의 path를 적어주도록 하자.
}

export default Navigation;
/* <Link className="navbar-brand" to="/" >대덕 스포츠 클럽</Link>

    <Link className="nav-link" to="/reserve/송촌풋살장" >예약 신청</Link>
    <Link className="nav-link" to="/inquiry">예약 조회</Link>
    <Link className="nav-link ml-auto" to="/login">
        <svg class="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd" />
        </svg>
    </Link> */