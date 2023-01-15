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
        const onInput =(e) =>{
        dispatch({type:'input', payload:{field:e.target.id, value:e.target.value}})
        }
        
        
        const onFormSubmit =(e)=>{
            console.log('enter');
            e.preventDefault()
            dispatch({type:'resetErrors'})
            const errors = signUpFormValidation(formState.input)
                if(errors !==null){
                console.log(errors);
                for(const i in errors){
                    dispatch(type:'error', payload:{field:i, value:errors[i]})
                }
                }else{
                    alert('form submitted succesfully...')
                }
        }

    return (
        <form id="reducer-form" onSubmit={onFormSubmit}>
            <label htmlFor="name">Name </Label>
            <input type="text" id="name" value={formState["name"]} onChange={onInput}/>
                {formState.errors["name"]}
                </br>
                </br>
            <label htmlFor="password">Password</Label>
            <input type="text" id="password" value={formState["password"]}  onChange={onInput}/>
                {formState.errors["password"]}
                </br>
                </br>
             <label htmlFor="email ">Email</Label>
            <input type="text" id="email" value={formState["email"]}  onChange={onInput}/>
                {formState.errors["email"]}
                </br>
                </br>
            <label htmlFor="consent">Send marketing emails?</Label>
            <input type="checkbox" id="consent" checked={formState.consent}/>
                
              <button type="submit">Sign Up</button>
        </form>
    )
}

export { FormUsingReducer }
