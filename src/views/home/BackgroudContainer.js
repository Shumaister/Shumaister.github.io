import React from 'react';
import Container from '@material-ui/core/Container';
import Logo from '../../images/background-home-chess.jpg'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    backdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.58,
        zIndex: -1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
        backgroundImage: `url(${Logo})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
    },
}));


function BackgroudContainer(props) { 
    const classes = useStyles();

    return <div classes={classes.root}>
        <Container className={classes.container}>
            <div className={classes.backdrop} />
            <div className={classes.background} />
            {props.children}
        </Container>
    </div>;
}

export default BackgroudContainer