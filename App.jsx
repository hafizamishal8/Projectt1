// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigations/StackNavigator';
// import { Provider } from 'react-redux';
// import { store } from './src/redux/store';

// const App = () => (
//   <Provider store={store}>
//     <NavigationContainer>
//       <StackNavigator />
//     </NavigationContainer>
//   </Provider>
// );

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigations/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}




