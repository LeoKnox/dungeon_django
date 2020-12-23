import React, { Component } from "react";
import { Table } from "reactstrap";
import NewRoomModal from "./NewRoomModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class RoomList extends Component {
    render() {
        const rooms = this.props.rooms;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Floor</th>
                        <th>Width</th>
                        <th>Length</th>
                        <th>Doors</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!rooms || rooms.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no rooms go make some</b>
                            </td>
                        </tr>
                    ) : (
                        rooms.map(room => (
                            <tr key={room.pk}>
                                <td>{room.name}</td>
                                <td>{room.description}</td>
                                <td>{room.floor}</td>
                                <td>{room.width}</td>
                                <td>{room.length}</td>
                                <td>
                                </td>
                                <td align="center">
                                    <NewRoomModal
                                        create={false}
                                        room={room}
                                        resetState={this.props.resetState}
                                    />
                                &nbsp;&nbsp;
                                <ConfirmRemovalModal
                                    pk={room.pk}
                                    resetState={this.props.resetState}
                                />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}

export default RoomList;