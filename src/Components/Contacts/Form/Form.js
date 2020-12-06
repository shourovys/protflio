import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { textVariant } from "../../animation/Animation";
import './Form.css';

export default function Form() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data,e) => {
    emailjs.send("service_52qddgc","template_vi7igni",data,"user_QAKSVh5QxdOLGOxgIaUir")
      .then((result) => {
          alert('your message successfully send')
          e.target.reset();
      }, (error) => {
          alert('Message not send, Please try again')
      });
  };

  
  return (
    <motion.form onSubmit={handleSubmit(onSubmit)} className='form-container'
      variants={textVariant}
    >
      <input name="name" placeholder='Name' ref={register({ required: true })} />
      {errors.name && <span>This field is required</span>}
      <input name="email" placeholder='Email' ref={register({ required: true })} />
      {errors.email && <span>This field is required</span>}
      <textarea id='text-area' name="message" placeholder='Message' ref={register({ required: true })} />
      {errors.massage && <span>This field is required</span>}
      <input id='submit-btn' type="submit" />
    </motion.form>
  );
}