import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import ArticleTracking from '../components/ArticleTracking';
import Header from '../components/Header';

export default function ProgressTracking({ navigation }) {
    return <View style={styles.wrapper}>
        <Header />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Theo dõi tiến trình</Text>
                </View>
            </View>
            <ScrollView>
                <ArticleTracking navigation={navigation} />
                <ArticleTracking navigation={navigation} />
                <ArticleTracking navigation={navigation} />
                <ArticleTracking navigation={navigation} />
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
        fontSize: 20,
        color: 'white',
        fontWeight:'700'
    }
});