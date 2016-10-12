
import React, { Component, PropTypes } from 'react';
//import { navActivate } from '../actions';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
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
    this.props.dispatch({type: "NAV_ACTIVE", active: false});
  }

  render() {
    return (
      <Sidebar colorIndex="neutral-1" fixed={true} separator="right">
        <Header justify="between" pad={{horizontal: 'medium'}}>
          <CloudIcon type="logo" size="large"/>
          <Title onClick={this._onClose} a11yTitle="Close Menu"> Menu </Title>
          <Menu responsive={false}>
            <Button plain={true} a11yTitle="Close Menu"
              onClick={this._onClose} icon={<CloseIcon />} />
          </Menu>
        </Header>
        <Menu primary={true}>
          <Anchor label="Now Playing" href="home/NowPlaying" primary={true} />
          <Anchor label="Files" href="home/Files" />
          <Anchor label="File Status" href="home/Files Status" />
          <Anchor label="About" href="home/About" />
        </Menu>
        <Footer pad="medium">
        </Footer>
      </Sidebar>
    );
  }
}

MainSidebar.propTypes = {
  onClose: PropTypes.func,
  path: PropTypes.string
};

module.exports = MainSidebar;