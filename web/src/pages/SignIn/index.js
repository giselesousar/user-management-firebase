import React, {useState, useContext} from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import Minimal from '../../layouts/Minimal';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
import {firebaseAuth} from '../../firebase/FirebaseUtils'
import firebase from 'firebase/app';
import {UserContext} from '../../providers/UserProvider';

export default function SignIn() {

    const { user, setUser } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function navigateToSignUp(){
        history.push("/sign-up")
    }

    function handleSignIn(e){
        e.preventDefault();
        firebaseAuth.signInWithEmailAndPassword(email, password).then(function (result){
            setUser(result.user);
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

    function handleSignInGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebaseAuth.signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            setUser(result.user);
            history.push("/")
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
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
                    <h1>Sign In</h1>
                </Container>
                <Form onSubmit={handleSignIn}>
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
                            Sign in
                </Button>

                    </Container>
                </Form>
                <Container style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                    textAlign: "center"
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
                    <Button onClick={handleSignInGoogle} style={{width: "100%", textAlign: "left"}}variant="outline-primary">
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
            </Col>
        </Minimal>
    )
}