import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { updateContactSuccess, inputContactFailure } from './actions';

export function* createContact({ payload }) {
    try {
        // const { name, email, password } = payload;

        yield call(api.post, 'contacts', payload.data);

        toast.success('Contato criado com sucesso!');

        history.push('/contacts');
    } catch (error) {
        toast.error('Falha no cadastro, verifique os dados');

        yield put(inputContactFailure);
    }

}

export function* updateContact({ payload }) {
    try {
        const { id, name, email, avatar_id } = payload.data;

        const profile = Object.assign(
            { name, email, avatar_id },
        );

        const response = yield call(api.put, `contacts/${id}`, profile);

        toast.success('Contato atualizado com sucesso!');

        yield put(updateContactSuccess(response.data));

    } catch (error) {
        toast.error('Falha na atualização do contato, confira seus dados');
        yield put(inputContactFailure);
    }
}

export function* deleteContact({ id }) {
    try {
        yield call(api.delete, 'contacts', id);

        toast.success('Contato deletado com sucesso!');

        history.push('/contacts');

    } catch (error) {
        toast.error('Falha na exclusão do contato');
    }
}



export default all([
    takeLatest('@contact/CREATE_CONTACT_REQUEST', createContact),
    takeLatest('@contact/DELETE_CONTACT_SUCCESS', deleteContact)
]);