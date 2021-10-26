import React from "react";
import { Link, withRouter } from "react-router-dom";
import {Dropdown} from "react-bootstrap";



function Navigation(props) {
  function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  return (
    <div className="sidenav">
      <input type="text" id="mySearch" onkeyup="search()" placeholder="Search" title="Type in a category">
        </input>
      <ul id="myMenu">
          <a href="/">Home</a>
          <a href="/find">Find A Session</a>
          <a href="/practice">Practice</a>
          <a href="/review">Review My Sessions</a>
          <a href="/instructors">Meet Instructors</a>
          <a href="/about">About The Project</a>
      </ul>
      <Dropdown>
        <Dropdown.Toggle variant="Warning" id="dropdown-basic"> Account
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/student">Student</Dropdown.Item>
          <Dropdown.Item href="#/instructor">Instructor</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>
    </div>
  );
}

export default withRouter(Navigation);
