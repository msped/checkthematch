import apiClient from '../api/apiConfig';
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

import LoadingSkeleton from '../components/skeletons/LoadingSkeleton'

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
        const { data }  = await apiClient.get('/leagues', {
          params: { search: term }
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

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" theme={theme}>
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                sx={{ 
                  flexGrow: 1, 
                  display: { xs: 'none', sm: 'flex' },
                  
                  fontFamily: 'Patua One, cursive'
                }}
              >
                <Link href='/' underline='none' 
                  sx={{
                    color: '#fff', cursor: 'pointer',
                  }}
                >
                  CHECK THE MATCH
                </Link>
              </Typography>

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
                  <li {...props} key={option.league.id}>
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