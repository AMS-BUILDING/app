import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import BannerImage from '../assets/images/banner1.png';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Parking({ navigation }) {
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
                    <Text style={styles.textConfirm}>Gửi xe</Text>
                </View>
                <View style={styles.headerText}>
                    <View style={[styles.wrapItem, styles.active]}>
                        <Text style={styles.textItem}>Ô tô</Text>
                    </View>
                    <View style={[styles.wrapItem, styles.noneBorder]}>
                        <Text style={styles.textItem}>Xe máy</Text>
                    </View>
                    <View style={styles.wrapItem}>
                        <Text style={styles.textItem}>Xe điện</Text>
                    </View>
                </View>
                <View style={styles.features}>
                    <ScrollView>
                        <View style={styles.numberCar}>
                            <Text style={styles.textNumber}>Số lượng xe:</Text>
                            <NumericInput type='up-down' />
                        </View>
                        <View>
                            <View style={styles.featureItem}>
                                <Text style={styles.textNumber}>Xe thứ nhất:</Text>
                                <NumericInput type='up-down' />
                            </View>
                            <View style={styles.featureInput}>
                                <TextInput placeholder="Loại xe" style={styles.input} />
                                <TextInput placeholder="Màu xe" style={styles.input} />
                            </View>
                            <View style={styles.featureInput}>
                                <TextInput placeholder="Biển số" style={styles.input} />
                                <Text style={styles.textPrice}>Phí xe: 1.000.000đ</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.featureItem}>
                                <Text style={styles.textNumber}>Xe thứ hai:</Text>
                                <NumericInput type='up-down' />
                            </View>
                            <View style={styles.featureInput}>
                                <TextInput placeholder="Loại xe" style={styles.input} />
                                <TextInput placeholder="Màu xe" style={styles.input} />
                            </View>
                            <View style={styles.featureInput}>
                                <TextInput placeholder="Biển số" style={styles.input} />
                                <Text style={styles.textPrice}>Phí xe: 1.000.000đ</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.wrapBtn}>
                    <View style={styles.btnConfirm}>
                        <Button title="Xác nhận" color="white" onPress={() => navigation.navigate('ServiceQuote')} />
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
        height: 40,
        backgroundColor: 'black',
        opacity: 0.4,
    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 5,
        width: '100%'
    },
    main: {
        padding: 15
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
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
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 30,
    },
    wrapItem: {
        borderTopLeftRadius: 28,
        borderBottomStartRadius: 28,
        width: '33.333%',
        padding: 10,
    },
    textItem: {
        textAlign: 'center',
        fontSize: 18
    },
    active: {
        backgroundColor: '#9966FF',
    },
    noneBorder: {
        borderTopLeftRadius: 0,
        borderBottomStartRadius: 0,
    },
    features: {
        height: 180
    },
    numberCar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        padding: 10
    },
    textNumber: {
        marginRight: 15,
        fontSize: 18
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    featureInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        padding: 15,
        width: 150,
        borderRadius: 15
    },
    wrapBtn: {
        padding: 10,
        backgroundColor: '#9966FF',
        marginTop: 15,
        borderRadius: 10
    },
    textPrice: {
        fontSize: 18
    }
});