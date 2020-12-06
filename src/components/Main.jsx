// import React from 'react';
import logo from '../logo.svg';
import products from '../db.json';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserData from './components/UserData';
import OnLoadingUserData from './components/OnLoadingUserData';

function Main() {

    const DataLoading =  LoadingPersonsData(UserData);
  
    const [appState, setAppState] = useState(
      {
        loading: false,
        persons: null,
      }
    )
  
   useEffect(() => {
      setAppState({loading: true})
      const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
      axios.get(apiUrl).then((resp) => {
        const allPersons = resp.data;
        setAppState({
        loading: false,
        persons: allPersons
         });
      });
    }, [setAppState]);
  
  
    return (
      <div className="app">
          <DataLoading isLoading={appState.loading} persons={appState.persons} />
      </div>
    );
  }
  
//   export default App;
export default Main;