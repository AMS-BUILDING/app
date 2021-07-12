import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import Header from '../components/Header';
import PersonInfor from '../components/PersonInfor';

export default function Management({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Ban quản lý</Text>
                </View>
            </View>
            <ScrollView>
                <PersonInfor />
                <PersonInfor />
                <PersonInfor />
                <PersonInfor />
                <PersonInfor />
            </ScrollView>
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
        fontWeight:'700',
        fontSize: 18,
        color: 'white'
    }
});