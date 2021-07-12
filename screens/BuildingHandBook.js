import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import BgImage from '../assets/images/bg.png';
import Header from '../components/Header';

export default function BuildingHandBook({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Sổ tay tòa nhà</Text>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.group}>
                    <Text style={styles.text}>Tên chung cư:</Text>
                    <Text style={[styles.text, styles.building]}>ABMS Building</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.text}>Block đang sinh sống:</Text>
                    <Text style={[styles.text, styles.building]}>A1</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.text}>Địa chỉ:</Text>
                    <Text style={[styles.text, styles.building]}>Vĩnh Yên - VP</Text>
                </View>
            </View>
            <View style={styles.contentImage}>
                <Image source={BgImage} style={styles.image} />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1
    },
    imageBanner: {
        height: '100%'
    },
    banner: {
        position: 'relative',
        height: 200,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 80,
        backgroundColor: 'black',
        opacity: 0.4,
    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%'
    },
    test: {
        fontSize: 30,
        color: 'white'
    },
    content: {
        padding: 15,
    },
    contentImage: {
        flex: 1,
        padding: 15
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    text: {
        fontSize: 20,
    },
    building: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#9966FF'
    },
    image: {
        resizeMode: 'cover',
        height: '100%'
    }
});