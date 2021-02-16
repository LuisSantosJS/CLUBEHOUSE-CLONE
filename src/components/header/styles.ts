import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    header: {
        width: width,
        height: width * 0.23,
        flexDirection:'row',
        alignItems:'flex-end',
        padding: 10,
        justifyContent:'space-between',
        paddingHorizontal: width*0.05,
        backgroundColor: '#f2f0e4'
    },
    padding:{
        padding: 4,
        backgroundColor: '#f2f0e4'
    },
    row:{
        flexDirection:'row',
        width:'60%',
        alignItems:'center',
        justifyContent:'space-between'
    },
    avatar:{
        width: width*0.1,
        height: width*0.1,
        borderRadius: (width*0.1)/2
    },
    icon:{
        width: width*0.07,
        height: width*0.07,
    }

});
export default styles;