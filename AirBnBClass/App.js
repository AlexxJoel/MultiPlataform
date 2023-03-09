
import React, { useState } from 'react'
import NavigationSession from './config/navigation/NavigationSession';
import Navigation from './config/navigation/Navigation';

import { app } from './config/utils/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


export default function App() {

  const [session, setSession] = useState(null)

  const auth = getAuth(); 
  onAuthStateChanged(auth, (credential) => {
    credential? setSession(true): setSession(false)
  })

  return  session ? <NavigationSession /> : <Navigation/>
}
