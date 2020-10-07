
import { Text as TextM } from 'react-native-magnus'
import React from 'react';
import { StyleSheet } from 'react-native';

const Text = ({ children, fontFamily = 'Montserrat_700Bold', style, ...otherProps }: any) => {
    const dynamicStyle = StyleSheet.create({
        magnusTextProps: {
            fontFamily
        }
    })
    const combineStyles = StyleSheet.flatten([dynamicStyle.magnusTextProps, style]);

    return <TextM style={combineStyles} {...otherProps}>
        {children}
    </TextM>
}



export default Text;