import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import AvatarInput from '../Profile/AvatarInput';

import { Container } from './styles';
import { createContact, updateContactRequest } from '../../store/modules/contact/actions';
import api from '../../services/api';

const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    // phone: yup.string().required('O telefone é obrigatório')
});


export default function Contact() {
    const { id } = useParams();
    const [phones, setPhones] = useState([]);
    // const [contact, setContact] = useState({});
    // const [addresses, setAddresses] = useState([]);
    const dispatch = useDispatch({});

    // useEffect(() => {
    //     api.get(`contacts/${id}`)
    //         .then(res => setContact({ contact: res.data }));
    // }, []);

    const initialValues = {
        name: '',
        cep: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',

        // user_id: profileId,
    }

    function onBlurCep(event, setFieldValue) {
        const { value } = event.target;

        const cep = value?.replace(/[^0-9]/g, '')

        if (cep?.length !== 8) {
            return;
        }
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setFieldValue('street', data.logradouro);
                setFieldValue('district', data.bairro);
                setFieldValue('city', data.localidade);
                setFieldValue('state', data.uf);
            }
            );
    }

    function handleSubmit(values, actions) {
        // if (id) {
        //     dispatch(updateContactRequest(values));
        // } else {
            values.phones = phones
            dispatch(createContact(values));
        // }
    }

    function addInputPhone(e) {
        e.preventDefault();
        setPhones([...phones, ""]);
    }

    function removeInputPhone(position) {
        setPhones([...phones.filter((_, index) => index !== position)]);
    }

    function handleChangePhone(e, index) {
        phones[index] = e.target.value;
        setPhones([...phones]);
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            {props =>
                <Container>
                    <Form>
                        <AvatarInput name="avatar_id" />
                        <Field name="name" placeholder="Nome do contato" />
                        <ErrorMessage component="span" name="name" />
                        <Field name="cep" placeholder="CEP" onBlur={(event) => onBlurCep(event, props.setFieldValue)} />
                        <Field name="street" placeholder="Logradouro" />
                        <Field name="number" placeholder="Número" />
                        <Field name="complement" placeholder="Complemento" />
                        <Field name="district" placeholder="Bairro" />
                        <Field name="city" placeholder="Cidade" />
                        <Field name="state" placeholder="Estado" />
                        {phones.map((phone, index) =>
                            <div>
                                <Field
                                    key={index}
                                    name={phone}
                                    placeholder={`Telefone ${index + 1}`}
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => handleChangePhone(e, index)}
                                />
                                <button id="delete" onClick={() => removeInputPhone(index)}>Excluir</button>
                                {/* <ErrorMessage component="span" name="phone"/> */}
                            </div>
                        )}
                        <button id="phone" onClick={addInputPhone}>Add Phone</button>
                        <button type="submit">Add contato</button>
                    </Form>
                </Container>
            }
        </Formik>
    );
};