import React from 'react';
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
        backgroundColor: 'white',
        border: '3px solid black',
        position: 'relative',
        '&:hover': {
            'cursor': 'pointer'
        }
    },
    colors: {
        backgroundColor: 'grey'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2px',
        position: 'relative'
    },
    emoji: {
        marginLeft: '2px'
    }
}

function MiniPalette(props) {
    const { classes, paletteName, id, emoji } = props;

    return (
        <div className={classes.root}>
            <div className={classes.colors}>

            </div>
            <div className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </div>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);