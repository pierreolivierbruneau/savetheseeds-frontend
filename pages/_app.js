import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";

// redux-persist imports
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
// redux imports
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';
import { Provider } from 'react-redux';

const reducers = combineReducers({ user });


const persistConfig = { key: 'savetheseeds', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });

 const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Head>
        <title>save the seeds</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </PersistGate>
    </Provider>
  );
}

export default App;
