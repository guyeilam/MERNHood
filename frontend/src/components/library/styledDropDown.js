import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
    minWidth: 100,
  },
});


class SimpleMenu extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const StyledMenuItem = styled(MenuItem)`
        justify-content: center !important;
        :hover {
         background-color: #e9fff8 !important;
       }
       :focus {
         background-color: #e9fff8 !important;
       }
    `

    return (
      <div>
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          Toggle Menu Grow
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList 
                    style={{ minWidth: 200, borderTop: '5px solid #21ce99',}}>
                    <StyledMenuItem onClick={this.handleClose}>Item1</StyledMenuItem>
                    <StyledMenuItem onClick={this.handleClose}>Item2</StyledMenuItem>
                    <StyledMenuItem onClick={this.handleClose}>Item3</StyledMenuItem>
                    <StyledMenuItem onClick={this.handleClose}>Item4</StyledMenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}
export default withStyles(styles)(SimpleMenu);