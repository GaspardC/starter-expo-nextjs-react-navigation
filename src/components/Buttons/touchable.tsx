import React from 'react';
import { TouchableOpacity as NativeTouchableOpacity, View, TouchableWithoutFeedback } from 'react-native'
import { isWeb } from '../../helpers/utils';

const TouchableOpacity = ({ children, onPress, ...otherProps }) => {

    if (isWeb()) return <TouchableWithoutFeedback {...{ onPress: onPress }}>
        <View {...otherProps}>
            {children}
        </View>
    </TouchableWithoutFeedback>

    // native
    return <NativeTouchableOpacity onPress={onPress} {...otherProps}>{children}</NativeTouchableOpacity>
}

export default TouchableOpacity