import "./App.css";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import ThemeProvider, { useTheme, useThemeUpdate } from "./themes/ThemeContext";
import RoutedLanding from "./router/RoutedLanding";

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>
          Full Stack Developer | Web & Mobile Applications Specialist | London
        </title>
        <meta
          name="description"
          content="Skilled Full Stack Developer based in London, with a proven track record of delivering fast and reliable web applications. Expert in crafting seamless cross-platform solutions for Android and iOS, ensuring top performance and user experience. Committed to driving innovation and efficiency in the tech industry."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Web Applications, Cross-Platform Development, Android, iOS, London, Performance Optimization, User Experience, Innovative Solutions, Reliable Apps"
        />
        {/* You can also add tags for social media */}
        <meta
          property="og:title"
          content="Full Stack Developer | Web & Mobile Applications Specialist | London"
        />
        <meta
          property="og:description"
          content="Expert in creating fast, reliable web and cross-platform Android and iOS applications."
        />
        <meta property="og:type" content="website" />
        {/* Add more metadata tags as needed */}
      </Helmet>
      <RoutedLanding />
    </ThemeProvider>
  );
}
export default App;
