import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteStyles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex'
        }

        this._shades = this.gatherShades(props.palette.colors, props.colorId);
        this.changeFormat = this.changeFormat.bind(this);   
    }

    gatherShades(colors, colorId) {
        let shades = [];
        for (let level = 100; level < 1000; level += 100) {
            shades.push(colors[level].find(c => c.id === colorId))
        }

        return shades;
    }

    changeFormat(format) {
        this.setState({ format })
    }

    render() {
        const { classes } = this.props;
        const { paletteName, emoji, id } = this.props.palette;
        const { format } = this.state;

        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                background={color[format]}
                name={color.name}
                key={color.name}
                showFullPalette={false}
            />
        ))

        return (
            <div className={classes.palette}>
                <Navbar
                    showLevelSlider={false}
                    defaultFormat='hex'
                    changeFormat={this.changeFormat}
                />
                <div className={classes.paletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>Go Back</Link>
                    </div>
                </div>

                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);
