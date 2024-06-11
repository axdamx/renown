/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck to disable type checking per file
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, ScrollView, SafeAreaView, Image, View } from 'react-native';
import { backgroundColor } from '../constants/colors';

const DetailsScreen: React.FC<Props> = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { itemName, authorName, image_uri, starting_bid } = route.params;

    console.log('route', route.params);
    navigation.setOptions({
        title: `${itemName}`,
        backgroundColor: 'gray',
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{}}>
                <Text
                    style={{
                        // fontWeight: 'bold',
                        // fontSize: 40,
                        padding: 15,
                    }}>
                    {/* Ending in: {itemName} */}
                    Ending in: 10h17m30s
                </Text>
                <Text
                    style={{
                        // fontWeight: 'bold',
                        // fontSize: 40,
                        padding: 15,
                    }}>
                    Current Price: ${`${starting_bid}`}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 40, padding: 15 }}>
                    {itemName}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 40, padding: 15 }}>
                    {authorName}
                </Text>
                <Image
                    source={{ uri: image_uri }}
                    style={{ height: 150, width: 350 }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default DetailsScreen;
