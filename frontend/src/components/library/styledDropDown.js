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
  constructor(props){
    super(props);
    this.state = {open: false}
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  createMenuItem() {
    const StyledMenuItem = styled(MenuItem)`
        justify-content: center !important;
        :hover {
         background-color: #e9fff8 !important;
       }
       :focus {
         background-color: #e9fff8 !important;
       }
    `
    let menuItems = []
    this.props.children.forEach((child, idx) => {
      menuItems.push(
        <StyledMenuItem key={idx} onClick={this.handleClose}>{child}</StyledMenuItem>
      )
    })

    return menuItems;
  }

  render() {
    const { open } = this.state;
    let items = this.createMenuItem();
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
          {this.props.title}
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
                    {items}
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