import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {
  Route,
  Routes 
} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import League from './components/League'

let theme = createTheme({
  palette: {
    mode: "dark",
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
          <Container maxWidth="md">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/league/:league" element={<League/>}/>
            </Routes>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
