import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'


class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
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
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              marginTop: 50,
              borderTop: '5px solid #21ce99',
              minWidth: 140,
              maxHeight: 150,
            }
          }}
  >
          <StyledMenuItem onClick={this.handleClose}>Item1</StyledMenuItem>
          <StyledMenuItem onClick={this.handleClose}>Item2</StyledMenuItem>
          <StyledMenuItem onClick={this.handleClose}>Item3</StyledMenuItem>
          <StyledMenuItem onClick={this.handleClose}>Item4</StyledMenuItem>
          <StyledMenuItem onClick={this.handleClose}>Item5</StyledMenuItem>
          <StyledMenuItem onClick={this.handleClose}>Item6</StyledMenuItem>
          <StyledMenuItem onClick={this.handleClose}>Item7</StyledMenuItem>
          <StyledMenuItem onClick={this.handleClose}>Item8</StyledMenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;