import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>
        <Formik
            initialValues= {{
              name: '',
              email: '',
              password1: '',
              password2: ''
            }}
            onSubmit={ ( values ) => {
              console.log( values );
            }}
            validationSchema = { Yup.object({
              name: Yup.string()
                        .min(2, 'Debe de tener 3 caracterres o mas')
                        .max(15, 'Debe de tener 15 caracterres o menos')
                        .required('Requerido'),
              email: Yup.string()
                          .min(6, 'Debe de tener 6 caracterres o mas')
                          .email('Revise el formato del correo')
                          .required('Requerido'),
              password1: Yup.string()
                                .min(6, 'Mínimo 6 letras')
                                .required('Requerido'),
              password2: Yup.string()
                                .oneOf( [Yup.ref('password1'), 'Las contraseñas no son iguales' ])
                                .required('Requerido')
            }) }
        >
          { ({ handleReset }) => (
                <Form>
                    <MyTextInput
                        label="Name"
                        name="name"
                        placeholder="Eduardo"
                    />
     
                    <MyTextInput
                        label="Email Address"
                        name="email"
                        placeholder="eduardo.loo@pucp.pe"
                        type="email"
                    />

                    <MyTextInput
                        label="Password"
                        name="password1"
                        placeholder="Password"
                        type="password"
                    />

                    <MyTextInput
                        label="Password"
                        name="password2"
                        placeholder="Repeat Password"
                        type="password"
                    />

                    <button type="submit">Submit</button>
                    <button type="button" onClick={ handleReset } >Reset</button> 
                </Form>
              )
          }
        </Formik>
    </div>
  )
}
