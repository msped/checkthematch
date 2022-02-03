import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

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

  const nav = useNavigate()
  
  useEffect(() => {
    const search = async () => {
        const { data }  = await axios.get('https://api-football-v1.p.rapidapi.com/v3/leagues', {
          params: { search: term },
          headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': 'f89acc49f0mshfc233a01bb1f12dp1cdc9cjsndf01fbd6276c'
          }
        })
        if (data.response.length > 0 && term !== '') {
          let newResponse = data.response.slice(0, 5)
          setResults(newResponse.slice(0, 5))
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

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" theme={theme}>
            <Toolbar>
              <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                  Should I watch it?
              </Typography>

              <Autocomplete
                options={results}
                style={{ width: '30ch' }}
                clearOnBlur={true}
                blurOnSelect={true}
                freeSolo
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
                        <div>{option.league.name}</div>
                      </Grid>
                    </Grid>
                  </li>
                )}
                renderInput={(params) => (
                  <TextField {...params} onChange={(e) => setTerm(e.target.value)} placeholder="Search League"/>
                  
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