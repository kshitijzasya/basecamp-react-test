import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactListModal from "./components/ContactListModal";
import DisplayContact from "./components/DisplayContact";

const contacts = [
  {
    id: 1,
    first_name: "Alex",
    last_name: "Smith",
    country_id: 226,
    phone_number: "9404480524",
  },

  {
    id: 2,
    first_name: "Miley",
    last_name: "Stewart",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 3,
    first_name: "Mark",
    last_name: "Zuck",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 4,
    first_name: "Rahul",
    last_name: "Sharma",
    country_id: 108,
    phone_number: "9404480524",
  },
  {
    id: 5,
    first_name: "Priya",
    last_name: "Sharma",
    country_id: 108,
    phone_number: "9404480524",
  },
  {
    id: 6,
    first_name: "Kevin",
    last_name: "Alderson",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 7,
    first_name: "Chloe",
    last_name: "Parker",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 8,
    first_name: "Angela",
    last_name: "Smith",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 9,
    first_name: "Jenny",
    last_name: "Smith",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 10,
    first_name: "Priyanka",
    last_name: "",
    country_id: 108,
    phone_number: "9404480524",
  },
];

function App() {
  const [contactsList, setContacts] = useState(contacts);
  const [showContact, setContact] = useState(undefined);

  const toggleContact = (index) => {
    return setContact(contacts.find((contact) => contact.id === index));
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
