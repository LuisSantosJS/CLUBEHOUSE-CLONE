import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f0e4',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonView: {
        width: width,
        position: 'absolute',
        top: height - (width * 0.45),
        left: 0,
        right: 0,
        height: width * 0.24,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    startRoom: {
        width: width * 0.5,
        height: width * 0.12,
        borderRadius: width * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#28ae61'
    },
    textStart: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: width * 0.055
    },
    textStart0: {
        fontSize: width * 0.07
    },
    menu: {
        width: width * 0.04,
        height: width * 0.04
    },
    view: {
        width: width,
        alignItems: 'center'
    },
    viewItem: {
        width: width * 0.9,
        height: width * 0.6,
        borderRadius: width * 0.05,
        backgroundColor: 'white'
    },
    viewItem0: {
        width: width * 0.9,
        borderRadius: width * 0.05,
        height: width * 0.25,
        alignItems: 'flex-start',
        paddingHorizontal: width * .04,
        justifyContent: 'space-around',
        backgroundColor: '#e7e4d5'

    },
    textLembrete: {
        color: '#707070',
        fontSize: width * 0.04
    },
    titleItem: {
        fontSize: width * 0.05,
        color: '#191919',
        padding: 20
    },
    bodyItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    columsAvatar: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%'
    },
    columsNames: {
        width: '60%',
        height: '100%'
    },
    names: {
        fontSize: width * 0.055,
        color: '#707070',
        textAlign: 'left',
        paddingHorizontal: width * 0.04

    },
    avatarItem: {
        width: width * 0.13,
        height: width * 0.13,
        borderRadius: (width * 0.1) / 2
    }

});
export default styles;