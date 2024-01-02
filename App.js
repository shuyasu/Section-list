/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import "react-native-gesture-handler"
import {
      SafeAreaView,
      ScrollView,
      StatusBar,
      StyleSheet,
      Text,
      useColorScheme,
      View,
} from 'react-native';

// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './src/redux/store';
// import { Provider } from 'react-redux';
import Route from './src/Route';

function App() {
      if (Text.defaultProps) {
            Text.defaultProps.allowFontScaling = false;
      } else {
            Text.defaultProps = {};
            Text.defaultProps.allowFontScaling = false;
      }

      return (
            <Route />
            // <Provider store={store}>
            //       <PersistGate loading={null} persistor={persistor}>
            //             <Route />
            //       </PersistGate>
            // </Provider>
      );
}

export default App;
