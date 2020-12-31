import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";
import RoomList from "./RoomList";

class SingleRoomDisplay extends Component {
    state = {
        model: false,
        room: {}
    };

    componentDidMount() {
        this.resetState();
    }

    toggle = () => {
        this.ListeningStateChangedEvent(previous => ({
            modal: !previous.modal
        }));
    };

    singleRoom = pk => {
        axios.get(API_URL + pk).then(res => this.setState({room: res.data}));
    };
    
    render() {

        return (
            <Fragment>
                <label>Red {this.state.room.name} SRD</label>
            </Fragment>
        );
    }
}

export default SingleRoomDisplay;