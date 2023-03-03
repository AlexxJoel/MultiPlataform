import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../../../../kernel/components/Loading'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

export default function Profile() {
    const [user, setUser] = useState(null)
    const [reload, setReload] = useState(false)
    const [session, setSession] = useState(null)
    useEffect(() => {
        (async () => {
            try {
                const value = await AsyncStorage.getItem('@session')

                if (value !== null) {
                    setSession(JSON.parse(value))
                    console.log("Session", value);                
                    setUser(true)
                } else {
                    setUser(false)
                }
            } catch (e) {
                console.error("Error -> Profile", e)
            }
        })()
    setReload(false)
    }, [reload])

    if (user == null) return <Loading />
    return user ? <UserLogged setReload={setReload} user={session}/> : <UserGuest />
}

const styles = StyleSheet.create({})