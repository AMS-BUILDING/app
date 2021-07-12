import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function GroupFamily() {
    return <View style={{ padding: 15, borderBottomWidth: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 150,  fontSize: 18 }}>Name:</Text>
            <TextInput style={{ flex: 1, borderWidth: 1, padding: 5, borderRadius: 5 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 150,  fontSize: 18 }}>Phone Number:</Text>
            <TextInput style={{ flex: 1, borderWidth: 1, padding: 5, borderRadius: 5 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 150, fontSize: 18 }}>DOB:</Text>
            <TextInput style={{ flex: 1, borderWidth: 1, padding: 5, borderRadius: 5 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 150, fontSize: 18 }}>Identity Card:</Text>
            <TextInput style={{ flex: 1, borderWidth: 1, padding: 5, borderRadius: 5 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 150,  fontSize: 18 }}>Relationship:</Text>
            <TextInput style={{ flex: 1, borderWidth: 1, padding: 5, borderRadius: 5 }} />
        </View>
    </View>
}