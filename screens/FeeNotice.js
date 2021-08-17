import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Button, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import bgScreen from '../assets/images/bgscreen.png';
import Header from '../components/Header';
import RNPickerSelect from "react-native-picker-select";
import { TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dimensions } from 'react-native';

export default function FeeNotice({ navigation }) {
    const [monthFrom, setMonthFrom] = useState("16")
    const handleTimeFrom = (hour) => {
        setMonthFrom(hour)
    }

    const [yearFrom, setYearFrom] = useState("16")
    const handleYearFrom = (hour) => {
        setYearFrom(hour)
    }

    return <View style={styles.wrapper}>
        {/* <Header navigation={navigation} /> */}
        <ImageBackground source={bgScreen} style={styles.image}>
            <View style={[styles.wrapContent, { position: 'absolute', zIndex: 5, width: '100%', height: '100%' }]}>

                <View style={styles.main}>
                    {/* <View style={styles.confirm}>
                        <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="arrowleft" size={25} color="#9966FF" /></TouchableOpacity>
                        <Text style={styles.textConfirm}>Thông báo phí</Text>
                    </View> */}
                    <View style={styles.wrapSelect}>
                        <TimeFrom monthFrom={monthFrom} handleTimeFrom={handleTimeFrom} />
                        <YearFrom yearFrom={yearFrom} handleYearFrom={handleYearFrom} />
                    </View>
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
                            <Button title="Thanh toán" color="orange" onPress={() => navigation.navigate('Payment')} />
                        </View>
                    </View>
                </View>

            </View>
            <View style={{
                backgroundColor: '#000', opacity: .5,
                position: "absolute",
                zIndex: 4,
                width: '100%',
                height: '100%'
            }} />
        </ImageBackground>
    </View>
}

function TimeFrom({ monthFrom, handleTimeFrom }) {
    // let selectItems = [];
    // selectItems = [
    //     { label: "Trưa", value: "11:00-14:00" },
    //     { label: "Tối", value: "18:30-21:00" }
    // ]
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "6h - 8h", value: "06:00-08:00" },
        { label: "8h - 10h", value: "08:00-10:00" },
        { label: "10h - 12h", value: "10:00-12:00" },
        { label: "12h - 14h", value: "12:00-14:00" },
        { label: "14h - 16h", value: "14:00-16:00" },
        { label: "16h - 18h", value: "16:00-18:00" },
        { label: "18h - 20h", value: "18:00-20:00" },
        { label: "20h - 22h", value: "20:00-22:00" }
    ]);
    return (
        <View style={styles.widthContent}>

            <DropDownPicker
                open={open}
                value={monthFrom}
                items={items}
                setOpen={setOpen}
                setValue={handleTimeFrom}
                setItems={setItems}
                placeholder="Chọn tháng"
                style={{ height: 30 }}
                containerStyle={{ width: 150 }}
            />

        </View>
    )
}
function YearFrom({ yearFrom, handleYearFrom }) {
    // let selectItems = [];
    // selectItems = [
    //     { label: "Trưa", value: "11:00-14:00" },
    //     { label: "Tối", value: "18:30-21:00" }
    // ]
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "6h - 8h", value: "06:00-08:00" },
        { label: "8h - 10h", value: "08:00-10:00" },
        { label: "10h - 12h", value: "10:00-12:00" },
        { label: "12h - 14h", value: "12:00-14:00" },
        { label: "14h - 16h", value: "14:00-16:00" },
        { label: "16h - 18h", value: "16:00-18:00" },
        { label: "18h - 20h", value: "18:00-20:00" },
        { label: "20h - 22h", value: "20:00-22:00" }
    ]);
    return (
        <View style={styles.widthContent}>

            <DropDownPicker
                open={open}
                value={yearFrom}
                items={items}
                setOpen={setOpen}
                setValue={handleYearFrom}
                setItems={setItems}
                placeholder="Chọn năm"
                style={{ height: 30 }}
                containerStyle={{ width: 150 }}
            />

        </View>
    )
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
        color: 'white',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        width: '100%',
        paddingTop: Dimensions.get('window').height * 1 / 10
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',
        position: 'relative'
    },
    wrapSelect: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        fontWeight: '700'
    },
    detailList: {
        borderBottomColor: '#666666',
        borderBottomWidth: 2,
        height: 150
    },
    detail: {
        borderColor: 'white',
        borderWidth: 2,
        padding: 10,
        marginTop: 15,
        backgroundColor: 'white'
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
        color: '#0099CC'
    },
    detailText: {
        fontSize: 14,
    },
    wrapBtn: {
        paddingTop: 10,
        marginTop: 15,
        borderRadius: 10
    },
    date: {
        fontSize: 14,
        marginTop: 10,
        color: 'white'
    }

});