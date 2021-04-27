import * as ACTIONS_TYPE from "./actionType"

let lastId = 0;

//reducer will take (state)-will get from store , (action )-will get from dispatch--- then reducer returns newState
const reducer = (state = [], actions) => {
    switch (actions.type) {
        case ACTIONS_TYPE.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: actions.payload.description,
                    resolved: false
                }
            ];

        case ACTIONS_TYPE.BUG_REMOVED:
            return state.filter(bug => bug.id !== actions.payload.id);

        case ACTIONS_TYPE.BUG_RESOLVED:
            return state.map(bug => {
                return (bug.id === actions.payload.id) ?
                    ({
                        ...bug,
                        resolved: true
                    })
                    :
                    (bug)
            });

        case ACTIONS_TYPE.BUG_UPDATED:
            return state.map(bug => {
                return (bug.id === actions.payload.id) ?
                    ({
                        ...bug,
                        description: `${bug.description} ${actions.payload.description}`,
                        resolved: false
                    })
                    :
                    (bug)
            })

        default:
            return state;
    }

}

export default reducer;