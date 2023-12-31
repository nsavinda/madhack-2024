import React from 'react';
import { useForm } from 'react-hook-form';

import './Registration.scss';

export default function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data:any) => console.log(data);
  console.log(errors);
  
  return (
    <div className="registration">
    <h1>Registration </h1>
    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register("Email", {required: true})} />
      <input type="text" placeholder="Full name" {...register("Full name", {required: true, maxLength: 150})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("University", { required: true })}>
        <option value="University of Colombo">University of Colombo</option>
        <option value="Other">Other</option>
      </select>

      <input type="submit" />
    </form>
    </div>
  );
}