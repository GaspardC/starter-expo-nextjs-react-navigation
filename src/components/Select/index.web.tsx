import React, { forwardRef, useState, useEffect } from 'react'
import SelectReact from 'react-select'
import { theme } from '../../config/theme/theme';
import FONTS from '../../config/theme/fonts';

import { View } from 'react-native';
import PlaceHolderContent from './PlaceholderSelect';
import { Div } from 'react-native-magnus';
import { SelectProps } from '.';



const customStyles = {
    option: (provided, state) => ({
        ...provided,
        // borderBottom: '1px dotted pink',
        fontFamily: FONTS.Montserrat_500Medium,
        color: state.isSelected ? theme.colors.orange600 : theme.colors.black200,
        backgroundColor: 'white',
        zIndex: 1000,
        fontSize: 12,
        opacity: 1,
        padding: 20,
    }),
    // control: () => ({
    //     // none of react-select's styles are passed to <Control />
    //     width: 200,
    // }),
    placeholder: (provided) => ({
        ...provided,
        fontFamily: FONTS.Montserrat_500Medium,
        fontSize: 12

    }),
    singleValue: (provided, state) => {
        // const opacity = state.isDisabled ? 0.5 : 1;
        // const transition = 'opacity 300ms';
        return {
            ...provided, fontFamily: FONTS.Montserrat_600SemiBold, fontSize: 12
        };
    },

}
const Placeholder = () => {
    return <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
        <PlaceHolderContent />
    </View>
}



const Select = ({ options = [{ value: 1, label: 'Option 1', variant: null }], setSelectedVariant }: SelectProps, selectRef: any) => {

    const [selectValue, setSelectedValue] = useState(options[0])

    useEffect(() => {
        if (setSelectedVariant) setSelectedVariant(selectValue.variant)
    }, [selectValue])

    return <Div mb={'xl'}>
        <SelectReact
            onChange={e => { console.log(e); setSelectedValue(e) }}
            value={selectValue}
            placeholder={<Placeholder />}
            options={options}
            styles={customStyles} />
    </Div>
}
export default forwardRef(Select);