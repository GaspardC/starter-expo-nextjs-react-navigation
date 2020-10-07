import React from 'react';
import Text from '../Text';
import { TouchableOpacity } from 'react-native'
import * as WebBrowser from 'expo-web-browser';


const Link = ({ text, link, linkName, textAlign = 'center', ...otherProps }: { text: string, textAlign?: string, link?: string, linkName?: string, [x: string]: any }) => {
    return <TouchableOpacity {...{ onPress: () => { WebBrowser.openBrowserAsync(link ?? text) } }} {...otherProps}>
        <Text {...{ textAlign }}>{text}<Text color='violet400' textDecorationLine='underline' >
            {linkName}
        </Text>
        </Text>

    </TouchableOpacity>
}

export default Link