import React from 'react'
import { View, Text, Dimensions } from 'react-native'

const Dimensions = () => {

    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    return deviceHeight,deviceWidth

}

export default Dimensions
