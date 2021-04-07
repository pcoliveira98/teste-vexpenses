import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import logo from '../../assets/logo.png';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = yup.object().shape({
    email: yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().required('A senha é obrigatória')
});

export default function SignIn() {
    const values = {
        email: '',
        password: ''
    }

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }, actions) {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
        <img src={logo} alt="VExpenses" />
        <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={schema}>
            <Form>
                <Field type="email" name="email" placeholder="Seu e-mail" />
                <ErrorMessage component="span" name="email" />
                <Field type="password" name="password" placeholder="Senha" />
                <ErrorMessage component="span" name="password" />
                <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
                <Link to="/register">Criar conta</Link>
            </Form>
        </Formik>
        </>
    );
}