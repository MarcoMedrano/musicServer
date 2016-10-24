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

import Status from 'grommet/components/icons/Status';
import AddIcon from 'grommet/components/icons/base/Add';
import PulseIcon from 'grommet/components/icons/Pulse';
import CloudIcon from 'grommet/components/icons/base/Cloud';

import FileListItem from './FileListItem';

export default class FileStatusPanel extends Component {

  constructor (props) {
    super(props);

    this._onRequestForAdd = this._onRequestForAdd.bind(this);
    this._onRequestForDelete = this._onRequestForDelete.bind(this);
    this._onFileUpload = this._onFileUpload.bind(this);
    
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
      metterIndexSelected: -1
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
    document.getElementById('inputMultipleFiles').addEventListener('change', this._onFileUpload, false);
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

  renderMetter(){
    console.log('rendering metter');
    this.series[0].value = this.state.files.filter(f => f.status == 'completed').length;
    this.series[1].value = this.state.files.filter(f => f.status == 'inProgress').length;
    this.series[2].value = this.state.files.filter(f => f.status == 'failed').length;

    let value, label;
    if (this.state.metterIndexSelected >= 0) {
      value = this.series[this.state.metterIndexSelected].value;
      label = this.series[this.state.metterIndexSelected].label;
    } else {
      value = this.state.files.length;
      label = 'Total';
    }

    return <Box align="center">
              <Meter series={this.series} type="circle" label={false} onActive={(index) => this.setState({ metterIndexSelected: index, files:this.state.files })} />
              <Box margin={{top:'small', bottom:'medium'}} justify="center" align="center" responsive={false}>
                <Value value={value} units="Files" size="small" label={label} />
              </Box>
          </Box>
  }

  render () {
/// <Section primary={true}  pad={{vertical:null}}  full={true}> ///
    return (
      <Box full={true}>
        <Header fixed={true} justify="between"  colorIndex='brand'>
          <Button icon={<CloudIcon size="large" type="logo" />} onClick={this.props.onLogoIconClick} />
          <Title>♪ MusicServer++ ♫</Title>
          <Search inline={false} fill={false} dropAlign={{"right": "right"}} size="small" placeHolder="Buscar" />
        </Header>
        <Box direction='column'>
          {this.renderMetter()}
          <Box  align="center">
            <Box pad={{ vertical: 'small' }} >
              <input type="file" multiple style={{display:'none'}} id="inputMultipleFiles"/>
              <Button label="Add Files" primary={false} onClick={this._onRequestForAdd} />
            </Box>
            <List>
              {this.renderFileListItems()}
            </List>
          </Box>
        </Box>
      </Box>
    );
  }
}
