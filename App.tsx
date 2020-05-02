import React from 'react';
import {SafeAreaView, View, Text, StatusBar, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Calendar from './components/calendar';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

// const styles = StyleSheet.create({
//   container: {
    
//   },
// });

const App = (props: any) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text onPress={props.click}>Hello, Godzilla</Text>
        </View>
        <View>
          <Text>{props.counter}</Text>
        </View>
        <View>
          <Calendar />
        </View>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state.main;
};
const mapDispatchToProps = (dispatch: any) => ({
  click: () => dispatch({
    type: 'DYA',
    payload: {
      request: {
        method: 'get',
      },
    },
  }),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
