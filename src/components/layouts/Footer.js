import * as React from "react"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1976d2' : '#1976d2',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const Footer = () =>{
   return ( 
    <AppBar position="static">
        <Container maxWidth="xl">
            <h1> Footer </h1>
        <Grid container spacing={1} columns={12}>
            <Grid item xs={4}>
                <h3> RESOURCE </h3>
                <p>Application</p>
                <p>Documentation</p>
                <p>System</p>
            </Grid>
            <Grid item xs={4}>
                <h3> PRICING </h3>
                <p>Overview</p>
                <p>Premium Plans</p>
                <p>Affiliate Programm</p>
            </Grid>
            <Grid item xs={4}>
                <h3> SOCIAL </h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </Grid>
        </Grid>
        </Container>
    </AppBar>    
    )
}

export default Footer;