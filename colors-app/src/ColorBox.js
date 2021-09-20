import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';

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
        const { background, name, moreUrl, showMore } = this.props;
        const { copied } = this.state;
        const isDarkColor = chroma(background).luminance() <= 0.08;
        const isLightcolor = chroma(background).luminance() >= 0.6;

        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{ backgroundColor : background }} className='ColorBox'>
                    <div 
                        style={{ backgroundColor : background }} 
                        className={`copy-overlay ${copied && 'show'}`} 
                    />
                    <div className={`copy-msg ${copied && 'show'}`} >
                        <h1>copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span className={isDarkColor ? 'light-text' : null}>{name}</span>
                        </div>
                        <button className={`copy-button ${isLightcolor && 'dark-text'}`}>Copy</button> 
                    </div>
                    {showMore && (
                        <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                            <span className={`see-more ${isLightcolor && 'dark-text'}`}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;