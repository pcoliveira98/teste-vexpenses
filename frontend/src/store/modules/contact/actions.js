export function createContact(data) {
    return {
        type: '@contact/CREATE_CONTACT_REQUEST',
        payload: { data },
    }
}

export function updateContactRequest(data) {
    return {
        type: '@contact/UPDATE_CONTACT_REQUEST',
        payload: { data },
    };
}

export function updateContactSuccess(contact) {
    return {
        type: '@contact/UPDATE_CONTACT_SUCCESS',
        payload: { contact },
    };
}

export function inputContactFailure() {
    return {
        type: '@contact/INPUT_CONTACT_FAILURE',
    };
}

export function deleteContact(data) {
    return {
        type: '@contact/DELETE_CONTACT_SUCCESS',
        payload: { data }
    };
}