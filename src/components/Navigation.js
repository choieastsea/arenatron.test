import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                <Link to="/" className="navbar-brand">대덕 스포츠 클럽</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/reserve" className="nav-link">예약 신청</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/inquiry" className="nav-link">예약 조회</Link>
                    </li>
                </ul>
            </nav >
        );
    }// Link의 to는 router의 path를 적어주도록 하자.
}

export default Navigation;