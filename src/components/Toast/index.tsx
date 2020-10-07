import React from 'react';
import { Icon, Snackbar, SnackbarRefType, Div } from 'react-native-magnus'

const snackbarLightRef = React.createRef<SnackbarRefType>();
const snackbarDarkRef = React.createRef<SnackbarRefType>();

export const toast = {
    success: unusedparam => { snackbarLightRef.current.show() },
    error: unusedparam => snackbarDarkRef.current.show()
}

const Snackbars = ({
    messageSuccess,
    messageError,
    duration = 4000
}: { messageSuccess: string, messageError?: string, duration?: number }) => {

    return <>
        <Snackbar
            suffix={
                <Icon
                    name="checkcircle"
                    color="success400"
                    fontSize="subheader"
                    fontFamily="AntDesign"
                />
            }
            onDismiss={() => { }}
            ref={snackbarLightRef}
            bg="green300"
            color="green800"
            duration={duration}
        >
            {messageSuccess}
        </Snackbar>
        <Snackbar
            suffix={
                <Icon
                    name="closecircleo"
                    color="white"
                    fontSize="subheader"
                    fontFamily="AntDesign"
                />
            }
            onDismiss={() => { }}
            ref={snackbarDarkRef}
            bg="red800"
            color="white"
            duration={duration}
        >
            {messageError}
        </Snackbar></>
}

export default Snackbars