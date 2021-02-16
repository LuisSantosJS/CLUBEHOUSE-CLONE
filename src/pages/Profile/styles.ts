import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f0e4',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        width: width,
        height: width * 0.2,
        alignItems: 'flex-end',
        backgroundColor: '#f2f0e4',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: width * 0.04,
        flexDirection: 'row'
    },
    back: {
        width: width * 0.06,
        height: width * 0.06
    },
    back0: {
        width: width * 0.065,
        height: width * 0.065
    },
    row: {
        width: width,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: width * 0.04,
        padding: 5,
        justifyContent: 'flex-start'
    },
    avatar: {
        width: width * 0.22,
        height: width * 0.22,
        borderRadius: width * 0.09
    },
    name: {
        fontSize: width * 0.055,
        color: '#707070'
    },
    name0: {
        fontSize: width * 0.04,
        color: '#707070',
        flexDirection:'row',
    },
    follow: {
        fontSize: width * 0.05,
        color: '#707070'
    },
    icon: {
        maxWidth: width*0.05,
        maxHeight:  width*0.05,
    }

});
export default styles;