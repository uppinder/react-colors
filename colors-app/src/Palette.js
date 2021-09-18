import React, { Component } from "react";
import ColorBox from './ColorBox';
import NavBar from './Navbar';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level : 500,
      defaultFormat: 'hex',
      format : 'hex'
    }
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level })
  }

  changeFormat(format) {
      this.setState({ format })
  }

  render() {
    const { colors, id, paletteName, emoji } = this.props.palette;
    const { level, defaultFormat, format } = this.state;

    const colorBoxes = colors[level].map(color => (
        <ColorBox 
            key={color.id} 
            background={color[format]} 
            name={color.name}
            moreUrl={`/palette/${id}/${color.id}`}
        />
    ))

    return (
      <div className='Palette'>
        <NavBar 
            level={level}
            changeLevel={this.changeLevel}
            defaultFormat={defaultFormat}
            changeFormat={this.changeFormat}
        />
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
        <footer className='Palette-footer'>
            {paletteName}
            <span className='emoji'>{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
