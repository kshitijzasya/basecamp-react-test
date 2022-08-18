import { ListGroupItem } from "react-bootstrap";

function Contact(props) {
  const { index, contact, selectContact } = props;
  return (
    <ListGroupItem
      key={index}
      className="justify-content-between d-flex contact"
      onClick={selectContact}
    >
      {contact.first_name}
      <span className="text-muted font-monospace contact-id">
        #{contact.id}
      </span>
    </ListGroupItem>
  );
}

export default Contact;
