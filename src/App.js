import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {
  Route,
  Routes 
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import League from './components/League'

let theme = createTheme({
  palette: {
    mode: "dark",
    primary : {
      main: '#5061BC'
    }
  }
})

theme = responsiveFontSizes(theme)

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box mt={3}>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/league/:league_id" element={<Container maxWidth="md"><League/></Container>}/>
            </Routes>
        </Box>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
