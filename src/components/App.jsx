import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useId } from "react";


const App = () => {
  const [values, setValues] = useState({
    login: "",
    password: ""
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

   const handleSubmit = (evt) => {
     evt.preventDefault();
     
    console.log(values);

     setValues({
    login: "",
    password: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" value={values.login} onChange={handleChange}></input>
      <input type="password" name="password" value={values.password} onChange={handleChange}></input>
      <button type="submit">Login</button>
    </form>
  );
}


export default App;