import { useDispatch, useSelector } from 'react-redux';

// ==IMPORT BOOTSTRAP==
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Form} from 'react-bootstrap';


// ==IMPORT ACTION==
import {toggleSignup, toggleLogin, submitLogin, submitSignup} from '../../actions/login';
import {handleFieldChange} from '../../actions/utilities';


function Login() {
  const dispatch = useDispatch();




  // ==CALL STORE==
  const {email, password} = useSelector((state) => state.utilities);
  const {logged, isOpenSignup, isOpenLogin} = useSelector((state) => state.login);


console.log(isOpenSignup, isOpenLogin);


  // == ACTIONS ==
  /**
 * Controlled fields
 * @handleChange Change input state value 
 */
  const handleChange = (e) => {
    dispatch(handleFieldChange(e.target.value, e.target.name));
  };
  /**
 * Clicking on Signup button
 * @handleToggleSignup open a modal with signup form
 */
  const handleToggleSignup = () => {
    dispatch(toggleSignup());
  };
  /**
 * Clicking on login button
 * @returns open a modal with login form
 */
  const handleToggleLogin = () => {
    dispatch(toggleLogin());
  };
  /**
   * Clicking submit signup button
   * @submitLogin POST request to API for signup users
   */
  const handleSubmitSignup = (e) => {
    e.preventDefault();
    dispatch(submitLogin(email, password));
  };
  /**
 * Clicking submit login button
 * @submitLogin POST request to API for login users
 */
  const handleSubmitLogin = (e) => {
  e.preventDefault();
  dispatch(submitSignup(email, password));
  };





  return (
    // ==-- COMPONENT HEADER--==
    <header className="header">


      {/* ==-- BUTTON SIGNUP AND LOGIN--== */}
      <Button 
        type="button"
        onClick={handleToggleSignup}
        variant="primary"
      >
        Inscription
      </Button>{' '}
      <Button
        type="button"
        onClick={handleToggleLogin}
        variant="primary"
      >
        Connexion
      </Button>{' '}
      {/* ==-- BUTTON SIGNUP AND LOGIN--== */}
      
      {/* OPENING MODAL SIGNUP */}
      {isOpenSignup && (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Inscription</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleSubmitSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email"
                                placeholder="Entrer votre Email"
                                value={email}
                                name="email"
                                title="Email"
                                onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" 
                                placeholder="Mot de passe"
                                value={password}
                                name="password"
                                title="Mot de passe"
                                onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Annuler</Button>
              <Button variant="primary">S'incrire</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
      {/* OPENING MODAL SIGNUP */}

      {/* OPENING MODAL LOGIN */}
      {isOpenLogin && (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Connexion</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleSubmitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email"
                                  placeholder="Entrer votre Email"
                                  value={email}
                                  name="email"
                                  title="Email"
                                  onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" 
                                  placeholder="Mot de passe"
                                  value={password}
                                  name="password"
                                  title="Mot de passe"
                                  onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Annuler</Button>
              <Button variant="primary">Se Connecter</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
      {/* OPENING MODAL LOGIN */}

    </header>
    // ==-- COMPONENT HEADER--==
  );
}

export default Login;
