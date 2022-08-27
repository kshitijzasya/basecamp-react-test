import { Modal} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function DisplayContact(props) {
  const { contact, closeModal } = props;
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    closeModal();
    navigate(-1);
  };

  return (
    <Modal show={show} >
      <Modal.Header >
        <Modal.Title>
          {`${contact.first_name} ${contact.last_name}`} From{" "}
          {`${contact.country_id === 226 && "🇺🇸" }`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-lead" >Number
        <span className="ms-1 fw-bold font-monospace">
        {contact.phone_number}
        </span>
</p>

        <p className="text-lead" >Email
        <span className="ms-1 fw-bold font-monospace">
        {contact.email ? contact.email : 'No Email Found'}
        </span>
</p>
        </Modal.Body>
      <Modal.Footer>
        <Link to="/" onClick={handleClose} className="btn close-btn">
          Close
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default DisplayContact;
