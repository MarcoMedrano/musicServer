import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Select from 'grommet/components/Select';
import Label from 'grommet/components/Label';
import FormField from 'grommet/components/FormField';

export default class PlayAsComponent extends Component {

  constructor (props) {
    super(props);
    this._onPlayAsChanged =this._onPlayAsChanged.bind(this);
    this._onSubFilterChanged =this._onSubFilterChanged.bind(this);
    this._onSubFilterSearch =this._onSubFilterSearch.bind(this);

    this.options = ["As arrives", "By Genere", "By Artist"];
    this.state = {playAsSelected: this.options[0], subFilterSearchText:""};
    }
  

  _onPlayAsChanged (e){
      this.setState({playAsSelected:e.option, subFilterSelected:this.state.subFilterSelected, subFilterSearchText:this.state.subFilterSearchText});
  }

  _onSubFilterChanged (e){
      this.setState({playAsSelected:this.state.playAsSelected, subFilterSelected:e.option, subFilterSearchText:this.state.subFilterSearchText});
  }

  _onSubFilterSearch (e){
    this.setState({playAsSelected:this.state.playAsSelected, subFilterSelected:this.state.subFilterSelected, subFilterSearchText:e.target.value});
  }

  renderSubFilter(){
    let filter = [];
    switch (this.state.playAsSelected){
      case this.options[0]: return null;
      case this.options[1]: filter=["Rock", "Pop", "Cumbia"]; break;
      case this.options[2]: filter=["Paulina Rubio", "Thalia", "AU-D", "Maluma", "Vico-C", "La Oreja de Vangoc", "April Lavige", "Adele", "Maroon 5", "Bruno Mars", "Mecano", "Ov7", "Efecto Mandarina", "Sin Banderas"]; break;
    }

    if(this.state.subFilterSearchText != "")
    {
      filter = filter.filter(s => s.search(new RegExp(this.state.subFilterSearchText, "i")) != -1);
    }
    return <Select id="select2" multiple={true} value={this.state.subFilterSelected} options={filter}  onSearch={this._onSubFilterSearch} onChange= {this._onSubFilterChanged}/>
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