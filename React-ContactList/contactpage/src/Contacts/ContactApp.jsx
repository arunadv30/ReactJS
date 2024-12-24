import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import Axios from "axios";

const ContactApp = () => {
  // initializes 1
  let [contacts, setContacts] = useState([]);
  let [selContact, setContact] = useState({});

  // to invoke restapi automatically 3
  useEffect(() => {
    Axios.get(
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    )
      .then((resp) => {
        setContacts(resp.data);
      })
      .catch(() => {});
  }, []);

  let useSelectedContact = (contact) => {
    console.log(contact.name.first);
    setContact(contact);
  };

  //  renders ui 2
  return (
    <div>
      {/* <pre>{JSON.stringify(contacts)}</pre> */}
      <div className="container">
        {contacts.length > 0 ? (
          <>
            {/* "True" */}
            <div className="row">
              <div className="col-8">
                {/* contact-list */}
                {/*setContacts is a function sent a property to achieve 
                bi-directional data  to retirieve data from child to parent component*/}
                <ContactList
                  contacts={contacts}
                  selContact={useSelectedContact}
                />
              </div>
              <div className="col-4">
                {/* contact-details */}
                {Object.keys(selContact).length > 0 ? (
                  <>
                    <ContactDetails contact={selContact} />
                  </>
                ) : (
                  <>No Data</>
                )}
              </div>
            </div>
          </>
        ) : (
          <h3>No data</h3>
        )}
      </div>
    </div>
  );
};

export default ContactApp;
