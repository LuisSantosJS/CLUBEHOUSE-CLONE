import React from 'react';
import { View, ScrollView } from 'react-native'
import styles from './styles'
import Home from '../Home'
import Rooms from '../Rooms'
import Header from '../../components/header'
import { useNavigation } from '@react-navigation/native'

const Main: React.FC = () => {
    const navigation = useNavigation()
    return (
        <>
            <View style={styles.container} >
                <Header navigation={navigation} />
                <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled style={{ flex: 1 }} horizontal>
                    <Home navigation={navigation} />
                    <Rooms navigation={navigation} />
                </ScrollView>
            </View>
        </>
    )
}
export default Main;