
export enum COLORS {
    white = 'white',
    success400 = 'success400',
    orange400 = 'orange400',
    orange600 = 'orange600',
    violet400 = 'violet400',
    orange300 = 'orange300',
    black200 = 'black200'
}
export const theme = {
    colors: {
        [COLORS.orange300]: '#FF8A62',
        [COLORS.orange400]: '#DB913C',
        [COLORS.orange600]: '#F29520',
        [COLORS.violet400]: '#6C2D75',
        [COLORS.success400]: '#32DE8A',
        background: '#FAF7FA',
        white: '#FFF',
        black200: '#333333',
        transparent: 'transparent'
    },
    fontSize: {
        xxs: 8,
        xs: 11,
        small: 14,
        medium: 16,
        large: 20,
        xLarge: 24
    },
    screenSize: {
        screenXxs: 320,
        screenXs: 480,
        screenS: 580,
        screenSm: 768,
        screenMd: 900,
        screenL: 1024,
    },
    spacing: {
        xxs: 5,
        xs: 8,
        sm: 10,
        smd: 15,
        md: 20,
        lg: 30,
        xl: 40,
        '2xl': 60,
        '3xl': 90
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 30,
    },
    shadowSm: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    radius: {
        md: 4,
        lg: 16,
        xl: 20,
        '3xl': 200,
    },
    rounded: {
        '3xl': 50
    }
};
