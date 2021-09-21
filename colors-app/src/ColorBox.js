import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'
import styles from './styles/ColorBoxStyles.js'

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