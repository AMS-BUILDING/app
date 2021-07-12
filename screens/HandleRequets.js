import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import ArticleReq from '../components/ArticleReq';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function HandleRequest({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Yêu cầu chờ xử lý</Text>
                </View>
            </View>
            <ScrollView>
                <ArticleReq navigation={navigation} />
                <ArticleReq navigation={navigation} />
                <ArticleReq navigation={navigation} />
                <ArticleReq navigation={navigation} />
                <ArticleReq navigation={navigation} />
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
    }
});