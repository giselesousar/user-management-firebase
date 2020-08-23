import React, {useState} from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import Minimal from '../../layouts/Minimal';
import { FaGoogle } from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
import {firebaseAuth} from '../../firebase/FirebaseUtils'


export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function navigateToSignUp(){
        history.push("/sign-in")
    }

    function handleSignUp(e){
        e.preventDefault();
        firebaseAuth.createUserWithEmailAndPassword(email, password).then(function (result){
            history.push("/");
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // ...
          });
    }

    return (
        <Minimal>
            <Col  
                 xs={12}
                 lg={4}
                 md={10}
                 sm={10}
            >
                <Container style={{
                    display: "flex",
                    justifyContent: "center",
                    height: 80
                }}>
                    <h1>Create Account</h1>
                </Container>
                <Form onSubmit={handleSignUp}>
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                height: 50,
                            }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                            <FaGoogle size={20}/>
                        </span> Sign in with Google
                    </Button>
                </div>
            </Col>
        </Minimal>
    )
}