import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { blue, red } from "@mui/material/colors";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = { deleteDialogOpen: false, aboutToDeletePaletteId: "" };

    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
  }

  deletePalette() {
    this.props.deletePalette(this.state.aboutToDeletePaletteId);
    this.handleClose();
  }

  handleDelete(paletteId) {
    this.setState({
      deleteDialogOpen: true,
      aboutToDeletePaletteId: paletteId,
    });
  }

  goToPalette(paletteId) {
    this.props.history.push(`/palette/${paletteId}`);
  }

  handleClose() {
    this.setState({ deleteDialogOpen: false, aboutToDeletePaletteId: "" });
  }

  render() {
    const { palettes, classes } = this.props;

    const { deleteDialogOpen } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.header}>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} timeout={500} classNames="fade">
                <MiniPalette
                  key={palette.id}
                  {...palette}
                  handleDelete={this.handleDelete}
                  goToPalette={this.goToPalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={deleteDialogOpen}
          onClose={this.handleClose}
          aria-labelledby="delete-dialog-title"
        >
          <DialogTitle>Delete this Palette?</DialogTitle>
          <List>
            <ListItem button onClick={this.deletePalette}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.handleClose}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Close</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
