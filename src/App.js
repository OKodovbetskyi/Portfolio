import "./App.css";
import React, {useRef} from 'react';

import ThemeProvider, { useTheme, useThemeUpdate } from "./themes/ThemeContext";
import RoutedLanding from "./router/RoutedLanding";


function App() {
  return(
    <ThemeProvider>
      <RoutedLanding />
    </ThemeProvider>
  )
}
export default App;
