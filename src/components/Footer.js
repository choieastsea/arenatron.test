import React from 'react';
import {Container} from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-dark text-white-50">
                <Container className="text-center p-2">
                    <h5 className="m-2">대덕 스포츠 클럽</h5>
                    <p className="m-1">주소: 대전광역시 대덕구</p>
                    <p className="m-1">전화번호: 010-1234-12345</p>
                    <p className="mb-3">입금 계좌: 하나은행 112-11295-1245</p>
                </Container>
            </footer>
        );
    }
}

export default Footer;