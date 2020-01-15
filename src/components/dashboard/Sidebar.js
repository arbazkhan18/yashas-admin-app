import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import M from "../../../node_modules/materialize-css/dist/js/materialize.min.js"
// import "../../../node_modules/materialize-css/dist/css/materialize.min.css"
//import M from "../../css/materialize-css/dist/js/materialize.min.js"

class Sidebar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
        instance.open();
    }

    render() {
        return (
            <div>
                <ul id="slide-out" className="sidenav">
                    <li />
                    <li>
                        <a href="#!">
                            <i className="material-icons">cloud</i>First Link
                            With Icon
                        </a>
                    </li>
                    <li>
                        <a href="#!">Second Link</a>
                    </li>
                    <li>
                        <div className="divider" />
                    </li>
                    <li>
                        <a className="subheader">Subheader</a>
                    </li>
                    <li>
                        <a className="waves-effect" href="#!">
                            Third Link With Waves
                        </a>
                    </li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
            </div>
        );
    }
}

export default Sidebar;
