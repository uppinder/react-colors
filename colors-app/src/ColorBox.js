import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'
import chroma from 'chroma-js';
import './ColorBox.css';

const styles = {
    colorBox: {
        height: props => props.showFullPalette ? '25%' : '50%',
        width: '20%',
        position: 'relative',
        margin: '0 auto',
        display: 'inline-block',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        '&:hover button': {
            opacity: '1',
            transition: '0.5s'
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
    },
    seeMore: {
        position: 'absolute',
        right: '0px', 
        bottom: '0px',
        background: 'rgb(255, 255, 255, 0.3)',
        border: 'none',
        color: props => chroma(props.background).luminance() >= 0.7 ? 'rgb(0,0,0,0.5)' : 'white',
        height: '30px',
        width: '60px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase'
    },
    copyButton: {
        height: '30px',
        width: '100px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none', 
        background: 'rgb(255, 255, 255, 0.3)',
        lineHeight: '30px',
        fontSize: '1rem',
        color: props => chroma(props.background).luminance() >= 0.7 ? 'rgb(0,0,0,0.5)' : 'white',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none',
        opacity: 0,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    boxContent: {
        position: 'absolute',
        padding: '10px',
        left: '0px',
        bottom: '0px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '0.8rem'
    },
    copyOverlay: {
        opacity: '0',
        height: '100%',
        width: '100%',
        zIndex: '0',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)'
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(25)',
        zIndex: '5',
        position: 'absolute',
    },     
    copyMsg: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '2rem',
        color: 'white',
        transform: 'scale(0.1)',
        opacity: '0',
        textTransform: 'uppercase',
        background: 'rgb(255, 255, 255, 0.2)',
        '& h1': {
            fontWeight: '400',
            textShadow: '1px 2px black',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
            padding: '1rem'
        },
        '& p': {
            textTransform: 'lowercase',
            fontSize: '2rem',
            fontWeight: '100'
        }
    },
    showMsg: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.3s'
    }
};

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied : false
        }

        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        this.setState({ copied : true }, () => {
            setTimeout(() => this.setState({ copied : false}), 1500);
        });
    }

    render() {
        const { background, name, moreUrl, showFullPalette, classes } = this.props;
        const { copied } = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{ backgroundColor : background }} className={classes.colorBox}>
                    <div 
                        style={{ backgroundColor : background }} 
                        className={`${classes.copyOverlay} 
                            ${copied && classes.showOverlay}`}
                    />
                    <div className={`${classes.copyMsg} ${copied && classes.showMsg}`} >
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button> 
                    </div>
                    {showFullPalette && (
                        <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                            <span className={classes.seeMore}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);