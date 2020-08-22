import React from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import Minimal from '../../layouts/Minimal';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import {useHistory} from 'react-router-dom';

export default function SignUp() {

    const history = useHistory();

    function navigateToSignUp(){
        history.push("/sign-in")
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
                    <h1>Create Account</h1>
                </Container>
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            style={{
                                height: 50,
                            }}
                        />
                    </Form.Group>
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
                            Sign up
                </Button>

                    </Container>
                </Form>
                <Container style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                }}>
                    <h6>Already have an account? <span style={{cursor: "pointer", color: "blue"}} onClick={navigateToSignUp}>Sign in</span>.</h6>
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
                        </span> Sign Up with Facebook
                    </Button>
                </div>
                <div style={{marginTop: 10}}>
                    <Button style={{width: "100%", textAlign: "left"}}variant="outline-primary">
                        <span style={{marginRight: 10}}>
                            <FaGoogle size={20}/>
                        </span> Sign Up with Google
                    </Button>
                </div>
                <div style={{marginTop: 10}}>
                    <Button style={{width: "100%", textAlign: "left"}}variant="outline-primary">
                        <span style={{marginRight: 10}}>
                            <FaGithub size={20}/>
                        </span> Sign Up with Github
                    </Button>
                </div>
            </Container>
        </Minimal>
    )
}