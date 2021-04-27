import * as ACTIONS_TYPE from "./actionType";

export const createBug = (description) => {
    return (
        {
            type: ACTIONS_TYPE.BUG_ADDED,
            payload: {
                description
            }
        }
    )
}
export const removeBug = id => {
    return (
        {
            type: ACTIONS_TYPE.BUG_REMOVED,
            payload: {
                id
            }
        }
    )
}
export const resolveBug = id => {
    return (
        {
            type: ACTIONS_TYPE.BUG_RESOLVED,
            payload: {
                id
            }
        }
    )
}

export const updateBug = (id , description) => {
    return (
        {
            type: ACTIONS_TYPE.BUG_UPDATED,
            payload: {id, description}
        }
    )
}