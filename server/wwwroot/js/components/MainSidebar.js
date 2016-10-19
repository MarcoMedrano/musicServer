
import React, { Component, PropTypes } from 'react';
//import { navActivate } from '../actions';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

//import Logo from './Logo'; // './HPELogo';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import CloudIcon from 'grommet/components/icons/base/Cloud';

class MainSidebar extends Component {

  constructor() {
    super();
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    //this.props.dispatch(navActivate(false));
    //this.props.dispatch({type: "NAV_ACTIVE", active: false});
    this.props.onLogoIconClick();
  }

  render() {
    // Change to SideBar when fixed bug of sizes and scroll
    //size={{height:'xxlarge', width:'medium'}}
    return (
      <Box colorIndex='brand' full='vertical' size={{height:'auto', width:'large'}} >
        <Header justify="between" pad={{horizontal:'small'}}>
          <Button plain={true} icon={<CloudIcon size='large' type='logo' />} onClick={this._onClose} />
          <Title onClick={this._onClose} a11yTitle='Close Menu'> Menu </Title>
          
            <Button plain={true} a11yTitle='Close Menu' onClick={this._onClose} icon={<CloseIcon />} />
          
        </Header>
        <Menu primary={true}>
          <Anchor label='Now Playing' href='home/NowPlaying'/>
          <Anchor label='Files' href='home/Files' />
          <Anchor label='File Status' href='home/Files Status'  primary={true} />
          <Anchor label='About' href='home/About' />
        </Menu>
      </Box>
    );
  }
}

MainSidebar.propTypes = {
  onClose: PropTypes.func,
  path: PropTypes.string
};

module.exports = MainSidebar;