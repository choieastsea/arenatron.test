import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Jumbo from '../components/Jumbo';

class Inquiry extends React.Component {
    tryInquiry = (event) => {
        event.preventDefault();
        alert("예약번호")
    }
    render() {
        return (
            <Container fluid>
                <Jumbo text="예약 조회"></Jumbo>
                <Container className="inquiry">
                    <Form>
                        <Form.Group controlId="form-num">
                            <Form.Label>예약 번호</Form.Label>
                            <Form.Control maxLength="5" type="number" placeholder="SMS로 전송된 5자리 번호" />
                        </Form.Group>
                        <Form.Group controlId="form-name">
                            <Form.Label>신청자명</Form.Label>
                            <Form.Control type="text" placeholder="이름" />
                        </Form.Group>
                        <Form.Group controlId="form-phone">
                            <Form.Label>휴대전화</Form.Label>
                            <Form.Control type="number" placeholder="-빼고 숫자만 입력" />
                        </Form.Group>
                        <Button onSubmit={this.tryInquiry} className="mb-3" variant="secondary" type="submit" block>
                            조회하기
                </Button>
                    </Form>
                </Container>
            </Container>
        );

    }
}

export default Inquiry;