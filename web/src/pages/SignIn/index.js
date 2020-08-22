import React from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import Minimal from '../../layouts/Minimal';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import {useHistory} from 'react-router-dom';

export default function SignIn() {

    const history = useHistory();

    function navigateToSignUp(){
        history.push("/sign-up")
    }
    return (
        <Minimal>
            <Container style={{
                width: "40%"
            }}>
                <Container style={{
                    display: "flex",
                    justifyContent: "center",
                    height: 80
                }}>
                    <h1>Sign In</h1>
                </Container>
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            style={{
                                height: 50,
                            }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            style={{
                                height: 50,
                            }}
                        />
                    </Form.Group>
                    <Container fluid style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Button style={{
                            width: "50%",
                            borderRadius: 50
                        }} variant="primary" type="submit">
                            Sign in
                </Button>

                    </Container>
                </Form>
                <Container style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                }}>
                    <h6>Don't have an account? <span style={{cursor: "pointer", color: "blue"}} onClick={navigateToSignUp}>Sign up</span>.</h6>
                </Container>
                <Container style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 20
                }}>
                    <h4>or</h4>
                </Container>
                <div style={{marginTop: 10}}>
                    <Button style={{width: "100%", textAlign: "left"}}variant="outline-primary">
                        <span style={{marginRight: 10}}>
                            <FaFacebook size={20}/>
                        </span> Sign In with Facebook
                    </Button>
                </div>
                <div style={{marginTop: 10}}>
                    <Button style={{width: "100%", textAlign: "left"}}variant="outline-primary">
                        <span style={{marginRight: 10}}>
                            <FaGoogle size={20}/>
                        </span> Sign In with Google
                    </Button>
                </div>
                <div style={{marginTop: 10}}>
                    <Button style={{width: "100%", textAlign: "left"}}variant="outline-primary">
                        <span style={{marginRight: 10}}>
                            <FaGithub size={20}/>
                        </span> Sign In with Github
                    </Button>
                </div>
            </Container>
        </Minimal>
    )
}