import React, { Component} from "react";
import "../../src/App.css";

class Constellation extends Component {
    constructor(props) {
      super(props);
      CreateTable(10, 10);
    }
  
    render() {
      return (
        <div>
        </div>
      );
    }
}

function CreateTable(X_Size, Y_Size) {
  let HTML;

  HTML = "<table>";

  for (let Y_index = 0; Y_index < Y_Size; Y_index++) {
    HTML += "<tr>";
    for (let X_index = 0; X_index < X_Size; X_index++) {
      HTML += "<td></td>";
    }
    HTML += "</tr>";
  }

  HTML += "</table>";

  // document.getElementById("Root").append("<div></div>");
}

export default Constellation;