import React from 'react';
import {
    Image,
    Text,
    FlatList,
    View
} from 'react-native'
import styles from './styles'
import { data, Data } from './data'
import LinearGradient from 'react-native-linear-gradient';
//@ts-ignore
import MenuIcon from '../../assets/menu.png'
interface Props {
    navigation: any;
}
const Home: React.FC<Props> = () => {

    const renderItem = (item: Data, index: number) => {
        return (
            <>
                <View style={styles.view}>
                    <View style={styles.viewItem}>
                        <Text style={styles.titleItem} >{item.title}</Text>
                        <View style={styles.bodyItem}>
                            <View style={styles.columsAvatar} >
                                <Image source={require('../../assets/avatar.jpg')} resizeMode='contain' style={styles.avatarItem} />
                                <Image source={require('../../assets/avatar.jpg')} resizeMode='contain' style={[styles.avatarItem, {top: -35, left: 15}]} />
                            </View>
                            <View style={styles.columsNames} >
                                <Text style={styles.names}>Luis Santos</Text>
                                <Text style={styles.names}>Luis Santos</Text>
                                <Text style={styles.names}>Luis Santos</Text>
                                <Text style={styles.names}>Luis Santos</Text>
                                <Text style={styles.names}>Luis Santos</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <>

            <View style={styles.container}>
                <FlatList
                    renderItem={({ item, index }) => renderItem(item, index)}
                    keyExtractor={(item) => String(item.id)}
                    ListHeaderComponent={() => <View style={styles.view}>
                        <View style={{ padding: 10 }} />
                        <View style={styles.viewItem0}>
                            <Text style={styles.textLembrete}>20:20 #clubeBBB21 | edição 12</Text>
                            <Text style={styles.textLembrete}>20:30 Falando na intenet - 1 minuto</Text>
                            <Text style={styles.textLembrete}>20:25 Fooc empreendorismo</Text>
                        </View>
                        <View style={{ padding: 10 }} />
                    </View>}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
                    data={data}
                    style={{ flex: 1 }}
                />

                <LinearGradient style={styles.buttonView} colors={["#ffffff00", '#f2f0e4']}>
                    <View style={styles.menu} />
                    <View style={styles.startRoom}>
                        <Text style={styles.textStart}><Text style={styles.textStart0}>{'+'}</Text> Start a room</Text>
                    </View>
                    <Image source={MenuIcon} style={styles.menu} />
                </LinearGradient>
            </View>

        </>
    )
}
export default Home;