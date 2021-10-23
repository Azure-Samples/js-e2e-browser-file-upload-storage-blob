import React from "react";
import { Link, withRouter } from "react-router-dom";



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
      <input type="text" id="mySearch" onkeyup="search()" placeholder="Search.." title="Type in a category">
        </input>
      <ul id="myMenu">
          <a href="/">Home</a>
          <a href="/practice">Practice</a>
          <a href="/review">Review</a>
          <a href="/instructors">Instructors</a>
      </ul>
      <div className="dropdown">
        <button className="dropbtn">Account
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="/student">Student</a>
          <a href="/instructor">Practitioner</a>
        </div>
    </div>
    </div>
  );
}

export default withRouter(Navigation);
