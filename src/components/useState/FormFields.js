import React, { useState } from 'react';

import './FormFields.scss'

// function FormFields() {

//   // primera versión
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // segnda versión
//   const [data, setData] = useState({email:'', password:''})

//   return (
//     <form className="form_field" onSubmit={() => console.log('formulario enviado')}>
//       <h1 className="form_field-title">Form fields</h1>
//       <input
//         className="form_field-input"
//         name='email'
//         //1a V
//         //value={email}

//         //2da V
//         value={data.email}
//         placeholder='email'
//         // 1a V
//         // onChange={e => console.log(e) || setEmail(e.target.value)} // función que contiene el callback que "espera" un evento 
        
//         // 2da V
//         onChange={e => setData({ ...data, email:e.target.value})} // función que contiene el callback que "espera" un evento 
        
//       />
//       <input
//         className="form_field-input"
//         name='password'
//         type='password'
//         // 1a V
//         // value={password}

//         // 2da V
//         // value={data.password}
//         placeholder='password'
//         onChange={e => setData({...data, password: e.target.value})}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   )
// }


// CUSTOM HOOKS  la idea es separar la parte presentacional

const useForm = initialValues => {   // al ejecutarse la info desde ** se le pasa los parámetros
  const [data, setData] = useState(initialValues);

  return [data, e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
    }
  ];
};

const FormFields = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

  return (
    <form onSubmit={() => console.log('submit form')}>
      <>
        <input 
          name="email" 
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
      <button type="submit">submit</button>
    </form>
  );
};

export default FormFields;