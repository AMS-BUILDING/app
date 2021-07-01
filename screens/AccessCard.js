import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, CheckBox, Image, StyleSheet, Text, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import BannerImage from '../assets/images/banner1.png';
import Header from '../components/Header';
export default function AccessCard({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Đăng kí</Text>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.confirm}>
                    <AntDesign name="arrowleft" size={40} color="#9966FF" />
                    <Text style={styles.textConfirm}>Thẻ ra vào</Text>
                </View>
                <View style={styles.wrapCard}>
                    <Text style={styles.title}>Căn hộ được cấp 1 thẻ</Text>
                    <View style={styles.groupCard}>
                        <Text style={styles.textCard}>Mã thẻ:</Text>
                        <Text style={styles.textCard}>0361000302156</Text>
                    </View>
                    <View style={styles.groupCard}>
                        <Text style={styles.textCard}>Số thẻ đăng kí thêm:</Text>
                        <NumericInput type='up-down' totalWidth={80} />
                    </View>
                    <View style={styles.groupCard}>
                        <Text style={styles.textCard}>Phí mỗi thẻ:</Text>
                        <Text>50.000đ</Text>
                    </View>
                    <View style={styles.groupCard}>
                        <Text style={styles.textCard}>Tổng phí:</Text>
                        <Text style={styles.textCard}>150.000đ</Text>
                    </View>
                </View>
                <Text style={styles.textRule}>Quy định khi đăng kí thẻ ra vào</Text>
                <View style={styles.wrapCommit}>
                    <CheckBox style={styles.checkbox} />
                    <Text style={styles.textCommit}>Tôi đã đọc và cam kết</Text>
                </View>
                <View style={styles.wrapBtn}>
                    <View style={styles.btnConfirm}>
                        <Button title="Đăng kí" color="white" onPress={() => navigation.navigate('ServiceQuote')} />
                    </View>
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
    main: {
        padding: 15,
        flex: 1,
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    textConfirm: {
      
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 10
    },
    test: {
      
        fontSize: 30,
        color: 'white'
    },
    title: {
        fontSize: 20,
      
        fontWeight: 'bold',
        color: '#9966FF',
        marginBottom: 10
    },
    wrapCard: {
        padding: 10,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        marginBottom: 5
    },
    groupCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    textCard: {
      
        fontSize: 18
    },
    checkbox: {
        width: 20,
        height: 20,
        borderColor: 'black'
    },
    textRule: {
        color: '#9966FF',
        textDecorationLine: 'underline',
     
    },
    wrapCommit: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    textCommit: {
        marginLeft: 10,
      
        fontSize: 18
    },
    wrapBtn: {
        padding: 5,
        backgroundColor: '#9966FF',
        marginTop: 5,
        borderRadius: 10
    }
});