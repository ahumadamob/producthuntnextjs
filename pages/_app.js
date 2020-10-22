import '../styles/globals.css'
import firebase, { FirebaseContext } from '../firebase';

const MyApp = props => {

  const { Component, pageProps } = props;

  return (
    <FirebaseContext.Provider
      value={{
        FirebaseContext
      }}
    >
      <Component {...pageProps} />

    </FirebaseContext.Provider>
  );
  
}

export default MyApp;
