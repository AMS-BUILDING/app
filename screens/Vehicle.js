import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import Car from '../components/Car';
import Header from '../components/Header';
import MotorBike from '../components/MotorBike';

export default function Vehicle({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Phương tiện</Text>
                </View>
            </View>
            <ScrollView>
                <Car />
                <MotorBike />
                <Car />
                <MotorBike />
                <Car />
                <MotorBike />
            </ScrollView>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1,
        backgroundColor: '#D3D3D3',
    },
    imageBanner: {
        height: '100%'
    },
    banner: {
        position: 'relative',
        height: 150,
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
        fontSize: 18,
        color: 'white',
        fontWeight:'700'
    }
});