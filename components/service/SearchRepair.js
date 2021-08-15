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
export default function SearchRepair({ timeFrom, timeTo, handleTimeFrom, handleTimeTo }) {


    const token = useSelector(state => state.user?.token)

    let [equipments, setEquipments] = useState([]);
    let [problems, setProblems] = useState([]);
    useEffect(() => {
        searchEquipemt()
    },[])
    useEffect(() => {
        searchProblems()
    },[timeFrom])
    let searchEquipemt = async () => {
        try {
            let path = '/landlord/detail_sub_service/search?subServiceId=9';
            let resp = await API.authorizedJSONGET(path, token);
            if (resp.ok) {
                let response = await resp.json();
                setEquipments(response)
            }
        } catch (error) {

        }
    }

    let searchProblems = async () => {

        try {
            let path = `/landlord/reason_detail_sub_service/search?detailSubServiceId=${timeFrom}`;
            let resp = await API.authorizedJSONGET(path, token);
            if (resp.ok) {
                let response = await resp.json();
                setProblems(response)
            }
        } catch (error) {

        }
    }


    return (
        <>
            <TimeFrom timeFrom={timeFrom} handleTimeFrom={handleTimeFrom} equipments={equipments} />
            <Count timeTo={timeTo} handleTimeTo={handleTimeTo} problems={problems} />
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
                containerStyle={{ width: 160 }}
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
                containerStyle={{ width: 160 }}
            />
        </View>
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