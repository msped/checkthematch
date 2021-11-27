import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Header from './components/Header'

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
            
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
