import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import HomeImage from '../../assets/images/home.png';
import API from '../lib/API';
import LoadingProgressBar from '../LoadingProgressBar';
import SearchRepair from './SearchRepair';
export default function Repair() {
    let navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const parent = navigation.dangerouslyGetParent();

        parent.setOptions({
            tabBarVisible: false
        });
        return () =>
            parent.setOptions({
                tabBarVisible: true
            });

    }, []);
    const [text, setText] = useState();
    const handleText = (value) => {
        setText(value)
    }

    const token = useSelector(state => state.user?.token)
    const [timeFrom, setTimeFrom] = useState("21")
    const handleTimeFrom = (hour) => {
        setTimeFrom(hour)

    }
    const [timeTo, setTimeTo] = useState("21")
    const handleTimeTo = (hour) => {
        setTimeTo(hour)
    }

    const [date, setDate] = useState(new Date());

    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const accountIdRedux = useSelector(state => state.user?.accountId)

    let addService = async () => {
        setLoading(true)
        try {
            let path = '/landlord/service_request/add';
            let resp = await API.authorizedJSONPost(path, {
                reasonDetailSubServiceId: timeTo,
                accountId: accountIdRedux,
                startDate: moment(date).format("YYYY/MM/DD"),
                description: text,
                endDate: ""
            }, token);
            if (resp.ok) {
                setLoading(false)
                Toast.show({
                    type: 'success',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: 'Bạn đã gửi yêu cầu thành công',
                    text2: "Ấn vào đây để theo dõi tiến trình nhé!",
                    onPress: () => {
                        setTimeFrom("21")
                        setTimeTo("21")
                        setText("")
                        setDate(new Date())
                        navigation.navigate("DetailProcess")
                    }
                })

            } else {
                setLoading(false)
                let response = await resp.json();
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: 'Error',
                    text2: response?.message
                })
            }


        } catch (error) {

        }
    }


    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.wrapContent}>

                    <View style={styles.main}>
                        <ImageBackground source={HomeImage} style={styles.image}>
                            <View style={styles.wrapTime}>
                                <SearchRepair timeFrom={timeFrom} timeTo={timeTo} handleTimeFrom={handleTimeFrom} handleTimeTo={handleTimeTo} />
                            </View>
                            <Description text={text} handleText={handleText} />
                            <View>
                                {show && <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={"date"}
                                    is24Hour={true}
                                    display="spinner"
                                    onChange={onChange}
                                />}
                                <TouchableOpacity onPress={() => setShow(true)} >
                                    <View style={styles.selectDate}>
                                        <View>
                                            <Text style={{ color: '#fff' }}>Ngày</Text>
                                            <View style={styles.inputDate}>
                                                <Text style={{ color: '#333' }}>{moment(date).format("DD/MM/YYYY")} </Text>
                                                <View>
                                                    <Text><Feather name="calendar" size={25} color={"#333"} /></Text>
                                                </View>
                                            </View>
                                        </View>
                                        {/* <View>
                                            <TimeTo timeTo={timeTo} handleTimeTo={handleTimeTo} />
                                        </View> */}
                                    </View>
                                </TouchableOpacity>
                            </View>


                            <View style={styles.footerBottom}>
                                <TouchableOpacity style={styles.shareNow} disabled={loading} onPress={addService}>
                                    <Text style={styles.shareNowText}>GỬI YÊU CẦU {loading && <LoadingProgressBar />}</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground >
                    </View>
                </View>
            </View>
        </>
    )
}

function TimeFrom({ timeFrom, handleTimeFrom, equipments }) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    let handleItems = () => {
        let selectItems = [];
        for (let i = 0; i < equipments.length; i++) {
            selectItems.push({
                label: equipments[i]?.detailSubServiceName,
                value: equipments[i]?.id
            })
        }
        setItems(selectItems)
    }

    useEffect(() => {
        handleItems()
    }, [equipments])


    return (
        <View style={styles.widthContent}>
            <Text style={styles.txtTitle}>Thiết bị</Text>
            <DropDownPicker
                open={open}
                value={timeFrom}
                items={items}
                setOpen={setOpen}
                setValue={handleTimeFrom}
                setItems={setItems}
                placeholder={items[0]?.label}
                style={{ height: 30 }}
                containerStyle={{ width: 150 }}
            />
        </View>
    )
}


function Count({ timeTo, handleTimeTo, problems }) {



    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    let handleItems = () => {
        let selectItems = [];
        for (let i = 0; i < problems?.length; i++) {
            selectItems.push({
                label: problems[i]?.reasonName,
                value: problems[i]?.id
            })
        }
        setItems(selectItems)
    }

    useEffect(() => {
        handleItems()
    }, [problems])


    return (
        <View style={styles.widthContent}>
            <Text style={styles.txtTitle}>Vấn đề</Text>
            <DropDownPicker
                open={open}
                value={timeTo}
                items={items}
                setOpen={setOpen}
                setValue={handleTimeTo}
                setItems={setItems}
                placeholder={items[0]?.label}
                style={{ height: 30 }}
                containerStyle={{ width: 150 }}
            />
            <View style={styles.separator} />
        </View>
    )
}


function Description({ text, handleText }) {
    let richText = useRef()

    return (
        <>
            <View style={{ padding: 15 }}>


                <TextInput
                    onChangeText={value => handleText(value)}
                    value={text}
                    placeholder={"Mô tả..."}
                    placeholderTextColor="#888"
                    style={[styles.inputText]}
                    underlineColorAndroid="transparent"

                />

            </View>
        </>
    )
}





const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    inputText: {
        textAlignVertical: 'top',
        paddingTop: 20,
        fontSize: 18,
        height: 200,
        paddingLeft: 5,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#eaeaea'
    },
    shareNow: { backgroundColor: '#006633', width: '80%', height: 50, borderRadius: 10, alignItems: 'center', display: 'flex', justifyContent: 'center' },
    shareNowText: { color: '#fff', fontSize: 14, fontWeight: "bold", textTransform: 'uppercase' },
    wrapContent: {
        flex: 1
    },
    footerBottom: {

        flexDirection: 'row',
        display: "flex",
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        width: '100%',
    },
    separator: {
        height: 1, backgroundColor: '#fff', width: 150,
        marginTop: 5,
        marginLeft: 0
    },
    widthContent: {
        width: 150,
        display: 'flex',

        justifyContent: 'center'
    },
    selectDate: {
        paddingTop: 30,
        paddingLeft: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        justifyContent: 'space-between',
        marginRight: 15
    },
    inputDate: {

        marginRight: 15,
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#333',
        display: 'flex',
        width: 200,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 30
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