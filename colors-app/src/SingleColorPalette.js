import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(props.palette.colors, props.colorId)   
    }

    gatherShades(colors, colorId) {
        let shades = [];
        for (let level = 100; level < 1000; level += 100) {
            shades.push(colors[level].find(c => c.id === colorId))
        }

        return shades;
    }

    render() {
        const { palette, colorId } = this.props;

        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                background={color['hex']}
                name={color.name}
                key={color.name}
                showMore={false}
            />
        ))

        return (
            <div className='Palette'>
                <div className='Palette-colors'>
                    {colorBoxes}    
                </div>
            </div>
        )
    }
}

export default SingleColorPalette;
