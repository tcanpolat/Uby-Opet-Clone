import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { phonecall, email, web } from 'react-native-communications'
import IconMa from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles/Styles'
import 'react-native-gesture-handler'
import 'react-native-safe-area-context'


const IletisimScreen = () => {
    return (
        <SafeAreaView style={styles.iletisimContainer}>
            <TouchableOpacity 
            style={styles.iletisimButton}
            onPress={()=>phonecall('905555555555',false)}
            >
                <View style={styles.iletisimIconSection}>
                    <IconMa name='local-phone' size={42} color='#fff' />
                </View>
                <View style={styles.iletisimButtonTextSection}>
                    <Text style={styles.iletisimButtonText}>0555 555 55 55</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.iletisimButton}
            onPress={()=>web('https://www.opet.com.tr')}
            >
                <View style={styles.iletisimIconSection}>
                    <IconMa name='language' size={42} color='#fff' />
                </View>
                <View style={styles.iletisimButtonTextSection}>
                    <Text style={styles.iletisimButtonText}>www.opet.com.tr</Text>
                </View>
            </TouchableOpacity >
            <TouchableOpacity
            style={styles.iletisimButton}
            onPress={()=>email('info@opet.com.tr',null,null,null,null)}
            >
                <View style={styles.iletisimIconSection}>
                    <IconMa name='mail' size={42} color='#fff' />
                </View>
                <View style={styles.iletisimButtonTextSection}>
                    <Text style={styles.iletisimButtonText}>info@opet.com.tr</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default IletisimScreen
