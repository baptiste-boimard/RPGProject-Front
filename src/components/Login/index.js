import { useDispatch, useSelector } from 'react-redux';

// ==IMPORT BOOTSTRAP==
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

// ==IMPORT ACTION==
import {submitLogin} from '../../actions/login';
import {handleFieldChange} from '../../actions/utilities';

function Login() {
    const dispatch = useDispatch();
    
    // ==CALL UTILITIES STORE==
    const {email, password} = useSelector((state) => state.utilities);
    console.log('init',email, password);
    /**
     * Controlled fields
     * @changeCurrentField Change input state value 
     */
    const handleChange = (e) => {
        dispatch(handleFieldChange(e.target.value, e.target.name));
        console.log(e.target.name,e.target.value);
    };


    /**
     * Clicking submit signup button
     * @submitLogin POST request to API for login users
     */
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        dispatch(submitLogin(email, password));
    };

    return (
        // ==--FORM FOR LOGIN--==
    <>
      <Form onSubmit={handleSubmitLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse e-mail</Form.Label>
        <Form.Control type="email"
                      placeholder="Entrer votre e-mail"
                      value={email}
                      name="email"
                      title="email"
                      onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
                      placeholder="Password"
                      value={password}
                      name="password"
                      title="password"
                      onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Connexion
      </Button>
    </Form>
  </>
  // ==--FORM FOR LOGIN--==
  );
}

export default Login;
