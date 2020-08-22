import React from 'react';
import { Container } from 'react-bootstrap';

export default function Minimal(props){
    const { children } = props;

    return(
        <Container 
        xs={12}
        fluid style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
        }}>
            {children}
        </Container>
    )
}