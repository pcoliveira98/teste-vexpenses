import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data, actions) {
        dispatch(updateProfileRequest(data));
    }

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />
                <Input name="name" placeholder="Nome completo" />
                <Input type="email" name="email" placeholder="E-mail" />
                <hr />
                <Input type="password" name="oldPassword" placeholder="Senha atual" />
                <Input type="password" name="password" placeholder="Nova senha" />
                <Input type="password" name="confirmPassword" placeholder="Confirme nova senha" />
                <button type="submit">Atualizar perfil</button>
            </Form>
            <button type="button" onClick={handleSignOut}>Sair</button>
        </Container>
    );
};