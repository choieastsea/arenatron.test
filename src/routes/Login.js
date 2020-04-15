import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class Login extends React.Component {
    tryLogin = (event) => {
        event.preventDefault();
        alert("id: " + event.target.id.value + "/pw: " + event.target.pw.value);
    }
    render() {
        return (
            <Container className="login">
                <Form onSubmit={this.tryLogin} >
                    <Form.Group controlId="formBasicID">
                        <Form.Label>ID</Form.Label>
                        <Form.Control name="id" type="id" placeholder="ID를 입력해주세요" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="pw" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="mb-3" variant="secondary" type="submit" >
                        로그인
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Login;
