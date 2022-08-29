import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactListModal from "./components/ContactListModal";
import DisplayContact from "./components/DisplayContact";
import UseContactApi from "./hooks/UseContactApi";

function App() {

  const [contactsList, setAllContacts,setUsContacts,setSearchContacts,clearContacts] = UseContactApi();

  const [showContact, setContact] = useState(undefined);

  const toggleContact = (index) => {
    return setContact(contactsList.find((contact) => contact.id === index));
  };


  return (
    <>
      <div className=" d-flex main flex-column align-items-center justify-content-center mt-2">
        <div className="w-50">
          <div className="d-flex justify-content-evenly">
            <Link className="btn primary-bg me-2" to="/all-countries">
              All Countries
            </Link>
            <Link to="/us-only" className="btn secondary-bg ms-2 border-0">
              US Only!
            </Link>
          </div>
        </div>
        {showContact && (
          <DisplayContact
            contact={showContact}
            closeModal={() => toggleContact(undefined)}
          />
        )}
        <Routes>
          <Route
            exact
            path={"/all-countries"}
            element={
              <ContactListModal
                USContactsOnly={false}
                title={"Contacts"}
                toggleContact={toggleContact}
                clearContacts={clearContacts}
                contacts={contactsList}
                onSearch={setSearchContacts}
                setAllContacts={setAllContacts}
                setUsContacts={setUsContacts}

              />
            }
          />
          <Route
            exact
            path={"/us-only"}
            element={
              <ContactListModal
                title={"Contacts From US 🇺🇸"}
                contacts={contactsList}
                toggleContact={toggleContact}
                clearContacts={clearContacts}
                USContactsOnly={true}
                onSearch={setSearchContacts}
                setAllContacts={setAllContacts}
                setUsContacts={setUsContacts}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
