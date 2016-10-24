import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Button from 'grommet/components/Button';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';

import CloseIcon from 'grommet/components/icons/base/Close';

import MainMenu from './components/MainMenu';
import FileStatusPanel from './components/FileStatusPanel';


class MainApp extends Component {
  
  constructor(){
    super();
    
    this._onLogoIconClicked = this._onLogoIconClicked.bind(this);

    this.state = {mainMenuVisible:false};

  }
  
  _onLogoIconClicked(){
    console.log("Toggling main menu from " + this.state.mainMenuVisible + " to " + !this.state.mainMenuVisible)
    this.setState({mainMenuVisible:!this.state.mainMenuVisible});
  }

  render() {
    let mainMenu = this.state.mainMenuVisible ? <MainMenu onLogoIconClick = {this._onLogoIconClicked}/> : null;

    //TODO: right as priority is not working, check later
    return (
      <App centered={false}>
        <Split flex='right' priority='left' separator={true} fixed={true}>
          {mainMenu}
          <FileStatusPanel onLogoIconClick = {this._onLogoIconClicked}/>
        </Split>
      </App>
    );
  }
}

var element = document.getElementById('content');
ReactDOM.render(React.createElement(MainApp), element);