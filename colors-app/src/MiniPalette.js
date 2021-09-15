import React from 'react';
import { withStyles } from '@material-ui/core/styles'

const styles = {
    main: {
        backgroundColor: 'orange',
        '& h1': {
            color: 'blue'
        }
    },
    secondary: {
        color: 'purple',
        '& span': {
            backgroundColor: 'cyan'
        }
    }
}

function MiniPalette(props) {
    const { classes } = props;
    console.log(classes);

    return (
        <div className={classes.main}>
            <h1>Mini Palette</h1>
            <div className={classes.secondary}>
                <p>This is a <span>paragraph</span>.</p>
            </div>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);