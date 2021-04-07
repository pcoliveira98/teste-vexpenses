import React, { useState, useEffect } from 'react';

import api from '../../services/api';

export default function ContactsSearch() {
    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        const params = {};

        if (search) {
            params.name_like = search
        }
        api.get('contacts', { params }).then((response) => {
            setContacts(response.data)
        })
    }, [search]);

    return (
        <div>
            <input
                type="search"
                placeholder="Buscar"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
        </div>
    )
}