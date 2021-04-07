import produce from 'immer';

const INITIAL_STATE = {
    contact: null,
}

export default function userContact(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@contact/CREATE_CONTACT_SUCCESS': {
                draft.contact = action.payload.data;
                break;
            }
            case '@contact/UPDATE_CONTACT_SUCCESS': {
                draft.contact = action.payload.contact
                break;
            }
            case '@contact/DELETE_CONTACT_SUCCESS': {
                draft.contact = action.payload.id
                break;
            }
            case '@contact/INPUT_CONTACT_FAILURE': {
                draft.contact = action.payload.contact;
                break;
            }
            default:
        }
    });
}