import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Meter from 'grommet/components/Meter';
import Section from 'grommet/components/Section';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Value from 'grommet/components/Value';

import Status from 'grommet/components/icons/Status';

import FileListItem from './FileListItem';

function getLabel(label, value, colorIndex) {
  return { label, value, colorIndex };
}

export default class FileStatusPanel extends Component {

  constructor () {
    super();

    this._onRequestForAdd = this._onRequestForAdd.bind(this);
    this._onRequestForAddClose = this._onRequestForAddClose.bind(this);
    this._onRequestForDelete = this._onRequestForDelete.bind(this);
    this._onAddFile = this._onAddFile.bind(this);

    // this.state = {
    //   files: [],
    //   addFile: false
    // };

    this.state = {
      files: [{id:0, progress: 80, name:"maluma - Borro Cassett.mp3", status:"inProgress"},
              {id:5, progress: 50, name:"AUD - Solo por tu amor.mp3", status:"inProgress"},
              {id:1, progress: 10, name:"maluma - Borro Cassett grabado de donde nose q putas lugar.mp3", status:"failed"},
              {id:6, progress: 90, name:"maluma - Other .avi", status:"failed"},
              {id:2, progress: 100, name:"maluma - Desde esa noche.mp3", status:"completed"},
              {id:3, progress: 100, name:"maluma - Desde esa noche.mp4", status:"completed"},
              {id:4, progress: 100, name:"maluma - Desde esa noche unknow format.accfile", status:"completed"},
              {id:10, progress: 100, name:"AUD - Tres Notas.mp3", status:"completed"}],
      addFile: false
    }; 
  }

  _onRequestForAdd () {
    this.setState({addFile: true});
  }

  _onRequestForAddClose () {
    this.setState({addFile: false});
  }

  _onRequestForDelete (index) {
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
        <FileListItem key={`fli_${file.id}`} file={file} onDelete = {x => {}}/>
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

    return (
      <Section primary={true} flex={true}>
        <Box direction='column'>
          <Box basis='1/4' align="center">
            <Meter series={series} type="circle" label={false} onActive={(index) => this.setState({ index: index })} />
            <Box direction="row" justify="between" align="center" responsive={false}>
              <Value value={value} units="Files" align="center" label={label} />
            </Box>
          </Box>
          <Box basis='3/4' align="center">
            <Box pad={{ vertical: 'medium' }} >
              <Button label="Add File" primary={true} onClick={this._onRequestForAdd} />
            </Box>
            <List>
              {files}
            </List>
          </Box>
        </Box>
        {addFile}
      </Section>
    );
  }
}
