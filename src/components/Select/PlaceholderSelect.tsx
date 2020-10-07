
import React from 'react'
import { Div, Image } from 'react-native-magnus';
import { COLORS } from '../../config/theme/theme';
import FONTS from '../../config/theme/fonts';
import { isDevice } from '../../helpers/utils';
import { ARROW_R_ICON } from '../../assets/images';
import Text from '../Text/index';

const PlaceHolderContent = ({ displayArrow = isDevice(), option }: { displayArrow?: boolean, option?: string }) => <><Div flex={3}>
    <Text color='black200' fontSize="md" fontFamily={FONTS.Montserrat_500Medium}>Options</Text>
    <Text color={COLORS.black200} fontSize="sm" fontFamily={FONTS.Montserrat_500Medium}>{option ?? 'Choisir une option'}</Text>
</Div>
    {displayArrow && <Div row mr='md' justifyContent='flex-end' flex={1} p={4}>
        <Image resizeMode='contain' w={20} h={20} source={ARROW_R_ICON}></Image>
    </Div>}
</>
export default PlaceHolderContent;