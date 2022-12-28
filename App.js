import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase';
import RootNavigator from './src/navigation/RootNavigator';
import { Text, View } from 'react-native';
// import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    console.log(auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            if (user) {
                setUser(user);
            }
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <NavigationContainer>
            <RootNavigator user={user} />
        </NavigationContainer>
    );
}
