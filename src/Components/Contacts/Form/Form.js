import React from "react";
import { useForm } from "react-hook-form";
import './Form.css';

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
      <input name="Name" placeholder='Name' ref={register({ required: true })} />
      {errors.Name && <span>This field is required</span>}
      <input name="Email" placeholder='Email' ref={register({ required: true })} />
      {errors.Email && <span>This field is required</span>}
      <textarea id='text-area' name="massage" placeholder='Message' ref={register({ required: true })} />
      {errors.massage && <span>This field is required</span>}
      <input id='submit-btn' type="submit" />
    </form>
  );
}