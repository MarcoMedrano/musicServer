import React, { Component } from 'react';

import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Title from 'grommet/components/Title';
import Meter from 'grommet/components/Meter';
import Section from 'grommet/components/Section';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Value from 'grommet/components/Value';
import Footer from 'grommet/components/Footer';
import Select from 'grommet/components/Select';
import Label from 'grommet/components/Label';

import Status from 'grommet/components/icons/Status';
import Pulse from 'grommet/components/icons/Pulse';
import CloudIcon from 'grommet/components/icons/base/Cloud';
import PlayIcon from 'grommet/components/icons/base/Play';
import PauseIcon from 'grommet/components/icons/base/Pause';
import NextIcon from 'grommet/components/icons/base/ChapterNext';
import PreviousIcon from 'grommet/components/icons/base/ChapterPrevious';

import FileListItem from './FileListItem';

export default class NowPlayingPanel extends Component {

  constructor (props) {
    super(props);

    this._onRequestForAdd = this._onRequestForAdd.bind(this);
    this._onRequestForDelete = this._onRequestForDelete.bind(this);
    this._onFileUpload = this._onFileUpload.bind(this);
    this._onPlayPause = this._onPlayPause.bind(this);
    // this.state = {
    //   files: [],
    //   metterIndexSelected: -1
    // };

    this.state = {
      files: [{id:0, sourceType:'wifi', progress: 80, name:"maluma - thalia Borro Cassett.mp3", status:"inProgress"},
              {id:1, sourceType:'bluetooth', progress: 50, name:"AUD - Solo por tu amor.mp3", status:"inProgress"},
              {id:2, sourceType:'bluetooth', progress: 10, name:"maluma - Borro Cassett grabado de donde nose q putas lugar.mp3", status:"failed"},
              {id:3, sourceType:'wifi', progress: 90, name:"maluma - Other .avi", status:"failed"},
              {id:4, sourceType:'bluetooth', progress: 99, name:"maluma - Desde esa noche.mp3", status:"inProgress"},
              {id:5, sourceType:'usb', progress: 100, name:"maluma - Desde esa noche.mp4", status:"completed"},
              {id:6, sourceType:'usb', progress: 100, name:"maluma - Desde esa noche unknow format.accfile", status:"completed"},
              {id:7, sourceType:'usb', progress: 100, name:"AUD - Tres Notas.mp3", status:"completed"}],
      metterIndexSelected: -1,
      playing:true
    };

    // let files =[];
    // for(let i=0; i<100; i++)
    // {
    //   files.push({id:i, progress: 50, name:"AUD - Solo por tu amor.mp3", status:"inProgress"});
    // } 
    // this.state = {files:files,metterIndexSelected: -1};

    this.series = [
      {label:'Completed', value:0, colorIndex:'ok'},
      {label:'In Progress', value:0, colorIndex:'graph-1'},
      {label:'Failed', value:0, colorIndex:'critical'}
    ];
  }

  componentDidMount() {

  }

  _onPlayPause() {
    this.setState({files: this.state.files, metterIndexSelected: this.state.metterIndexSelected, playing: !this.state.playing});
    
  }

  _onFileUpload (e){
    console.log("_onFileUpload " + e.target.files.length);
    let filesToAdd = [];

    for(let i=0; i< e.target.files.length; i++){
      let file = e.target.files[i];
      console.log(file);
      filesToAdd.push({id:this.state.files.length + i , sourceType:'wifi', progress: 1, name:file.name, status:'inProgress'});
    }

    let files = filesToAdd.concat(this.state.files);
    this.setState({files: files, metterIndexSelected: this.state.metterIndexSelected});
  }

  _onRequestForAdd () {
    console.log('request add');
    document.getElementById('inputMultipleFiles').click(); 
  }

  _onRequestForDelete (file) {
    let index = this.state.files.indexOf(file);
    let files = this.state.files;
    files.splice(index, 1);
    this.setState({files: files, metterIndexSelected: this.state.metterIndexSelected});
  }

  renderFileListItems() {
    console.log('rendering FileListItems');

    return this.state.files.map((file, index) => {
      return <FileListItem key={`fli_${file.id}`} file={file} onCancel = {this._onRequestForDelete}/>;
    }, this);
  }

  renderPlayingOrder() {
    console.log('rendering playing order');
    let options = ["As arrives", "By Genere", "By Artist"];
    let artists = ["Paulina Rubio", "Thalia", "AU-D", "Maluma", "Vico-C", "La Oreja de Vangoc", "April Lavige", "Adele", "Maroon 5", "Bruno Mars", "Mecano", "Ov7", "Efecto Mandarina", "Sin Banderas"];

    return <Box direction='row' justify='center'>
            <Label>Play:</Label>
            <Box pad='small'>
              <Select id="item1" value={options[0]} defaultValue={options[0]} options={options} />
            </Box>
            <Box pad='small'>
              <Select id="item2" multiple={true} value={artists[0]} options={artists}  onSearch={()=>{}} />
            </Box>
    </Box>  

  }

  renderCurrentSong(){
    console.log('rendering current song');
    
    let mainIcon = this.state.playing ? <PauseIcon/> : <Pulse icon={<PlayIcon/>}/>;
    let currentSong = this.state.playing ?
    <Box direction='row' pad={{between:'small'}}>
                      <marquee scrolldelay={3000}>♫</marquee>
                      <marquee scrolldelay={1000} direction='right'>
                        <Heading tag='h3'>♫ ♫ Current Song 123 ♪ ♪</Heading>
                      </marquee> 
                      <marquee scrolldelay={3000} direction='right'>♪</marquee> 
    </Box> 
                        :
                      <Heading tag='h3'>♫   Current Song  ♪</Heading>;

    return <Box align="center" direction='column'>
              {currentSong}
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

  render () {
    return (
      <Box full={true}>
        <Header fixed={true} justify="between"  colorIndex='brand'>
          <Button icon={<CloudIcon size="large" type="logo" />} onClick={this.props.onLogoIconClick} />
          <Title>♪ MusicServer++ ♫</Title>
          <Search inline={false} fill={false} dropAlign={{"right": "right"}} size="small" placeHolder="Buscar" />
        </Header>
        <Box direction='column'>
          {this.renderCurrentSong()}
          {this.renderPlayingOrder()}
          <Box  align="center">
            <List>
              {this.renderFileListItems()}
            </List>
          </Box>
        </Box>
      </Box>
    );
  }
}
