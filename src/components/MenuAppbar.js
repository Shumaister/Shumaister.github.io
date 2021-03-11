import React from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar' 
import Button from '@material-ui/core/Button' 
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        float: 'right'
    },
    title: {
        flexGrow: 1,
    },
}));

function MenuAppbar() {
    const classes = useStyles();
   
    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group"  style={{ 'float': 'right' }}>
                        <Button> <Link to="/" style={{ 'color': 'white' }}>Home</Link></Button>
                        <Button><Link to="/portfolio" style={{ 'color': 'white' }}>Portfolio</Link></Button>
                        <Button><Link to="/about" style={{ 'color': 'white' }}>About</Link></Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MenuAppbar
