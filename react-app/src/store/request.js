const CREATE_REQUEST = 'request/FRIEND_REQUEST';
const GET_REQUESTS = 'request/GET_REQUEST';

const makeRequest = (user) => ({
    type: CREATE_REQUEST,
    payload: user
});

const getRequest = (users) => ({
    type: GET_REQUESTS,
    payload: users
});

export const getFriendRequest = () => async (dispatch) => {
    const response = await fetch(`/api/frequests/`);
    if (response.ok) {
        const users = await response.json()
        dispatch(getRequest(users))
        return users
    } else if (response.status < 500) {
        const data = await response.json();

        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.'];
    }
}

export const makeFriendRequest = (id) => async (dispatch) => {
    const response = await fetch(`/api/frequests/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'requester_id': id })
    })

    if (response.ok) {
        const request = await response.json();
        dispatch(makeRequest(request));
        return request
    } else if (response.status < 500) {
        const data = await response.json();

        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.'];
    }
}

export default function reducer(state = { requests: [] }, action) {
    let newState = {};
    switch (action.type) {
        case GET_REQUESTS:
            newState = { ...state }
            newState.requests = [...action.payload.requests]
            return { ...newState };
        default:
            return state;
    }
}
