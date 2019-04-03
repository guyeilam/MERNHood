// Component examples library
import React from 'react';
import { Box, Text, Sticky } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './library.css';
import DropDown from './dropdown';
import { ColorButton } from './buttons'
import { LightGreenLink, ColorLink } from './links'
import { Logo } from './logo'
import Badge from './badge'

export default class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  // //////////// -- Note --
  // Box, Text, Sticky from gestalt used here
  // but are not needed to use DropDown, ColorButton,
  // LightGreenLink, ColorLink, or Logo components elsewhere. 
  // 
  // They are ready to use after import ;)
  // ////////////

  render() {
    return (
      <>
        <Box color="white" height={'80vh'} overflow="scroll" marginTop={"10"} marginLeft={"5"}>
          {/* Logos */}
          <Box>
            <section>
              <Sticky top={0}>
                <Box alignItems="center" color="white" display="flex" height={40}>
                  <Text bold>Logos</Text>
                </Box>
              </Sticky>
              <p>small</p>
              <Logo size='sm' type='day' />
              <Logo size='sm' type='night' />
              <p>medium</p>
              <Logo size='md' type='day' />
              <Logo size='md' type='night' />
              <p>large</p>
              <Logo size='lg' type='day' />
              <Logo size='lg' type='night' />
            </section>
          </Box>
          {/* Dropdowns */}
          <Box>
            <section>
              <Sticky top={0} dangerouslySetZIndex={{ __zIndex: 3 }}>
                <Box alignItems="center" color="white" display="flex" height={40}>
                  <Text bold>Dropdowns</Text>
                </Box>
              </Sticky>
              <DropDown
                title={"Hover Here"}
                text={['link1', 'link2', 'link3']}
                links={['#', '#', '#']} />
              <DropDown
                title={"Another Dropdown"}
                text={['link3', 'link4', 'link5']}
                links={['#', '#', '#']} />
            </section>
          </Box>
          {/* Buttons */}
          <Box>
            <section>
              <Sticky top={0} dangerouslySetZIndex={{ __zIndex: 3 }}>
                <Box alignItems="center" color="white" display="flex" height={40}>
                  <Text bold>Buttons</Text>
                </Box>
              </Sticky>
              {/* colors and hover */}
              <ColorButton text="light green button" padding={2} inline={true} color='green' />
              <ColorButton text="dark green button" padding={2} inline={true} color='green' hue='dark' />
              <ColorButton text="custom color button" padding={2} inline={true} color='red' />
              <ColorButton text="hover color button" padding={2} inline={true} color='gray' hover={true} />
              <ColorButton text="transparent button" padding={2} inline={true} color='transparent' hover={true} />
              {/* sizes */}
              <ColorButton text="small button" padding={2} inline={true} color='green' size='sm' />
              <ColorButton text="medium button" padding={2} inline={true} color='green' size='md' />
              <ColorButton text="large button" padding={2} inline={true} color='green' size='lg' />
            </section>
          </Box>
          {/* Links */}
          <Box>
            <section>
              <Sticky top={0} dangerouslySetZIndex={{ __zIndex: 3 }}>
                <Box alignItems="center" color="white" display="flex" height={40}>
                  <Text bold>Links</Text>
                </Box>
              </Sticky>
              <LightGreenLink text="lightGreen.com" padding={2} />
              <ColorLink text="customColor.com" padding={2} color='blue' />
            </section>
          </Box>
          {/* Badges */}
          <Box>
            <section>
              <Sticky top={0} dangerouslySetZIndex={{ __zIndex: 3 }}>
                <Box alignItems="center" color="white" display="flex" height={40}>
                  <Text bold>Badges</Text>
                </Box>
              </Sticky>
              <Text>Some Text <Badge text={'status'}/></Text>
              <Text>Some Text <Badge text={'status'} type={'dark'}/></Text>
            </section>
          </Box>
        </Box>
      </>
    )
  }
}
