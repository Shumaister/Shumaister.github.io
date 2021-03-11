import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BackgroudContainer from './BackgroudContainer'
import Typography from '@material-ui/core/Typography'
import ReactRotatingText from "react-rotating-text"

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(4),
        color: 'white'
    },
    dinamictitle: {
        marginTop: theme.spacing(4),
        fontFamily: "Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace",
        color: 'white'
    }, 
}));

function Home() {
    const classes = useStyles()

    return (
        <>
            <BackgroudContainer>

                <Typography className={classes.title} align="center" variant="h2" marked="center">
                    Hola, <b>ya llegaste!</b> Soy Gabriel Maiori
            </Typography>

                <Typography className={classes.dinamictitle} align="center" variant="h5" marked="center">
                    Aqui te vas a encontrar a alguien
                <br></br>
                    <br></br>
                    <ReactRotatingText items={['Humano', 'Programador', 'Profesional', 'Profesor', 'Casi Ingeniero', 'Amiguero y Familiero']} />
                    <br></br>
                    <br></br>
                Te invito a pasar!
            </Typography>
            </BackgroudContainer>
        </>
    )
}

export default Home


