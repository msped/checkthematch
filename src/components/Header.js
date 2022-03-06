import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { 
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  Autocomplete,
  Grid,
  Link,
} from '@mui/material';
import { createTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import LoadingSkeleton from '../components/LoadingSkeleton'

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5"
    }
  },
})


export default function Header() {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  // const [navDrawer, setNav] = useState(false);

  const nav = useNavigate()
  
  useEffect(() => {
    const search = async () => {
        const { data }  = await axios.get('https://api-football-v1.p.rapidapi.com/v3/leagues', {
          params: { search: term },
          headers: {
            'x-rapidapi-host': process.env.REACT_APP_API_HOST,
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
          }
        })
        if (data.response.length > 0 && term !== '') {
          setResults(data.response)
        }
    }
    
    if (term >= 3 && !results.length > 0) {
        search()
    } else {
        const timeoutId = setTimeout(()=>{
            if (term) {
                search()
            }
        }, 750)
        return () => {
            clearTimeout(timeoutId)
        }
    } 
  }, [term])
  
  const HandleNavigation = (value) => {
    if (value !== '' || value !== undefined || value !== null) {
      const path = '/league/' + value.league.id
      nav(path)
      setTerm('')
    }
  }

  // const toggleDrawer = (event, open) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   setNav(open);
  // };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" theme={theme}>
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to='/'
                sx={{ 
                  flexGrow: 1, 
                  display: { xs: 'none', sm: 'flex' },
                  color: '#fff',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                Check the match
              </Typography>
              
              {/* Phone nav view - Removed as no link being shown, just a landing page
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="Navigation menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={(e) => {toggleDrawer(e, true)}}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  id="menu-appbar"
                  anchor='top'
                  open={navDrawer}
                  onClose={(e) => {toggleDrawer(e, false)}}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <DialogTitle textAlign="right">
                    <IconButton
                      onClick={(e) => {toggleDrawer(e, false)}}
                    >
                      <CancelIcon />
                    </IconButton>
                  </DialogTitle>
                </Drawer>
              </Box> */}

              <Autocomplete
                options={results}
                style={{ width: '30ch' }}
                clearOnBlur={true}
                blurOnSelect={true}
                freeSolo
                size="small"
                loading={true}
                loadingText={<LoadingSkeleton />}
                disableClearable={true}
                open={term ? true : false}
                renderOption={(props, option) => (
                  <li {...props}>
                    <Grid container spacing={2}>
                      <Grid item xs={2}>
                        <img 
                          src={option.country.flag}
                          alt={option.country.name}
                          style={{ maxWidth: '100%', height: 'auto'}}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography>{option.league.name}</Typography>
                      </Grid>
                    </Grid>
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Search League"
                    inputProps={{
                      ...params.inputProps,
                      onKeyDown: (e) => {
                            if (e.key === 'Enter') {
                              e.stopPropagation();
                            }
                      },
                    }}
                  />
                )}
                getOptionLabel={(option) => option.league.name}
                onChange={(e, v) => HandleNavigation(v)}
              />
            </Toolbar>
        </AppBar>
        </Box>
    </div>
  );
}