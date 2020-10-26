import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import Router from 'next/router';

import firebase from '../firebase';

import Layout from '../components/layout/Layout';
import { Form, FormField, InputSubmit, Error } from '../components/ui/Form';

import useValidation from '../hooks/useValidation';
import validateLogin from '../validation/validateLogin';
import { firestore } from 'firebase';

const INITIAL_STATE = {
  email: '',
  password: ''
}

const Login = () => {

  const [error, setError] = useState(false);

  const { values, errors, submitForm, handleChange, handleSubmit, handleBlur } = useValidation(INITIAL_STATE, validateLogin, login);
  const { email, password } = values;

  async function login(){
    try {
      await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
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
      >Iniciar Sesión</h1>
      <Form
        onSubmit={handleSubmit}
        noValidate
      >

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

export default Login;