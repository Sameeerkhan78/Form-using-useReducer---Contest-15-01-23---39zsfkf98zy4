import React,{ useReducer } from "react"
import { signUpFormReducer } from "../reducers/signUpFormReducer"
import { signUpFormValidation } from "../utils/signupformvalidation"
const initialFormState = {
    input:{
        "name":'',
        "email":'',
        "password":'',
        "consent":false
    },
    errors:{
        "name":'',
        "email":'',
        "password":'',
    }

}
const FormUsingReducer = () => {
    const [formState,dispatch] = useReducer(signUpFormReducer,initialFormState) 


    return (
        <form id="reducer-form" onSubmit={onFormSubmit}>
            <label htmlFor="name">Name </Label>
            <input type="text" id="name" value={formState["name"]} onChange={onInput}/>
                {formState.errors["name"]}
                </br>
                </br>
            <label htmlFor="password">PassWord</Label>
            <input type="text" id="name" value={formState["passw]}  oChange={onInput}/>
                {formState.errors["name"]}
                </br>
                </br>
        </form>
    )
}

export { FormUsingReducer }
