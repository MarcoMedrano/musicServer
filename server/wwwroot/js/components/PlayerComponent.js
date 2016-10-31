import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';

import Pulse from 'grommet/components/icons/Pulse';
import PlayIcon from 'grommet/components/icons/base/Play';
import PauseIcon from 'grommet/components/icons/base/Pause';
import NextIcon from 'grommet/components/icons/base/ChapterNext';
import PreviousIcon from 'grommet/components/icons/base/ChapterPrevious';

export default class PlayerComponent extends Component {

  constructor (props) {
    super(props);

    this._onPlayPause = this._onPlayPause.bind(this);


    this.state = {playing:true};
  }

  _onPlayPause() {
    this.setState({playing: !this.state.playing});
    
  }

  renderCurrentSong(){
    if(this.state.playing)
        return <Box full='horizontal' direction='row' align='center' pad={{between:'xsmall'}}>
                    <marquee scrollamount='5'>♫</marquee>
                    <marquee scrollamount='3' direction='right'>
                    <Heading tag='h3'>♫ ♫ Current Song 123 ♪ ♪</Heading>
                    </marquee> 
                    <marquee scrollamount='5' direction='right'>♪</marquee> 
                </Box> 

    return <Heading tag='h3'>♫   Current Song  ♪</Heading>;
  }

  render(){
    console.log('rendering PLayerComponent');
    let mainIcon = this.state.playing ? <PauseIcon/> : <Pulse icon={<PlayIcon/>}/>;

    return <Box align="center" direction='column'>
              {this.renderCurrentSong()}
              <Box direction='row' align='center' pad={{between:'small'}}>
                <Value value='0:00' size='xsmall' />
                <Meter value={50} size='medium'/>
                <Value value='3:45' size='xsmall'/>
              </Box>
              <Box direction='row' pad={{between:'large'}}>
                <Button icon={<PreviousIcon/>} onClick={this._onPlayPause}/>
                <Button icon={mainIcon} onClick={this._onPlayPause}/>
                <Button icon={<NextIcon/>} onClick={this._onPlayPause}/>
              </Box>
          </Box>
  }
}