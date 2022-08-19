import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactListModal from "./components/ContactListModal";
import DisplayContact from "./components/DisplayContact";
import store from './store'


function App() {
  const contactsList = store.getState()

  const [showContact, setContact] = useState(undefined);

  const toggleContact = (index) => {
    return setContact(contactsList.find((contact) => contact.id === index));
  };

  const USContacts = contactsList.filter(
    (contact) => contact.country_id === 226
  );

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
          <div>
            <p className="text-muted text-center mt-2">
              The API Token was not working(expired) so i have implemented the
              static data with the same schema.
            </p>
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
                contacts={contactsList}
              />
            }
          />
          <Route
            exact
            path={"/us-only"}
            element={
              <ContactListModal
                title={"Contacts From US 🇺🇸"}
                contacts={USContacts}
                toggleContact={toggleContact}
                USContactsOnly={true}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
