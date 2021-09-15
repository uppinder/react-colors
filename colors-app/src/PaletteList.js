import React, { Component } from 'react'
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <MiniPalette />
                {palettes.map(palette => (
                    <MiniPalette {...palette} />
                ))}
            </div>
        )
    }
}

export default PaletteList;