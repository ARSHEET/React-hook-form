import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useForm } from "react-hook-form"

function FormValidation() {

     const { register, handleSubmit, formState: { errors } } = useForm();

     const onSubmit = (data) => {
          console.log(data)
     }
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Field>
                       <label>First Name</label>
                       <input placeholder="Enter your first name" type="text" {...register("firstName", { required: true, maxLength: 12})} />
                       {errors.firstName && <p style={{color: "red"}}>Please check the First Name</p>}
                  </Form.Field>
                  <Form.Field>
                       <label>Last Name</label>
                       <input placeholder="Enter your last name" type="text" {...register("lastName", { required: true, maxLength: 12})} />
                       {errors.lastName && <p style={{color: "red"}}>Please check the Last Name</p>}
                  </Form.Field>
                  <Form.Field>
                  <label>E-mail</label>
                       { /* eslint-disable */ }
                       <input placeholder="Enter your valid e-mail" type="Email" {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                       {errors.email && <p style={{color: "red"}}>Please enter a valid e-mail</p>}
                  </Form.Field>
                  <Form.Field>
                  <label>Password</label>
                       <input placeholder="Enter your password" type="Password" {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})} />
                       {errors.password && <p style={{color: "red"}}>Please enter a password consisting Capital & Small letters and a number and should be between 6-15 length</p>}
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default FormValidation
