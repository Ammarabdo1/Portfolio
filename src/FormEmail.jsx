import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormEmail = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_n4k7riq', 'template_iz9pgtc', form.current, {
          publicKey: 'pfxdu4KiqtCIG86sk',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
          e.target.reset()
        );
    };


  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='Name' placeholder='Name' className='Text' />

            <input type="text" name='Company' placeholder='Company' className='Text' />

            <input type="Email" name='Email' placeholder='Email' className='Text' />

            <input type="Phone" name='Phone' placeholder='Phone' className='Text' />

            <textarea type="text-area" name='Massage' placeholder='Massage' className='Massage' />

            <input type='submit' name='submit' value='Send Message' className='Submit' />

        </form>
    </div>
  )
}

export default FormEmail