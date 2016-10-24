import React, { Component, PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import ListItem from 'grommet/components/ListItem';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Tip from 'grommet/components/Tip';

import Status from 'grommet/components/icons/Status';
import CloseIcon from 'grommet/components/icons/base/Close';
import ReloadIcon from 'grommet/components/icons/base/Refresh';
import VideoIcon from 'grommet/components/icons/base/Desktop';
import UnknowIcon from 'grommet/components/icons/base/Help';
import SVGIcon from 'grommet/components/SVGIcon'

import MusicIcon from './icons/Music'
import WifiIcon from './icons/Wifi';
import BluetoothIcon from './icons/Bluetooth'
import {fileTypeMap} from '../models/constants.js'

export default class FileListItem extends Component {

    constructor(props) {
        super(props);

        this._onTogleTip = this._onTogleTip.bind(this);
        this._onRequestForAdd = this._onRequestForAdd.bind(this);
        this._onCancel = this._onCancel.bind(this);

        this.state = {tipVisible:false, delete:false};
        this.file = props.file;
        this.extension = this.file.name.substr(this.file.name.lastIndexOf(".") + 1 ).toLowerCase();
        
        this.colorStatus = this.file.status == "failed" ? "critical" : "plain"; //: "brand";
        this.colorStatusForMetter = this.file.status == "failed" ? "critical" : "brand";
    }

    _onCancel () {
        console.log("Cancel pressed ");
        //this.setState({tipVisible: this.state.tipVisible, delete:true});
        this.props.onCancel(this.file);
    }

    _onTogleTip() {
        this.setState({tipVisible:!this.state.tipVisible});
        console.log(this.state.tipVisible);
    }

   _onRequestForAdd () {
      console.log('request add single file');
      document.getElementById(`inputfile_${this.file.id}`).click(); 
   }

    renderErrorTip(targetId) {
      if (this.file.status == "failed" && this.state.tipVisible)
         return  <Tip target={targetId} onClose={this._onTogleTip} colorIndex='critical'>Failed to load, please try again.</Tip>;
      return null;
    }

    renderMainIcon(id){
        var icon = null;
        switch(fileTypeMap[this.extension]){
           case "audio": icon =  <span className="grommetux-button__icon"> <MusicIcon colorIndex={this.colorStatus}/></span>; break;
           case "video": icon = <VideoIcon size='medium' colorIndex={this.colorStatus} />; break;
           default :  icon = <UnknowIcon size='medium' colorIndex={this.colorStatus} />;
        }
        
        return <Button plain={true} onClick={this._onTogleTip} id={id} >{this.renderErrorTip(id)}{icon}</Button>;
    }

    renderTypeIcon(){
        switch(this.file.sourceType){
            case "bluetooth": return <BluetoothIcon colorIndex={this.colorStatus} />
            case "wifi": return <WifiIcon colorIndex={this.colorStatus} />
            default: return null;
        }
    }

    renderProgress(){
        if (this.file.status == "inProgress" || this.file.status == "failed")
            return <Box direction="row">
                        {this.renderTypeIcon()}
                        <Meter value={this.file.progress} colorIndex={this.colorStatusForMetter} />
                        <Box pad={{horizontal: 'medium'}}><strong>{this.file.progress + "%"}</strong></Box>
                    </Box> 
        return null;
    }

    renderReloadButton(){
       //TODO lets enable this for next version.
        if (this.file.status == "failed" && false)
            return  <Button plain={true} onClick={this._onRequestForAdd} icon={<ReloadIcon size='small'/>} a11yTitle={`Try to reload ${this.file.name} file`}>
                       <input id={`inputfile_${this.file.id}`} accept={fileTypeMap[this.extension] + '/*'} type='file' style={{display:'none'}}/>
                    </Button>
        return null;
    }

    render() {
    return (
    <ListItem key={`file_${this.file.id}`} justify='between' separator='horizontal' responsive={false} size={{height: 'auto', width: {min: 'medium'}}}>
        {this.renderMainIcon(`icon_${this.file.id}`)}
        <Box direction="column" flex={true}>
            <Box flex={true} justify="center">
                {this.file.name}
            </Box>
            {this.renderProgress()}
        </Box>
        {this.renderReloadButton()}
        <Button plain={true} onClick={this._onCancel} icon={<CloseIcon size='small'/>} a11yTitle={`Cancel ${this.file.name} file`} />
    </ListItem>
    );
  }
}

FileListItem.propTypes = {
  onCancel: PropTypes.func
};