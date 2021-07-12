import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import Header from '../components/Header';

export default function AccountSetting({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Thiết lập tài khoản</Text>
                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.title}>Tài khoản của tôi</Text>
                <View style={styles.wrapGroup}>
                    <View style={[styles.group, styles.textUnderline]}>
                        <Text>Hồ sơ của tôi</Text>
                        <AntDesign name="right" size={24} color="black" onPress={() => navigation.navigate('Profile')} />
                    </View>
                    <View style={styles.group}>
                        <Text>Gia đình</Text>
                        <AntDesign name="right" size={24} color="black" onPress={() => navigation.navigate('FamilyScreen')} />
                    </View>
                </View>
                <Text style={styles.title}>Hỗ trợ</Text>
                <View style={styles.wrapGroup}>
                    <View style={[styles.group, styles.textUnderline]}>
                        <Text>Điều khoản chung cư</Text>
                        <AntDesign name="right" size={24} color="black" onPress={() => navigation.navigate('ApartmentTerm')} />
                    </View>
                    <View style={styles.group}>
                        <Text>Hài lòng với ABMS? Hãy đánh giá ngay!</Text>
                        <AntDesign name="right" size={24} color="black" onPress={() => navigation.navigate('Feedback')} />
                    </View>
                </View>
                <Text style={styles.title}>Cài đặt</Text>
                <View style={styles.wrapGroup}>
                    <View style={styles.group}>
                        <Text>Ngôn ngữ</Text>
                        <AntDesign name="right" size={24} color="black" onPress={() => navigation.navigate('Language')} />
                    </View>
                </View>
                <View style={styles.btnLogout}>
                    <Button title="Đăng xuất" color="white" />
                </View>

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
    main: {
        padding: 15,
        flex: 1
    },
    title: {
        color: '#9966FF',
      
        fontSize: 20,
        fontWeight: 'bold'
    },
    wrapGroup: {
        marginBottom: 10
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
        paddingTop: 5
    },
    textUnderline: {
        borderBottomColor: '#cccccc',
        borderBottomWidth: 2
    },
    btnLogout: {
        backgroundColor: '#FF6633',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10
    }
});