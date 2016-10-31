import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Select from 'grommet/components/Select';
import Label from 'grommet/components/Label';

export default class PlayAsComponent extends Component {

  constructor (props) {
    super(props);
    this._onPlayAsChanged =this._onPlayAsChanged.bind(this);
    this.options = ["As arrives", "By Genere", "By Artist"];
    this.state = {playAsSelected: this.options[0]};
    }
  
  _onPlayAsChanged (e){
      this.setState({playAsSelected:e.option});
  }

  renderSubFilter(){
    let filter = [];
    switch (this.state.playAsSelected){
      case this.options[0]: return null;
      case this.options[1]: filter=["Rock", "Pop", "Cumbia"]; break;
      case this.options[2]: filter=["Paulina Rubio", "Thalia", "AU-D", "Maluma", "Vico-C", "La Oreja de Vangoc", "April Lavige", "Adele", "Maroon 5", "Bruno Mars", "Mecano", "Ov7", "Efecto Mandarina", "Sin Banderas"]; break;
    }

    return <Select id="select2" multiple={true} value={filter[0]} options={filter}  onSearch={()=>{}} />
  }

  render() {
    console.log('rendering PlayAsComponent');

    return <Box direction='row' justify='center'>
              <Label>Play:</Label>
              <Box pad='small'>
                <Select id="select1" value={this.state.playAsSelected} options={this.options} onChange= {this._onPlayAsChanged}/>
              </Box>
              <Box pad='small'>
                {this.renderSubFilter()}
              </Box>
           </Box>  
  }    
}