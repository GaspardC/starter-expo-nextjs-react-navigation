import React, { forwardRef } from 'react';
import Select from "."


const SelectWrapper = ({ setSelectedVariant, variants }: { setSelectedVariant: any, variants: any[] }, selectRef) => {
    return <Select ref={selectRef} {...{ setSelectedVariant }} options={variants.map((variant, index) => ({
        variant,
        value: index,
        label: `${variant?.label}`
    }))} />
}

export default forwardRef(SelectWrapper)
