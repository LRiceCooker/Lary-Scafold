import ActionType from "../types/providers/states/ActionType"
import useAction from "../providers/hooks/useAction"
import { ACTION_FIELDS } from "../providers/actions/sampleAction"

const sampleService = {
    logic: (dispatch: React.Dispatch<ActionType>) => {
        dispatch(
            useAction(ACTION_FIELDS.ACTION_NAME, {data: "data"})
        )
    }
}

export default sampleService