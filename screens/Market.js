import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeImage from '../assets/images/bgscreen.png';
import Header from '../components/Header';
import Grab from '../assets/images/grab.png';
import Now from '../assets/images/now.png';
import Tiki from '../assets/images/tiki.png';
import Shopee from '../assets/images/shopee.png';
export default function Home({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <ImageBackground source={HomeImage} style={styles.image}>

                <View style={styles.featureList}>
                    <View style={{ marginBottom: 20, borderBottomColor: 'gray', borderBottomWidth: 2 }}>
                        <Text style={{ color: 'white', marginLeft: 10, marginBottom: 30, fontWeight: 'bold' }}>Ứng dụng thương mại điện tử</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 }}>
                            <Image source={Shopee} style={{ width: 50, height: 50 }} />
                            <Image source={Tiki} style={{ width: 50, height: 50 }} />
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: 'white', marginLeft: 10, marginBottom: 30, fontWeight: 'bold' }}>Ứng dụng đặt đồ ăn</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 }}>
                            <Image source={Grab} style={{ width: 50, height: 50 }} />
                            <Image source={Now} style={{ width: 50, height: 50 }} />
                        </View>

                    </View>
                </View>

                <View style={styles.overlay}>

                </View>
            </ImageBackground>
            {/* <View style={styles.overlay}></View> */}
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 0,
        flex: 1,
    },
    wrapContent: {
        flex: 1,
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',
        position: 'relative'
    },
    featureList: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'absolute',
        zIndex: 9,
        left: 0,
        top: 50
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginBottom: 20,
        padding: 10
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    overlay: {
        backgroundColor: '#000',
        opacity: .7,
        width: '100%',
        height: '100%'
    }
})