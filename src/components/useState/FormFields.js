import React, { useState } from 'react';

import './FormFields.scss'

function FormFields() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form_field">
      <h1 className="form_field-title">Form fields</h1>
      <input
        className="form_field-input"
        name='email'
        value={email}
        placeholder='email'
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="form_field-input"
        name='password'
        type='password'
        value={password}
        placeholder='password'
        onChange={e => setPassword(e.target.value)}
      />
    </div>
  )
}

// const useForm = initialValues => {
//   const [values, setValues] = useState(initialValues);

//   return [
//     values,
//     e => {
//       setValues({
//         ...values,
//         [e.target.name]: e.target.value
//       });
//     }
//   ];
// };

// const FormFields = () => {
//   const [values, handleChange] = useForm({ email: "", password: "" });
//   const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

//   return (
//     <div>
//       <>
//         <input 
//           name="email" 
//           value={values.email} 
//           onChange={handleChange} 
//         />
//         <input
//           type="password"
//           name="password"
//           value={values.password}
//           onChange={handleChange}
//         />
//       </>
//     </div>
//   );
// };

export default FormFields;