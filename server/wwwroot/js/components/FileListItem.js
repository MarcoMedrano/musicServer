import React, { Component } from 'react';

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
        this.file = props.file;
        
        this.colorStatus = this.getColorStatus();
        this.iconUi = this.getIcon();
        this.statusUi =this.getStatus(); 
        this.progressUi = this.getProgress();
    }

    getIcon(){
        let extension = this.file.name.substr(this.file.name.lastIndexOf(".") + 1 ).toLowerCase();
        console.log(`extension ${extension}`);
        switch(extension){
            case "mp3":
            case "ogg": 
                return <MusicIcon size='medium' colorIndex={this.colorStatus} />;
            case "avi":
            case "mp4": 
                return <VideoIcon size='medium' type='status' colorIndex={this.colorStatus} />;
            default : 
                return <UnknowIcon size='medium' colorIndex={this.colorStatus} />;
        }
    }
    
    getColorStatus(){
        return this.file.status == "failed" ? "critical" : "plain"; //: "brand";
    }

    getStatus(){
        var status = null;
        if (this.file.status == "failed")
            status = <Status value={"critical"} size='medium' a11yTitle="Error loading file. Please try again."/>
        return status;
    }

    getProgress(){
        let color = null;
        if (this.file.status == "failed")
            color = 'critical';

        let progress = null;
        if (this.file.status == "inProgress" || this.file.status == "failed")
            progress = <Box direction="row">
                            <Meter value={this.file.progress} colorIndex={this.colorStatus} />
                            <Box pad={{horizontal: 'medium'}}><strong>{"  " + this.file.progress + "%"}</strong></Box>
                       </Box> 
        return progress;
    }

    render() {
    return (
    <ListItem key={`file_${this.file.id}`} justify='between' separator='horizontal' responsive={false} >
        {this.iconUi}
        <Box margin="small">
            {this.statusUi}
        </Box>
        <Box direction="column" flex={true}>
            <Box flex={true} justify="center">
                {this.file.name}
            </Box>
            {this.progressUi}
        </Box>
        <Button plain={true} onClick={this.props.onDelete(this.file)} icon={<CloseIcon size='small'/>} a11yTitle={`Cancel ${this.file.name} file`} />
    </ListItem>
    );
  }
}