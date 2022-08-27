import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import UseContactApi from "../hooks/UseContactApi";
import {
  Modal,
  ButtonGroup,
  Button,
  ListGroup,
  InputGroup,
  Form,
} from "react-bootstrap";

import { useSelector,useDispatch } from "react-redux";

function ContactListModal(props) {
  //Controlled Search Input State
  const [filterContactInput, setFilterInput] = useState("");
  const [show, setShow] = useState(true);
  //Global state for Modal C
  const { toggleContact,onSearch,USContactsOnly,contacts,setAllContacts,setUsContacts} = props;


  //State for whether to display contact with even ID or not!
  const [showEven, setEven] = useState(false);

  const reduxContacts = useSelector(state => state)

  useEffect(()=> {
    dispatch({type:'CLEAR'})

    if(USContactsOnly){
      setUsContacts()
    dispatch({type:'US_ONLY_CONTACTS',data:[...contacts]})
    }else {
      setAllContacts()
    dispatch({type:'ALL_TYPE_CONTACTS',data:[...contacts]})
    }
  },[])


    let dispatch =  useDispatch()

  const handleClick = () => {

    // clearContacts()
    onSearch(filterContactInput)
  }
  
  const handleFilterChange = (evt) => {
    let filter = evt.currentTarget.value;
    setFilterInput(filter.toLowerCase());
  };

  const toggleEven = () => setEven(!showEven);

  const evenContacts = contacts.filter((contact) => contact.id % 2 === 0);

  const renderingContact = showEven ? evenContacts : contacts;

  return (
    <>
      <Modal show={show} scrollable>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
          <ButtonGroup>
            <Link to="/all-countries" className="btn  primary-bg">
              All Contacts
            </Link>
            <Link to="/us-only" className="btn secondary-bg">
              US Contacts
            </Link>
          </ButtonGroup>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control
              name="filter"
              onChange={handleFilterChange}
              value={filterContactInput}
              placeholder="Filter.."
              aria-label="Filter.."
              autoComplete="off"
            />
            <Button variant="success" onClick={handleClick}>Search</Button>
          </InputGroup>
          <ListGroup>

          {!contacts.length ? <p className="text-center fw-bold">Loading...</p> : ''}


            {renderingContact.map((contact, index) => {
              if (contact.first_name && contact.first_name.toLowerCase().indexOf(filterContactInput) > -1
              ) {
                return (
                  <Contact
                    contact={contact}
                    selectContact={() => {
                      toggleContact(contact.id);
                      setShow(false);
                    }}
                    index={index}
                    key={index}
                  />
                );
              }
              return null;
            })}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <div>
            <input
              type="checkbox"
              id="even-only"
              className="form-check-input mx-2"
              defaultChecked={showEven}
              onChange={toggleEven}
            />
            <label
              htmlFor="even-only"
              className={`font-monospace ${showEven && "text-primary"}`}
            >
              Only Even
            </label>
          </div>
          <Link to="/" className="btn close-btn">
            Close
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactListModal;
