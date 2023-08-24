
import React, { useState } from 'react';
import { Home } from "./src/screen/Home";
import * as Font from 'expo-font';

async function loadFonts() {
    await Font.loadAsync({
        'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf')
    });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  
  if (!fontLoaded) {
    loadFonts().then(() => setFontLoaded(true));
    return null;
  }

  return (
    <Home/>
  );
}

