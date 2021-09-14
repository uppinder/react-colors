import React, { Component } from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem } from '@material-ui/core';
import 'rc-slider/assets/index.css';
import './Navbar.css'; 

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: props.defaultFormat
        }

        this.handleFormatChange = this.handleFormatChange.bind(this);
    }

    handleFormatChange(evt) {
        const newFormat = evt.target.value;
        this.setState({ format : newFormat});
        this.props.changeFormat(newFormat);
    }

    render() {
        const { level, changeLevel, defaultFormat } = this.props;
        const { format } = this.state;

        return (
            <header className='Navbar'>
                <div className="logo">
                    <a href="#">reactcolorpicker</a>
                </div>
                
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider 
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}
                        />
                    </div>
                </div>

                <div className='select-container'>
                    <Select 
                        defaultValue={defaultFormat} 
                        format={format} 
                        onChange={this.handleFormatChange}>
                        <MenuItem value='hex'>HEX - #FFFFF</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default Navbar;