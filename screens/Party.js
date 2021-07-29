import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground,TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import RNPickerSelect from 'react-native-picker-select';
import HomeImage from '../assets/images/home.png';
import moment from 'moment';
import { TextInput } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function Party({ navigation }) {

    const [dateObj, setDateObj] = useState({
        selectedDate: moment(new Date(Date.now())).format("DD-MM-YYYY"),
        markedDates: {}
    })
    const getSelectedDayEvents = date => {
        let markedDates = {};
        markedDates[date] = { selected: true, color: '#00B0BF', textColor: '#FFFFFF' };
        let serviceDate = moment(date);
        serviceDate = serviceDate.format("DD.MM.YYYY");
        setDateObj({
            selectedDate: serviceDate,
            markedDates: markedDates
        });
    };
    const [timeFrom, setTimeFrom] = useState("16")
    const handleTimeFrom = (hour) => {
        setTimeFrom(hour)
    }
    const [timeTo, setTimeTo] = useState("20")
    const handleTimeTo = (hour) => {
        setTimeTo(hour)
    }

    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.wrapContent}>
                    <View style={styles.banner}>
                        <View style={styles.textBanner}>
                            <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                                <AntDesign name="arrowleft" size={30} color="#FFF" />
                            </TouchableOpacity>
                            <View style={styles.wrapperText}>
                                <Text style={styles.test}>Đặt tiệc</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.main}>
                        <ImageBackground source={HomeImage} style={styles.image}>
                            <View style={styles.wrapTime}>
                                <View>
                                    <Text style={styles.txtTitle}>Ngày đặt</Text>
                                    <View style={styles.iptSelectDate}>
                                        <TextInput
                                            value={dateObj.selectedDate}
                                        />
                                    </View>
                                </View>
                                <TimeFrom timeFrom={timeFrom} handleTimeFrom={handleTimeFrom} />
                                <TimeTo timeTo={timeTo} handleTimeTo={handleTimeTo} />
                            </View>
                            <SelectDate getSelectedDayEvents={getSelectedDayEvents} dateObj={dateObj} />
                            <Text style={styles.textRule}>Quy định khi đăng kí thẻ ra vào</Text>
                            <View style={styles.wrapCommit}>
                                <CheckBox style={styles.checkbox} />
                                <Text style={styles.textCommit}>Tôi đã đọc và cam kết</Text>
                            </View>
                            <View style={styles.wrapBtn}>
                                <View style={styles.btnConfirm}>
                                    <Button title="Đăng kí" color="#006633" onPress={() => navigation.navigate('ServiceQuote')} />
                                </View>
                            </View>
                        </ImageBackground >
                    </View>
                </View>
            </View>
        </>
    )
}

function TimeFrom({ timeFrom, handleTimeFrom }) {
    let selectItems = [];
    for (let i = 0; i < 25; i++) {
        selectItems.push({
            label: `${i}h`, value: `${i}`
        })
    }
    return (
        <View style={styles.widthContent}>
            <Text style={styles.txtTitle}>Từ</Text>
            <View style={styles.wrapSelect}>
                <View style={styles.iptSelect}>
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        onValueChange={(value) => handleTimeFrom(value)}
                        items={selectItems}
                        value={timeFrom}
                        Icon={() => <Icon name="keyboard-arrow-down" size={23} />}
                    />
                </View>


            </View>
        </View>
    )
}

function TimeTo({ timeTo, handleTimeTo }) {
    let selectItems = [];
    for (let i = 0; i < 25; i++) {
        selectItems.push({
            label: `${i}h`, value: `${i}`
        })
    }
    return (
        <View style={styles.widthContent}>
            <Text style={styles.txtTitle}>Đến</Text>
            <View style={styles.wrapSelect}>


                <View style={styles.iptSelect}>
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        onValueChange={(value) => handleTimeTo(value)}
                        items={selectItems}
                        value={timeTo}
                        Icon={() => <Icon name="keyboard-arrow-down" size={23}  />}
                    />
                </View>


            </View>
        </View>
    )
}
function SelectDate({ getSelectedDayEvents, dateObj }) {
    return (
        <View style={styles.wrapCalendar}>
            <Calendar
                current={new Date(Date.now())}
                onDayPress={(day) => {
                    getSelectedDayEvents(day.dateString)
                }}
                markedDates={dateObj.markedDates}


            />
        </View>
    )
}
const pickerSelectStyles = StyleSheet.create({
    // inputIOS: {
    //     fontSize: 14,
    //     paddingVertical: 8,
    //     paddingHorizontal: 10,
    //     borderWidth: 1,
    //     borderColor: 'gray',
    //     borderRadius: 4,
    //     color: 'black',
    //     paddingRight: 35, // to ensure the text is never behind the icon
    //     backgroundColor: 'white'
    // },
    inputAndroid: {
        fontSize: 14,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingTop:0,
        paddingRight: 60, // to ensure the text is never behind the icon
        paddingBottom:20,
        paddingTop:5
    },
});
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1
    },
    wrapperText: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBanner: {
        height: '100%'
    },
    banner: {
        position: 'relative',
        height: 100,
        backgroundColor: '#006633'
    },

    textBanner: {
        position: 'absolute',
        top: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
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
        fontWeight: '600',
        color: 'white'
    },
    wrapTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        margin: 15
    },
    wrapBtn: {
        padding: 10,
        marginTop: 15,
        borderRadius: 10
    },
    textRule: {
        color: '#fff',
        textDecorationLine: 'underline',
        marginBottom: 10,
        marginLeft: 15,
        fontSize: 14
    },
    wrapCommit: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0
    },
    textCommit: {
        marginLeft: 0,
        fontSize: 12,
        color: '#FFF'
    },
    btnBack: {
        position: 'absolute',
        left: 20,
        top: 5
    },
    image: {
        resizeMode: "cover",
        position: 'relative',
        height: '100%'
    },
    wrapCalendar: {
        padding: 15
    },
    txtTitle: {
        fontSize: 14,
        color: '#FFF',
        marginBottom: 10,
        fontWeight: '700'
    },
    iptSelect: {
        backgroundColor: '#fff',
        borderColor: '#333',
        borderWidth: 1,
        borderStyle: 'solid',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 10
    },
    wrapSelect: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapText: {
        padding: 7,
        backgroundColor: '#fff'
    },
    iptSelectDate: {
        backgroundColor: '#fff',
        borderColor: '#333',
        borderWidth: 1,
        borderStyle: 'solid',
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5
    },
    btnConfirm: {
        padding: 5,
        borderRadius: 10
    }
});