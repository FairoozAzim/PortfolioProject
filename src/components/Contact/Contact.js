import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css'
import apiKey from './emailKey';
import * as emailjs from "emailjs-com";

const Contact = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const form = useRef();
    //console.log(apiKey.USER_ID);
    const onSubmit = data => {
        
      //console.log(form.current);
     
        emailjs.sendForm(apiKey.SERVICE_ID ,apiKey.TEMPLATE_ID, form.current,apiKey.USER_ID)
        .then((result) => {
            alert("Email received. We will get back to you shortly.",result.text);
        },
        (error) => {
            alert("An error occurred, Please try again", error.text);
            }
        )
    };
    return (
        <div>
            <h1>Contact Me</h1>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="form-control w-50 mx-auto mb-3 mt-5" placeholder='Name' {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
               
                <input className="form-control w-50 mx-auto" placeholder='Your Email' {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */} <br/>
                {errors.email && <span>This field is required</span>}
                <textarea className="form-control w-50 mx-auto" placeholder='Message' {...register("message", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.message && <span>This field is required</span>}
                
                <input className="button mt-3 w-25" type="submit" />
                </form>
        </div>
    );
};
export default Contact;