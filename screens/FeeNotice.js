import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import Header from '../components/Header';
import RNPickerSelect from "react-native-picker-select";
import { TouchableOpacity } from 'react-native';

export default function FeeNotice({ navigation }) {

    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Thanh toán hóa đơn</Text>
                </View>

            </View>
            <View style={styles.main}>
                <View style={styles.confirm}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="arrowleft" size={25} color="#9966FF" /></TouchableOpacity>
                    <Text style={styles.textConfirm}>Thông báo phí</Text>
                </View>
                <RNPickerSelect
                    style={pickerSelectStyles}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "JavaScript", value: "JavaScript" },
                        { label: "TypeStript", value: "TypeStript" },
                        { label: "Python", value: "Python" },
                        { label: "Java", value: "Java" },
                        { label: "C++", value: "C++" },
                        { label: "C", value: "C" },
                    ]}
                />
                <View style={styles.detail}>
                    <ScrollView style={styles.detailList}>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailText}>Thay vòi nước</Text>
                            <Text style={styles.detailText}>2000000</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailText}>Thay vòi nước</Text>
                            <Text style={styles.detailText}>200</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailText}>Thay vòi nước</Text>
                            <Text style={styles.detailText}>2000000</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailText}>Thay vòi nước</Text>
                            <Text style={styles.detailText}>200</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailText}>Thay vòi nước</Text>
                            <Text style={styles.detailText}>2000000</Text>
                        </View>


                    </ScrollView>
                    <View style={[styles.detailItem, styles.lastItem]}>
                        <Text style={styles.detailTotal}>Tổng tiền</Text>
                        <Text style={styles.detailTotal}>2200000</Text>
                    </View>
                </View>
                <Text style={styles.date}>Hạn chót thanh toán phải trả 6/6/2021</Text>
                <View style={styles.wrapBtn}>
                    <View style={styles.btnConfirm}>
                        <Button title="Thanh toán" color="#9966FF" onPress={() => navigation.navigate('Payment')} />
                    </View>
                </View>
            </View>
        </View>
    </View>
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        padding: 15,
        width: 150,
        // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

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
        padding: 15
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    textConfirm: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 10
    },
    test: {
        fontSize: 20,
        color: 'white',
        fontWeight:'700'
    },
    detailList: {
        borderBottomColor: '#666666',
        borderBottomWidth: 2,
        height: 150
    },
    detail: {
        borderColor: '#666666',
        borderWidth: 2,
        padding: 10,
        marginTop: 15
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    lastItem: {
        marginTop: 15
    },
    detailTotal: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#9966FF'
    },
    detailText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    wrapBtn: {
        paddingTop: 10,
        marginTop: 15,
        borderRadius: 10
    },
    date: {
        fontSize: 14,
        marginTop: 10
    }
   
});