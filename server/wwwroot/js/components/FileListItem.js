import React, { Component, PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import ListItem from 'grommet/components/ListItem';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Tip from 'grommet/components/Tip';

import Status from 'grommet/components/icons/Status';
import CloseIcon from 'grommet/components/icons/base/Close';
import MusicIcon from 'grommet/components/icons/base/Compare';
import VideoIcon from 'grommet/components/icons/base/Desktop';
import UnknowIcon from 'grommet/components/icons/base/Help';

export default class FileListItem extends Component {

    constructor(props) {
        super(props);

        this._onTogleTip = this._onTogleTip.bind(this);
        this._onCancel = this._onCancel.bind(this);
        this.state = {tipVisible:false, delete:false};
        this.file = props.file;
        
        this.colorStatus = this.file.status == "failed" ? "critical" : "plain"; //: "brand";
        this.colorStatusForMetter = this.file.status == "failed" ? "critical" : "brand";
        this.errorTip = this.getErrorTip(`icon_${this.file.id}`);
        this.iconUi = this.getIcon(`icon_${this.file.id}`);
        this.progressUi = this.getProgress();
        
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

    getErrorTip(targetId) {
        if (this.file.status == "failed" && this.state.tipVisible)
            return  <Tip target={targetId} onClose={this._onTogleTip} colorIndex='critical'>Failed to load, please try again.</Tip>;
        else
            return null;
    }

    getIcon(id){
        let extension = this.file.name.substr(this.file.name.lastIndexOf(".") + 1 ).toLowerCase();
        var icon = null;
        switch(extension){
            case "mp3":
            case "ogg": 
                icon = <MusicIcon size='medium' colorIndex={this.colorStatus} />
                break;
            case "avi":
            case "mp4": 
                icon = <VideoIcon size='medium' type='status' colorIndex={this.colorStatus} id={`icon_${this.file.id}`}/>;
                break;
            default : 
                icon = <UnknowIcon size='medium' colorIndex={this.colorStatus} id={`icon_${this.file.id}`}/>;
        }
        //TODO make margin only at right margin={{right:'small'}}
        return <Button plain={true} onClick={this._onTogleTip} id={id} >{this.getErrorTip(`icon_${this.file.id}`)}{icon}</Button>;
    }

    getProgress(){
        let progress = null;
        if (this.file.status == "inProgress" || this.file.status == "failed")
            progress = <Box direction="row">
                            <Meter value={this.file.progress} colorIndex={this.colorStatusForMetter} />
                            <Box pad={{horizontal: 'medium'}}><strong>{this.file.progress + "%"}</strong></Box>
                       </Box> 
        return progress;
    }

    render() {
    return (
    <ListItem key={`file_${this.file.id}`} justify='between' separator='horizontal' responsive={false} size={{height: 'auto', width: {min: 'medium'}}}>
        {this.getIcon(`icon_${this.file.id}`)}
        <Box direction="column" flex={true}>
            <Box flex={true} justify="center">
                {this.file.name}
            </Box>
            {this.progressUi}
        </Box>
        <Button plain={true} onClick={this._onCancel} icon={<CloseIcon size='small'/>} a11yTitle={`Cancel ${this.file.name} file`} />
    </ListItem>
    );
  }
}

FileListItem.propTypes = {
  onCancel: PropTypes.func/*,
  file: PropTypes.string*/
};