// import css from "./Contact.module.css";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoMdPerson } from "react-icons/io";
// import DeleteModal from "../DeleteModal/DeleteModal";
// import EditModal from "../EditModal/EditModal";

// export default function Contact({ contact: { _id, name, number } }) {
//   return (
//     <div className={css.contactItem}>
//       <div className={css.contactInfo}>
//         <p>
//           <IoMdPerson className={css.contactIcon} />
//           {name}
//         </p>
//         <p>
//           <FaPhoneAlt className={css.contactIcon} />
//           {number}
//         </p>
//       </div>
//       <div className={css.contactBtns}>
//         <EditModal _id={_id} name={name} number={number} />
//         <DeleteModal _id={_id} />
//       </div>
//     </div>
//   );
// }

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
