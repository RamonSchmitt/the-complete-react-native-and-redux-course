import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDQAXoglXoWyYqR8lHhDkLsantdFsKPwoM',
      authDomain: 'manager-15f51.firebaseapp.com',
      databaseURL: 'https://manager-15f51.firebaseio.com',
      projectId: 'manager-15f51',
      storageBucket: 'manager-15f51.appspot.com',
      messagingSenderId: '60694724130'
    };
    firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
