

import React, { useEffect, useState, useImperativeHandle } from 'react'
import { Div, Button, Select as SelectM, Image, Icon } from "react-native-magnus";
import Text from '../Text/index';
import FONTS from '../../config/theme/fonts';
import { TouchableOpacity } from 'react-native'
import { COLORS } from '../../config/theme/theme';
import PlaceHolderContent from './PlaceholderSelect';




export type SelectProps = { options: Array<{ value: any, label: string, variant: any }>, setSelectedVariant }
const Select = ({ options = [{ value: 1, label: 'Option 1', variant: null }], setSelectedVariant }: SelectProps, selectRef: any) => {

    const optionsLabel = options.map(({ label }) => label);
    const [selectValue, setSelectedValue] = useState(optionsLabel[0])

    useImperativeHandle(selectRef, () => ({
        ...selectRef.current,
        selectValue,
        setSelectedValue
    }))

    useEffect(() => {
        const selectedVariant = options.find(opt => opt.label === selectValue)?.variant
        if (setSelectedVariant) setSelectedVariant(selectedVariant)
    }, [selectValue])

    return <Div>
        <TouchableOpacity onPress={() => selectRef.current.open()} style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
            <PlaceHolderContent option={selectValue} />
        </TouchableOpacity>
        <SelectM.Container
            onSelect={setSelectedValue}
            ref={selectRef}
            value={selectValue}
            title="Choisissez une option"
            mt="md"
            pb="2xl"
            mb="2xl"
            message=""
            roundedTop="xl"
            footer={<Div row justifyContent='center'><Button
                {...{ onPress: () => selectRef.current.close() }}
                mt="lg"
                w={300}
                h={40}
                ml="md"
                px="xl"
                py="lg"
                bg={COLORS.violet400}
                rounded="circle"
                color="white"
                shadow={2}
            >
                <Text style={{ fontSize: 14, lineHeight: 14 }} fontFamily={FONTS.Montserrat_600SemiBold} color='white'>OK</Text>
            </Button>
            </Div>}
            data={optionsLabel}
            renderItem={(item, index) => (
                <SelectM.Option
                    value={item}
                    suffix={<Icon name={'check'} fontSize="text500" color={COLORS.orange600} mr="md" />}
                    py="md"
                    px="xl">
                    <Text fontFamily={FONTS.Montserrat_600SemiBold}>{item}</Text>
                </SelectM.Option>
            )}
        >
        </SelectM.Container>
    </Div>
}

export default React.forwardRef(Select)

