/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {View} from 'react-native';
import {BasicForm} from './BasicForm.js';
import {Welcome} from './Welcome.js';



class Main extends Component{
  render(){
    return (    
      <View>
      <BasicForm/>
      <Welcome/>
     </View>
     );
  }
}

export default Main;
