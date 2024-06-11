/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck to disable type checking per file
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, ScrollView, Button, SafeAreaView } from 'react-native';

const LoginScreen: React.FC<Props> = ({}) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView style={{}}>
                <Text style={{ fontWeight: 'bold', fontSize: 40, padding: 15 }}>
                    LoginScreen
                </Text>
                <Button
                    title={'Click Me'}
                    onPress={() => navigation.replace('Main')}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
