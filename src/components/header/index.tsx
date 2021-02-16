import React from 'react';
import styles from './styles';
import { View, Image } from 'react-native'
//@ts-ignore
import avatarIcone from '../../assets/avatar.jpg'
//@ts-ignore
import searchIcon from '../../assets/search.png'
//@ts-ignore
import inviteIcon from '../../assets/invite.png'
//@ts-ignore
import notiIcon from '../../assets/noti.png'
//@ts-ignore
import calendarIcon from '../../assets/calendar.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
interface Props {
    navigation: any;
}
const Header: React.FC<Props> = ({ navigation }) => {
    return (
        <>

            <View style={styles.header}>

                <Image resizeMode='contain' style={styles.icon} source={searchIcon} />

                <View style={styles.row}>
                    <Image resizeMode='contain' style={styles.icon} source={inviteIcon} />
                    <Image resizeMode='contain' style={styles.icon} source={calendarIcon} />
                    <Image resizeMode='contain' style={styles.icon} source={notiIcon} />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Profile')}>
                        <Image style={styles.avatar} source={avatarIcone} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Header;