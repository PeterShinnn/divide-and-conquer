const GET_WORKSPACE = 'workspace/GET_WORKSPACE';
const ADD_WORKSPACE = 'workspace/ADD_WORKSPACE';
const EDIT_WORKSPACE = 'workspace/EDIT_WORKSPACE';
const DELETE_WORKSPACE = 'workspace/DELETE_WORKSPACE';


// CRUD
// C
const addWorkspace = (workspace) => ({
    type: ADD_WORKSPACE,
    workspace
})


// R
const getWorkspace = (workspaces) => ({
    type: GET_WORKSPACE,
    workspaces
})

// U
const updateWorkspaceName = (workspace) => ({
    type: EDIT_WORKSPACE,
    workspace
})

// D
const removeWorkspace = (workspaceId) => ({
    type: DELETE_WORKSPACE,
    workspaceId
})


// C
export const createWorkspace = (name) => async (dispatch) => {
    const response = await fetch(`/api/workspaces/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name})
    });

    if (response.ok) {
        const workspace = await response.json();

        dispatch(addWorkspace(workspace));
        return workspace;
    } else if (response.status < 500) {
        const data = await response.json();

        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.'];
    }
}

// R
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
        return ['An error occurred. Please try again.'];
    }
}

// U
export const editWorkspace = (id, name) => async (dispatch) => {
    const response = await fetch(`/api/workspaces/${id}/edit`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, name})
    })

    if (response.ok){
        const workspaces = await response.json();
        dispatch(updateWorkspaceName(workspaces));

        return workspaces;
    } else if (response.status < 500) {
        const data = await response.json();

        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.'];
    }
}

// D
export const deleteWorkspaceById = (id) => async (dispatch) => {
    const response = await fetch(`/api/workspaces/${id}/delete`, { method: 'DELETE' });

    if (response.ok) {
        dispatch(removeWorkspace(id));

        return { "message": "Deleted" };
    } else if (response.status < 500) {
        const data = await response.json();

        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.'];
    }
}

const reducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case ADD_WORKSPACE:
            newState = { ...state }
            newState.workspaces =[...newState.workspaces, action.workspace]
            return newState;
        case GET_WORKSPACE:
            newState = { ...state, ...action.workspaces }
            return newState;
        case EDIT_WORKSPACE:
            newState = { ...state }
            let newArr = [...newState.workspaces]
            for(let i=0; i<newArr.length; i++){
                if (newArr[i].id === action.workspace.id){
                    newArr[i] = action.workspace;
                }
            }
            newState.workspaces = newArr;
            return newState
        case DELETE_WORKSPACE:
            newState = { ...state }
            newState.workspaces = newState.workspaces.filter(w => w.id !== action.workspaceId)
            return newState;
        default:
            return state;
    }
}

export default reducer;
