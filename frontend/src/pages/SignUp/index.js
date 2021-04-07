import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import logo from '../../assets/logo.png';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().min(6, 'A senha precisa de no mínimo 6 digítos').required('A senha é obrigatória')
});

export default function SignUp() {
    const dispatch = useDispatch();

    const values = {
        name: '',
        email: '',
        password: ''
    }

    function handleSubmit(values, actions) {
        const { name, email, password } = values;
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="VExpenses" />
            <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={schema}>
                <Form>
                    <Field name="name" placeholder="Nome completo" />
                    <ErrorMessage component="span" name="name" />
                    <Field type="email" name="email" placeholder="Seu e-mail" />
                    <ErrorMessage component="span" name="email" />
                    <Field type="password" name="password" placeholder="Senha" />
                    <ErrorMessage component="span" name="password" />
                    <button type="submit">Criar conta</button>
                    <Link to="/">Já tenho uma conta</Link>
                </Form>
            </Formik>
        </>
    );
}