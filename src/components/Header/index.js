// ==IMPORT BOOTSTRAP==
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

/**
 * Clicking on Signup button
 * @returns open a modal with signup form
 */
const handleToggleSignup = () => {

};
/**
 * Clicking on login button
 * @returns open a modal with login form
 */
const handleToggleLogin = () => {

};

function Header() {
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
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Inscription</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Entrer votre Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Mot de passe" />
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
      {/* OPENING MODAL SIGNUP */}

      {/* OPENING MODAL LOGIN */}
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Connexion</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Entrer votre Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Mot de passe" />
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
      {/* OPENING MODAL LOGIN */}

    </header>
    // ==-- COMPONENT HEADER--==
  );
}

export default Header;