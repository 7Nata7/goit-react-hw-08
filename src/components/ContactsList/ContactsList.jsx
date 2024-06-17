// import css from "./ContactsList.module.css";
// import { useSelector } from "react-redux";
// import Contact from "../Contact/Contact";
// import { selectFilteredContacts } from "../../redux/contacts/selectors";

// export default function ContactsList() {
//   const filteredContacts = useSelector(selectFilteredContacts);
//   return (
//     <ul className={css.contactsList}>
//       {filteredContacts.map((contact) => (
//         <li key={contact._id} className={css.contactsItem}>
//           <Contact contact={contact} />
//         </li>
//       ))}
//     </ul>
//   );
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts, selectIsLoading, selectError } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
