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
import WifiIcon from 'grommet/components/icons/base/Rss';
import SVGIcon from 'grommet/components/SVGIcon'

export default class FileListItem extends Component {

    constructor(props) {
        super(props);

        this._onTogleTip = this._onTogleTip.bind(this);
        this._onCancel = this._onCancel.bind(this);
        this.sourceTypeIcon = this.sourceTypeIcon.bind(this);
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
                icon =  <span className="grommetux-button__icon">
                <SVGIcon size='medium' viewBox="0 0 48 48" colorIndex={this.colorStatus} >
                <g stroke="#865CD6" strokeWidth="4" fill="none" >
                    <path d="M 45.628238,1.922137 C 45.43535,1.7667728 45.180839,1.6960783 44.92365,1.7240278 L 17.240188,5.0211959 c -0.445614,0.053439 -0.778709,0.4019739 -0.778709,0.815456 l 0,4.9461621 0,3.462398 0,21.401593 c -1.551166,-1.635845 -3.970345,-2.692154 -6.6967181,-2.692154 -4.6856498,0 -8.4836422,3.108099 -8.4836422,6.941233 0,3.833132 3.7979924,6.941234 8.4836422,6.941234 4.6856491,0 8.4836431,-3.108102 8.4836431,-6.941234 0,-0.272913 -0.02413,-0.540896 -0.06162,-0.806411 0.0357,-0.08878 0.06162,-0.18167 0.06162,-0.281959 l 0,-23.84056 25.897431,-3.085083 0,15.543794 c -1.55206,-1.635022 -3.971239,-2.691331 -6.697611,-2.691331 -4.685649,0 -8.483643,3.1081 -8.483643,6.941234 0,3.833133 3.797994,6.941235 8.483643,6.941235 4.685647,0 8.483641,-3.108102 8.483641,-6.941235 0,-0.07563 -0.01082,-0.148787 -0.01326,-0.223592 0.0017,-0.0222 0.01326,-0.0411 0.01326,-0.06329 l 0,-20.442279 0,-3.4615744 0,-4.9453423 c 0,-0.236745 -0.110722,-0.4619807 -0.303627,-0.6173451 z" />
                </g>
               </SVGIcon>
               </span>
                
                //icon = <MusicIcon size='medium' colorIndex={this.colorStatus} />;

                break;
            case "avi":
            case "mp4": 
            case "mpg": 
                icon = <VideoIcon size='medium' type='status' colorIndex={this.colorStatus} id={`icon_${this.file.id}`}/>;
                break;
            default : 
                icon = <UnknowIcon size='medium' colorIndex={this.colorStatus} id={`icon_${this.file.id}`}/>;
        }
        //TODO make margin only at right margin={{right:'small'}}
        return <Button plain={true} onClick={this._onTogleTip} id={id} >{this.getErrorTip(`icon_${this.file.id}`)}{icon}</Button>;
    }

    sourceTypeIcon(){

        switch(this.file.sourceType){
            case "bluetooth":
            return <SVGIcon size='small' viewBox="0 -5 32 32" colorIndex={this.colorStatus}>
                    <g stroke="#865CD6" strokeWidth="1" fill="none" >
                        <path d="M14.859 16.313l-1.875-1.922v3.797zM12.984 5.813v3.797l1.875-1.922zM17.719 7.688l-4.313 4.313 4.313 4.313-5.719 5.672h-0.984v-7.594l-4.594 4.594-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 4.594 4.594v-7.594h0.984z" />
                    </g>
                   </SVGIcon>;
            case "wifi":
            return  <SVGIcon size='small' viewBox="0 0 40 40" colorIndex={this.colorStatus}>
                        <g transform="matrix(0.14678189,0,0,0.14496431,0.97005576,9.5726091)" id="g3561">
                        <g id="g3563">
                            <path d="m 9,113.199 c -4.971,0 -9,4.029 -9,9 0,4.971 4.029,9 9,9 3.972,0 7.203,3.231 7.203,7.203 0,4.971 4.029,9 9,9 4.971,0 9,-4.029 9,-9 0,-13.897 -11.306,-25.203 -25.203,-25.203 z" />
                            <path d="m 9,56.158 c -4.971,0 -9,4.029 -9,9 0,4.971 4.029,9 9,9 35.425,0 64.244,28.819 64.244,64.244 0,4.971 4.029,9 9,9 4.971,0 9,-4.029 9,-9 C 91.244,93.053 54.35,56.158 9,56.158 Z" />
                            <path d="M 9,0 C 4.029,0 0,4.03 0,9 c 0,4.97 4.029,9 9,9 66.39,0 120.402,54.012 120.402,120.401 0,4.971 4.029,9 9,9 4.971,0 9,-4.029 9,-9 C 147.402,62.087 85.315,0 9,0 Z" />
                        </g>
                        </g>
                    </SVGIcon>;
            default:
            return null;
        }
    }
    getProgress(){
        let progress = null;
        if (this.file.status == "inProgress" || this.file.status == "failed")
            progress = <Box direction="row">
                        {this.sourceTypeIcon()}
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
            {this.getProgress()}
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