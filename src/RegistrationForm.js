import React, { useState } from 'react'; 
import { Formik, Form, Field } from 'formik'; 
import axios from 'axios';  
 
const Auth = () => { 
    const [message,  setMessage] = useState('');

    const handleSubmit = async (values) => { 
        try { 
            const response = await axios.post('http://localhost:8000/users/', { 
                name: values.name, 
                email: values.email 
            }); 
            setMessage('Вы успешно зарегистрированы!');
            console.log('Вы успешно зарегистрированы!', response.data);
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        } 
    }; 
    

    return ( 
        <div> 
            <div className="auth-container"> 
                <Formik 
                        initialValues={{ name: "", email: "" }} 
                        onSubmit={handleSubmit} 
                    > 
                        {() => ( 
                            <Form> 
                                <div className="form-group"> 
                                    <label htmlFor="name" className='label'> Имя </label> 
                                    <Field 
                                        type="name" 
                                        name="name" 
                                        className="form-control input" 
                                    /> 
                                </div> 
                                <div className="form-group"> 
                                    <label htmlFor="email" className='label'> Email </label> 
                                    <Field 
                                        type="email" 
                                        name="email" 
                                        className="form-control input1" 
                                    /> 
                                </div> 
                                <button type="submit" className="auth-button">Зарегистрироваться</button> 
                            </Form>     
                        )} 
                    </Formik> 
                </div> 
                <div id="message">{message}</div>
            </div>         
    ); 
} 
 
export default Auth;