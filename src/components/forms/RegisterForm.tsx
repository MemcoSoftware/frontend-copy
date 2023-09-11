import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup'; 

import { register } from '../../services/authService';
import { AxiosResponse } from 'axios';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { useNavigate } from 'react-router-dom';
import './styles/RegisterForm.css'
import DashboardMenuLateral from '../dashboard/DashboardMenulateral';




const RegisterUserForm = ()=>{
    const loggedIn = useSessionStorage('sessionJWTToken');
    const navigate = useNavigate();

    const initialValues = {
        number: 0,
        username: '',
        password: '',
        name: '',
        cedula: 0,
        telefono: '',
        email: '',
        more_info: '',
        roles: ''
    }

    // Schema Validation with Yup
    const registerUserSchema = Yup.object().shape(
        {
            number: Yup.number()
                .required('Number must be required'),
            username: Yup.string()
                .matches(/^[a-zA-Z]+\.[a-zA-Z]+$/,'Invalid username format: TRY [firstname.lastname]')
                .required('Username is mandatory'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .max(32, 'Password must be at most 32 characters')
                .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                'Password must contain at least one lowercase letter, one uppercase letter, and one digit')
                .required('Password is required'),
            name: Yup.string()
                .matches(
                    /^[A-Z][a-z]+ [A-Z][a-z]+$/,
                    'Name must be in the format "Firstname Lastname"')
                .required(' Name is required'),
            cedula: Yup.number().required('Identification must be entered'),
            telefono: Yup.string()
                .matches(/^\+\d{2} \d+$/, 'Invalid phone number format')
                .required('Telephone number format must be country code + phone number. Example: (+57 3102121212)'),
            email: Yup.string()
                .email('Invalid email format: [email@email.com]')
                .required('Email is required'),
            more_info: Yup.string()
                .required('More information is required. Try to enter user function: "Developer" ')

            
            
        }
    );    

    return (
        <div className='RegisterForm-body'>
            <DashboardMenuLateral/>
                {/* Formik wrapper */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={registerUserSchema}
                    onSubmit = {async(values)=>{
                        console.log("Submitting form: ", values);
                        if (!loggedIn){
                            navigate('/login');
                            return;
                        }
                        
                        const rolesArray = [{ name: values.roles }];

                        register(values.number,
                            values.username,
                            values.password,
                            values.name,
                            values.cedula,
                            values.telefono,
                            values.email,
                            values.more_info,
                            rolesArray)
                        .then((response: AxiosResponse)=>{
                            if (response.status === 200){
                                console.log('User registered successfully')
                                console.log(response.data)
                            }else{
                                throw new Error('Register Error')
                            }
                        }).catch((error: any)=> console.error(`[REGISTER ERROR]: Something went wrong: ${error}`))         
                        
                      }}
                
                >
                    {
                            ({values, touched, errors, isSubmitting, handleChange, handleBlur, }) => (
                    <div className='RegisterForm-box'>
                                <Form className='RegisterForm-form'>
                                <h2>Registrar Usuario</h2>
                                { /* Number Field*/ }
                        <div className='Columna-1'>        
                            <div className='RegisterForm-inputBox'>
                                <Field className = 'RegisterForm-Field' id='number' type= 'text' name='number'  />
                                <span>Número de Usuario</span>
                                <i></i>
                                {/* Number Errors*/}
                                {
                                    errors.number && touched.number && (
                                        <ErrorMessage name='number' component='div'> </ErrorMessage>

                                    )
                                }
                                
                            </div>

                            <div className='RegisterForm-inputBox'>
                                { /* Username Field*/ }
                                <Field className = 'RegisterForm-Field' id='username' type= 'username' name='username' />
                                <span>Username</span>
                                <i></i>
                                {/* Username Errors*/}
                                {
                                    errors.username && touched.username && (
                                        <ErrorMessage name='username' component='div'> </ErrorMessage>

                                    )
                                }

                            </div>

                            <div className='RegisterForm-inputBox'>
                                { /* Password Field*/ }
                            
                                <Field className = 'RegisterForm-Field' id='password' type= 'password' name='password'/>
                                <span>Clave</span>
                                <i></i>
                                {/* Password Errors*/}
                                {
                                    errors.password && touched.password && (
                                        <ErrorMessage name='password' component='div'> </ErrorMessage>

                                    )
                                }
                            </div>

                            <div className='RegisterForm-inputBox'>
                                { /* Name Field*/ }
                                <Field className = 'RegisterForm-Field' id='name' type= 'name' name='name'  />
                                <span>Nombre 'Nombre Apellido'</span>
                                <i></i>
                                {/* Name Errors*/}
                                {
                                    errors.name && touched.name && (
                                        <ErrorMessage name='name' component='div'> </ErrorMessage>

                                    )
                                }

                            </div>
                            
                            <div className='RegisterForm-inputBox'>
                                { /* Cedula Field*/ }
                                <Field className = 'RegisterForm-Field' id='cedula' type= 'cedula' name='cedula'/>
                                <span>Cedula</span>
                                <i></i>
                                {/* Cedula Errors*/}
                                {
                                    errors.cedula && touched.cedula && (
                                        <ErrorMessage name='cedula' component='div'> </ErrorMessage>

                                    )
                                }

                            </div>
                        </div>    
                        <div className='Columna-2'>          
                            <div className='RegisterForm-inputBox'>
                                { /* Telefono Field*/ }
                                <Field className = 'RegisterForm-Field' id='telefono' type= 'telefono' name='telefono'/>
                                <span>Telefono</span> 
                                <i></i>
                                {/* Telefono Errors*/}
                                {
                                    errors.telefono && touched.telefono && (
                                        <ErrorMessage name='telefono' component='div'> </ErrorMessage>

                                    )
                                }
                            </div>

                            <div className='RegisterForm-inputBox'>
                                { /* email Field*/ }
                                <Field className = 'RegisterForm-Field' id='email' type= 'email' name='email'/>
                                <span>Email</span>
                                <i></i>
                                {/* email Errors*/}
                                {
                                    errors.email && touched.email && (
                                        <ErrorMessage name='email' component='div'> </ErrorMessage>

                                    )
                                }
                            </div>


                            <div className='RegisterForm-inputBox'>
                                { /* More Info Field*/ }
                                <Field className = 'RegisterForm-Field' id='more_info' type= 'more_info' name='more_info'  />
                                <span>Mas Información</span>
                                <i></i>
                                {/* More Info Errors*/}
                                {
                                    errors.more_info && touched.more_info && (
                                        <ErrorMessage name='email' component='div'> </ErrorMessage>

                                    )
                                }

                            </div>

                            <div className='RegisterForm-inputBox'>
                                { /* Roles Field */ }
                                <Field className = 'RegisterForm-Field' id='roles' as='select' name='roles'>
                                <option value='' disabled>Seleccione un rol</option>
                                <option value='user'>Invitado</option>
                                <option value='coordinador'>Tecnico</option>
                                <option value='coordinador'>Coordinador</option>
                                <option value='analista'>Analista</option>
                                <option value='comercial'>Comercial</option>
                                <option value='contabilidad'>Contable</option>
                                <option value='almacen'>Almacen</option>
                                

                                </Field>
                                <span>Tipo de Rol</span>
                                <i></i>
                                {/* Agrega más opciones de roles según tus necesidades */}
                                {/* Roles Errors */}
                                {
                                    errors.roles && touched.roles && (
                                        <ErrorMessage name='roles' component='div'> </ErrorMessage>
                                    )
                                }

                            </div>
                        </div>         
                                {/* Register Button*/}
                                <button className="RegisterForm-button" type="submit">Registrar</button>
                                {/* Message if the form is submitting*/}
                                {
                                    isSubmitting ? (
                                        <p>Registrando...</p> 
                                    ): null
                                }
                     

                                </Form>
                    </div>
                        
                        )
        }






                </Formik>
        </div>
    )

}

export default RegisterUserForm;