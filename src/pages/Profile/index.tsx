import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
//@ts-ignore
import arrowIcon from '../../assets/arrow.png'
//@ts-ignore
import profileIcon from '../../assets/config.png'
//@ts-ignore
import avatar from '../../assets/avatar.jpg'
//@ts-ignore
import insta from '../../assets/insta.png'
//@ts-ignore
import twitter from '../../assets/twitter.png'
import { useNavigation } from '@react-navigation/native'

const Profile: React.FC = () => {
    const navigation = useNavigation()
    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <Image resizeMode='contain' style={styles.back} source={arrowIcon} />
                </TouchableOpacity>
                <Image resizeMode='contain' style={styles.back0} source={profileIcon} />

            </View>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image style={styles.avatar} source={avatar} />

                </View>
                <View style={styles.row}>
                    <Text style={styles.name}>Luis Santos</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.name0}>@luissantos.tsx</Text>
                </View>
                <View style={{ padding: 7 }} />
                <View style={styles.row}>
                    <Text style={styles.follow}><Text style={{ fontWeight: 'bold' }}>9999</Text> followers</Text>
                    <View style={{ padding: 5 }} />
                    <Text style={styles.follow}><Text style={{ fontWeight: 'bold' }}>9999</Text> following</Text>
                </View>


                <View style={{ padding: 7 }} />
                <View style={[styles.row]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={styles.icon} resizeMode='contain' source={twitter} />
                        <View style={{ padding: 5 }} />
                        <Text style={styles.follow}>LuisSantos_tsx</Text>
                    </View>
                    <View style={{ padding: 7 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={styles.icon} resizeMode='contain' source={insta} />
                        <View style={{ padding: 5 }} />
                        <Text style={styles.follow}>luissantos.tsx</Text>
                    </View>
                </View>

            </View>
        </>
    )
}
export default Profile;