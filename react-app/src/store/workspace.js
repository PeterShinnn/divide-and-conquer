const GET_WORKSPACE = 'workspace/GET_WORKSPACE';

const getWorkspace = (workspaces) => ({
    type: GET_WORKSPACE,
    workspaces
})

export const getWorkspaceByUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}`);

    if (response.ok) {
        const workspaces = await response.json();
        dispatch(getWorkspace(workspaces));

        return workspaces;
    } else if (response.status < 500) {
        const data = await response.json();

        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }

    return;
}

const reducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case GET_WORKSPACE:
            newState = { ...state, ...action.workspaces }
            return newState;
        default:
            return state;
    }
}

export default reducer;
