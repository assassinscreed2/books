import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const horizontalShow = () => {
        return <Grid container direction ="row">
                <Grid item sm>
                    <Typography color="white" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Product
                    </Typography>
                </Grid>
                <Grid item container direction = "row" sm justifyContent="space-around">
                    <Grid item>
                        <Typography color="white" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Quality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="white" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Action
                        </Typography>
                    </Grid>
                </Grid>
                </Grid>
            }

    const verticalShow = () => {
      return <><IconButton
      id="basic-button"
      aria-controls="basic-menu"
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      <MenuIcon />
    </IconButton>
    <Menu
      MenuListProps={{style:{paddingTop:"0",paddingBottom:"0"}}}
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem style={{width:"10rem", backgroundColor:"#21BFFD", marginTop:"-0.5em"}} onClick={handleClose} divider>
        <Typography color="secondary">Product</Typography></MenuItem>
      <MenuItem style={{ backgroundColor:"#21BFFD"}} onClick={handleClose} divider><Typography color="secondary">Quality</Typography></MenuItem>
      <MenuItem style={{backgroundColor:"#21BFFD", marginBottom:"-0.5em"}} onClick={handleClose}><Typography color="secondary">Action</Typography></MenuItem>
    </Menu></>
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            {matchesSM?verticalShow():horizontalShow()}
        </Toolbar>
      </AppBar>

    </Box>
  );
}