import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
// import ContactsSearch from '../../components/Search';
// import { useDispatch } from 'react-redux';

import { Container } from './styles';

// import { deleteContact } from '../../store/modules/contact/sagas';

import avatar from '../../assets/avataaars.png';
// import Pagination from '../../components/Pagination';

// const LIMIT = 12;

export default function Contact() {
    const [contacts, setContacts] = useState([]);
    // const dispatch = useDispatch();

    useEffect(() => {
        api.get('contacts').then((response) => {
            setContacts(response.data);
        });
    }, [])

    // function handleDelete(event) {
    // const id = parseInt(event.target.value);
    // dispatch(deleteContact(id));
    // }

    return (
        <Container>
            {/* <ContactsSearch /> */}
            {contacts.length > 0 ? contacts.map(contact =>
                <div>
                    <ul>
                        <li key={contact.id}>
                            <Link to={`/edit/${contact.id}`} >
                                <img src={avatar} alt="" />
                                <label>
                                    {contact.name}
                                </label>
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : <h1>Você não possui contatos no momento</h1>}
            {/* <Pagination limit={LIMIT} total={120} offset={24}/> */}
        </Container>
    )
};