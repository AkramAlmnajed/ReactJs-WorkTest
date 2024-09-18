import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./mainComponents/header";
import FireBeeHandBand from "./mainComponents/fireBeeHeadBand";
import MoneyBack from "./mainComponents/moneyBack";
import FireBeeSignals from "./mainComponents/fireeBeeSignals";
import FireBeeInfo from "./mainComponents/fireBeeInfo";
import InsideBox from "./mainComponents/insideBox";
import AskedQuestions from "./mainComponents/askedQuestions";
import Footer from "./mainComponents/footer";

const theme = createTheme({
  spacing: 8,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <FireBeeHandBand />
      <MoneyBack />
      <FireBeeSignals />
      <FireBeeInfo />
      <InsideBox />
      <AskedQuestions />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
