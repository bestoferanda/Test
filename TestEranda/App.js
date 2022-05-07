import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { persistor, store } from './app/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Routes from './app/screens/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'dark-content'} />
          <Routes />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;
