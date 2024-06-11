/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck to disable type checking per file
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, ScrollView, SafeAreaView, Image, Button } from 'react-native';

const CreateListScreen: React.FC<Props> = () => {
    const route = useRoute();
    const navigation = useNavigation();
    // const { itemName, authorName, image_uri, starting_bid } = route.params;

    // console.log('route', route.params);
    // navigation.setOptions({
    //     title: `${itemName}`,
    //     backgroundColor: 'gray',
    // });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{}}>
                <Text>Create List here</Text>
                <Button
                    title='Next'
                    onPress={() => navigation.navigate('CreateListScreen1')}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateListScreen;
