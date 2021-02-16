import React from 'react';
import { Text, View, FlatList, Image } from 'react-native'
import styles from './styles'
import { Data, data } from './data'

interface Props {
    navigation: any;
}
const Rooms: React.FC<Props> = () => {


    const renderItem = (item: Data, index: number) => {
        return (
            <>
                <View style={styles.view}>
                    <View style={styles.viewItem}>
                        <Image style={styles.avatar} source={require('../../assets/avatar.jpg')} />
                        <View style={styles.colums}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.desc}>{item.desc}</Text>
                        </View>
                        <View style={styles.greenChat}>
                            <Text style={styles.textRoom}>ROOM</Text>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    return (
        <>
            <View style={styles.container} >
                <Text style={styles.text}>AVAILABLE TO CHAT ------</Text>
                <FlatList
                    renderItem={({ item, index }) => renderItem(item, index)}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
                    data={data}
                    style={{ flex: 1 }}
                />
            </View>
        </>
    )
}
export default Rooms;