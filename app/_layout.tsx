import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '@/styles/global-style'

const _layout = () => {

  return (
    <View style={globalStyles.background}>
      <Slot/>
    </View>
  );
};

export default _layout;
