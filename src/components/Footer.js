import React from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    footer: {
        paddingBottom: theme.spacing(2),
        flexDirection: 'row',
        color: 'white',
        position: 'fixed',
        bottom: '0',
        textAlign: 'center',
        width: '100%'
    },
    footerItem: {
        marginRight: theme.spacing(3),
    }
}))

function Copyright(props) {
    return (
        <Typography variant="body2" align="center" className={props.className}>
            {'Gaby Maiori - Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    const classes = useStyles()

    let OnClick = (par) => {
        window.location.href = par
    }

    return (
        <div className={classes.footer}>
            <Copyright className={classes.footerItem} />

            <IconButton
                color="inherit"
                aria-label="upload picture"
                component="span"
                className={classes.footerItem}
                onClick={() => OnClick('https://www.linkedin.com/in/gabriel-maiori-646801170/')}
            >
                <LinkedInIcon />
            </IconButton>

            <IconButton
                color="inherit"
                aria-label="upload picture"
                component="span"
                className={classes.footerItem}
                onClick={() => OnClick('https://github.com/Shumaister')}
            >
                <GitHubIcon />
            </IconButton>
        </div>
    )
}
//TO DO: arreglar footer para que quede todo alineado https://css-tricks.com/snippets/css/a-guide-to-flexbox/