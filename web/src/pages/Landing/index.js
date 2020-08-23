import React, {useContext} from 'react';
import {Button} from 'react-bootstrap';
import {firebaseAuth} from '../../firebase/FirebaseUtils';
import {UserContext} from '../../providers/UserProvider';
import {useHistory} from 'react-router-dom';

export default function Landing(){

    const { user, setUser } = useContext(UserContext);

    const history = useHistory()

    function handleLogout(){
        firebaseAuth.signOut().then(function() {
            setUser(null);
            history.push("/sign-in")
          }, function(error) {
            // An error happened.
          });
    }

    return(
        <Button onClick={handleLogout}>Logout</Button>
    )
}