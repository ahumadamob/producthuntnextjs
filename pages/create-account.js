import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import Router from 'next/router';

import firebase from '../firebase';

import Layout from '../components/layout/Layout';
import { Form, FormField, InputSubmit, Error } from '../components/ui/Form';

import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validation/validateCreateAccount';
import { firestore } from 'firebase';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

const CreateAccount = () => {

  const [error, setError] = useState(false);

  const { values, errors, submitForm, handleChange, handleSubmit, handleBlur } = useValidation(INITIAL_STATE, validateCreateAccount, createAccount);
  const { name, email, password } = values;


  async function createAccount(){
    try {
      await firebase.registerAccount(name, email, password);
      Router.push('/');
    } catch (error) {
      console.error('Error al crear el usuario en Firebase', error.message);
      setError(error.message);
    }
    
  }

  return (
        /** @jsx jsx */
        <div>
        <Layout>
          <>
          <h1
            css={css`
              text-align: center;
              margin-bottom: 5rem;
            `}
          >Crear Cuenta</h1>
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
  
            <FormField>
              <label htmlFor="name">Nombre</label>
              <input 
                type="text"
                id="name"
                placeholder="Tu Nombre"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormField>
            {errors.name && <Error>{errors.name}</Error>}
  
            <FormField>
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                id="email"
                placeholder="Tu Email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormField>
            {errors.email && <Error>{errors.email}</Error>}
            {error && <Error>{error}</Error>}
  
            <FormField>
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                id="password"
                placeholder="Tu Password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormField>
            {errors.password && <Error>{errors.password}</Error>}
  
            <InputSubmit 
              type="submit"
              value="Iniciar Sesión"
            />
          </Form>
  
          </>
        </Layout>
      </div>
  );
}

export default CreateAccount;