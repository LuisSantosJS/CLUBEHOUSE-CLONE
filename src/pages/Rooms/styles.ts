import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f0e4',
        width: width * .8
    },
    text: {
        color: '#707070',
        fontSize: width * 0.04,
        padding: 10
    },
    view: {
        width: width * .8,
        alignItems: 'center'
    },
    viewItem: {
        flexDirection: 'row'
    },
    avatar: {
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: width * 0.04
    },
    colums: {
        width: '60%',
        paddingHorizontal: width * 0.05

    },
    name: {
        fontSize: width * 0.045,
        color: '#191919'
    },
    desc: {
        fontSize: width * 0.04,
        color: '#707070'
    },
    greenChat: {
        backgroundColor: "#97d5ae",
        width: width * 0.14,
        height: width * 0.05,
        borderRadius: width*0.03,
        alignItems:'center',
        justifyContent:'center'
    },
    textRoom:{
        fontSize: width*0.03,
        color:'#18562f'
    }
});
export default styles;