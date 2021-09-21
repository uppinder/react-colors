import React, { Component } from "react";
import ColorBox from './ColorBox';
import NavBar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    paletteColors: {
        height: '90%'
    }
};

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level : 500,
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
    const { classes } = this.props;
    const { colors, id, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
        <ColorBox 
            key={color.id} 
            background={color[format]}
            name={color.name}
            moreUrl={`/palette/${id}/${color.id}`}
            showFullPalette={true}
        />
    ))

    return (
      <div className={classes.palette}>
        <NavBar 
            showLevelSlider={true}
            level={level}
            changeLevel={this.changeLevel}
            defaultFormat='hex'
            changeFormat={this.changeFormat}
        />
        <div className={classes.paletteColors}>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
