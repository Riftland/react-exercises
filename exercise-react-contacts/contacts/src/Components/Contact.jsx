const Contact = (props) => (
  <ul>
    <li>{props.contact.name}</li>
    <li>{props.contact.age}</li>
    <li>{props.contact.gender}</li>
    <li>{props.contact.company}</li>
    <li>{props.contact.email}</li>
    <li>
      <img src={props.contact.photo} />
    </li>
  </ul>
);

export default Contact;
