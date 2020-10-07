import React from 'react';
import { Button, } from "react-native-magnus";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, } from 'react-native';
import { theme } from '../../config/theme/theme';
import { noop, isWeb } from '../../helpers/utils';
import Text from '../Text';

const BUTTON_DIMS = {
    width: 170,
    height: 40
}
type PrimaryButtonProps = { children, onPress, w?, colorStart?, colorEnd?, style?}
export const PrimaryButton = ({ children, onPress = noop, w = null, colorStart = colors.orange400, colorEnd = colors.orange600 }: PrimaryButtonProps) => {
    //@ts-ignore
    return <LinearGradient
        style={[styles.gradientContainer, { backgroundColor: colors.orange400, width: w ?? BUTTON_DIMS.width, minWidth: w ?? BUTTON_DIMS.width }]}
        colors={[colorStart, colorEnd]}
        start={[0.1, 50]}
        end={[0.9, 50]}
    >
        <Button bg='transparent' {...{ onPress }} py='sm' px='sm' h={BUTTON_DIMS.height} w={w ?? BUTTON_DIMS.width} minW={w ?? BUTTON_DIMS.width}>
            <Text style={styles.text}>{children}</Text>
        </Button>
    </LinearGradient>
}


export const SecondaryButton = (props: any) =>
    <PrimaryButton {...props} colorStart={colors.gray100} colorEnd={colors.gray200} />


const { colors, radius, shadow } = theme;

const styles = StyleSheet.create({
    gradientContainer: {
        borderRadius: isWeb() ? radius["3xl"] : radius.xl,
        shadowColor: shadow.shadowColor,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        width: BUTTON_DIMS.width,
        height: BUTTON_DIMS.height
    },
    text: {
        color: colors.white
    }
})