import React from 'react';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

const AddCard = () => {
    const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
  return (
        <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Nombre</label>
            <input
                className="form-control"
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
       />
       {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Apellido</label>
            <input
            className="form-control"
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
       />
       {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
       />
       {formik.errors.email ? <div>{formik.errors.email}</div> : null}
       
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
  )
}

export default AddCard