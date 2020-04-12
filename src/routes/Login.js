import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class Login extends React.Component {
    render() {
        return (
            <Container className="login">
                <Form>
                    <Form.Group controlId="formBasicID">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="id" placeholder="ID를 입력해주세요" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="mb-3" variant="secondary" type="submit">
                        로그인
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Login;