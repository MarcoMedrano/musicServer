
import React, { Component, PropTypes } from 'react';
//import { navActivate } from '../actions';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';

//import Logo from './Logo'; // './HPELogo';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import CloudIcon from 'grommet/components/icons/base/Cloud';

class MainMenu extends Component {

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
    let baseAddress =  location.origin && location.origin != 'null' ? location.origin : location.href.substr(0, location.href.lastIndexOf('/'));
    let nowPLayingUrl = location.origin && location.origin != 'null' ? baseAddress : baseAddress + "/Index.html" ;
    let fileStatusUrl = location.origin && location.origin != 'null' ?  baseAddress + "/home/FileStatus" : baseAddress + "/FileStatus.html";
    // Change to SideBar when fixed bug of sizes and scroll
    //<Box colorIndex='brand' full='vertical' size={{height:'auto', width:'large'}}>
    return (
      <Sidebar fixed={true}>
        <Header justify="between" pad={{horizontal:'small'}} colorIndex='brand'>
          <Button plain={true} icon={<CloudIcon size='large' type='logo' />} onClick={this._onClose} />
          <Title onClick={this._onClose} a11yTitle='Close Menu'> Menu </Title>
          
            <Button plain={true} a11yTitle='Close Menu' onClick={this._onClose} icon={<CloseIcon />} />
          
        </Header>
        <Menu primary={true}>
          <Anchor label='Now Playing' href={nowPLayingUrl} primary={location.href.indexOf('FileStatus') == -1}/>
          <Anchor label='File Status' href={fileStatusUrl} primary={location.href.indexOf('FileStatus') != -1}/>
        </Menu>
      </Sidebar>
    );
  }
}

MainMenu.propTypes = {
  onClose: PropTypes.func,
  path: PropTypes.string
};

module.exports = MainMenu;