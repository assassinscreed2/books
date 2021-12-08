import * as React from 'react';
import { Divider, Grid, IconButton, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    marginLeft:"1em"
  },
  iconButton: {
    backgroundColor: theme.palette.primary.main,
    "&:hover":{
        backgroundColor: theme.palette.primary.dark
    }
  }
}));

export default function Book({pic,detail}){

    const theme = useTheme();
    const classes = useStyles();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  
    
return <Grid container justifyContent="space-around" alignItems="center" direction = {matchesMD?"column":"row"} 
        style={{marginTop:"2em"}}>
          <Grid item md container justifyContent="center" alignItems="center" style={{maxWidth:"10em"}}>
            <Grid item >
              {matchesMD?<Image src={pic} width={150} height={205}/>:<Image src={pic} width={105} height={155}/>}
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item md style={{marginLeft:"3em",marginTop:matchesMD?"2em":undefined}}>
            <Typography>
              <strong>{detail}</strong>
            </Typography>
          </Grid>
          {matchesMD?undefined:<Divider orientation="vertical" flexItem />}
          <Grid item md container direction = "row" alignItems="center" justifyContent="space-around" style={{maxWidth:"12em",marginTop:matchesMD?"2em":undefined}}>
            <Grid item>
              <IconButton aria-label="add" color="secondary" classes={{root:classes.iconButton}}>
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item>
              2
            </Grid>
            <Grid item>
              <IconButton aria-label="remove" color="secondary" classes={{root:classes.iconButton}}>
                <RemoveIcon />
              </IconButton>
            </Grid>
          </Grid>
          {matchesMD?undefined:<Divider orientation="vertical" flexItem />}
          <Grid md item container direction = {matchesMD?"row":"column"}  style={{maxWidth:"25em",marginTop:matchesMD?"2em":undefined}} alignContent="center" 
          justifyContent="center">
            <Grid item sm>
              <Button variant="contained" size="small"><Typography color="white" style={{textTransform:"none"}}>View Product</Typography> 
                <KeyboardArrowDownIcon color="primary" classes={{root:classes.root}}/>
              </Button>
            </Grid>
            <Grid item style={{marginTop:matchesMD?undefined:"2em"}} sm>
              <Button variant="text" style={{backgroundColor:"#ECECEC",width:"12.5em"}}>
                <Typography style={{textTransform:"none"}}>
                  Remove
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
}