import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: '100px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        marginBottom: '-3.5px',
        position: 'relative'
    }
};

function MiniPalette(props) {
    const { classes, paletteName, emoji, id, colors, history} = props;
    const miniColorBoxes = colors.map(color => (
        <div 
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}/>
    ))

    return (
        <div className={classes.root} onClick={() => history.push(`/palette/${id}`)}>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <div className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </div>
        </div>
    )
}

export default withRouter(withStyles(styles)(MiniPalette));