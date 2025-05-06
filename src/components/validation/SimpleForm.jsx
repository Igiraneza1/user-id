import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
    username: z.string().min(5, {message: "Enter username and should be at least 5 characters"}),
    email : z.string().email("Enter a valid email"),
    age : z.number().min(18, {message: "You must be at least 18 years old"}),
});

function SimpleForm() {

    const form = useForm({
        resolver:zodResolver(formSchema),
    });
    function onSubmit(data) {
        console.log(data);
        alert("form submission was successful");
    }
    
    return(
        <form onSubmit = {form.handleSubmit(onSubmit)}>
        <div className='flex  justify-center items-center flex-col input'>
            <input type="text"
            placeholder='Enter username'{...form.register("username")}/>
            {form.formState.errors.username && <p>{form.formState.errors.username.message}</p>}<br/>
            <input type="email"
            placeholder='Enter your email'{...form.register("email")} />
            {form.formState.errors.email && <p>{form.formState.errors.email.message}</p>}<br/>

            <input type="number"
            placeholder='Enter your age'{...form.register("age")} />
            {form.formState.errors.age && <p>{form.formState.errors.age.email}</p>}<br/>

        </div>
        <button className="cuesor-pointer bg-cyan-600 p-2"
        >Submit</button>

        </form>
    )
}
export default SimpleForm;