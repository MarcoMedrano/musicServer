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

function getLabel(label, value, colorIndex) {
  return { label, value, colorIndex };
}

export default class FileStatusPanel extends Component {

  constructor (props) {
    super(props);

    this._onRequestForAdd = this._onRequestForAdd.bind(this);
    this._onRequestForAddClose = this._onRequestForAddClose.bind(this);
    this._onRequestForDelete = this._onRequestForDelete.bind(this);
    this._onAddFile = this._onAddFile.bind(this);

    // this.state = {
    //   files: [],
    //   addFile: false
    // };
    
    this.state = {
      files: [{id:0, progress: 80, name:"maluma - thalia Borro Cassett.mp3", status:"inProgress"},
              {id:5, progress: 50, name:"AUD - Solo por tu amor.mp3", status:"inProgress"},
              {id:1, progress: 10, name:"maluma - Borro Cassett grabado de donde nose q putas lugar.mp3", status:"failed"},
              {id:6, progress: 90, name:"maluma - Other .avi", status:"failed"},
              {id:2, progress: 100, name:"maluma - Desde esa noche.mp3", status:"completed"},
              {id:3, progress: 100, name:"maluma - Desde esa noche.mp4", status:"completed"},
              {id:4, progress: 100, name:"maluma - Desde esa noche unknow format.accfile", status:"completed"},
              {id:10, progress: 100, name:"AUD - Tres Notas.mp3", status:"completed"}],
      addFile: false
    };

    // let files =[];
    // for(let i=0; i<100; i++)
    // {
    //   files.push({id:i, progress: 50, name:"AUD - Solo por tu amor.mp3", status:"inProgress"});
    // } 
    // this.state = {files:files, addFile:false};
  }

  _onRequestForAdd () {
    console.log('request add');
    this.setState({addFile: true});
  }

  _onRequestForAddClose () {
    this.setState({addFile: false});
  }

  _onRequestForDelete (file) {
    let index = this.state.files.indexOf(file);
    let files = this.state.files;
    files.splice(index, 1);
    this.setState({files: files});
  }

  _onAddFile (file) {
    let files = this.state.files;
    files.push(file);
    this.setState({files: files, addFile: false});
  }

  render () {

    let fileStatus = {
      completed: 0,
      inProgress: 0,
      failed: 0
    };

    let files = this.state.files.map((file, index) => {

      fileStatus[file.status] += 1;

      let separator;
      if (index === 0) {
        separator = 'horizontal';
      }
      return (
        <FileListItem key={`fli_${file.id}`} file={file} onCancel = {this._onRequestForDelete}/>
      );
    }, this);

    let addFile;
    if (this.state.addFile) {
        //<TodoAddFileForm onClose={this._onRequestForAddClose} onSubmit={this._onAddFile} />
      
      addFile = (<div/>);
    }

    const series = [
      getLabel('Completed', fileStatus.completed, 'ok'),
      getLabel('In Progress', fileStatus.inProgress, 'graph-1'),
      getLabel('Failed', fileStatus.failed, 'critical')
    ];

    let value, label;
    if (this.state.index >= 0) {
      value = series[this.state.index].value;
      label = series[this.state.index].label;
    } else {
      value = 0;
      series.forEach(serie => value += serie.value);
      label = 'Total';
    }
//////////// SET YOUR DEV ENV /////////////////
    return (
      <Section primary={true}  pad={{vertical:null}}  full={true}>
        <Header fixed={true} justify="between"  colorIndex="neutral-1">
          <Button icon={<CloudIcon size="large" type="logo" />} onClick={this.props.onLogoIconClick} />
          <Title>♪ MusicServer++ ♫</Title>
          <Search inline={false} fill={false} dropAlign={{"right": "right"}} size="small" placeHolder="Buscar" />
        </Header>
        <Box direction='column'>
          <Box align="center">
            <Meter series={series} type="circle" label={false} onActive={(index) => this.setState({ index: index })} />
            <Box margin={{top:'small', bottom:'medium'}} justify="center" align="center" responsive={false}>
              <Value value={value} units="Files" size="small" label={label} />
            </Box>
          </Box>
          <Box  align="center">
            <Box pad={{ vertical: 'small' }} >
              <Button label="Add File" primary={false} onClick={this._onRequestForAdd} />
            </Box>
            <List>
              {files}
            </List>
          </Box>
          <Footer colorIndex='accent-3-a' primary={true} size='small' fixed={true} >
          Add File
          <Button align='end' plain={true} icon={<AddIcon size='small'/>}/>
          </Footer>
        </Box>
      </Section>
    );
  }
}
