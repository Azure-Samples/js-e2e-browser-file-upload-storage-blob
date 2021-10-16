import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./App.css";

export default class Navbar extends Component {
  static propTypes = {
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    }),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
      })
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
  }

  render() {
    const NavLinks = () =>
      this.props.links.map((link, index) => (
        <a key={index} href={link.to}>
          {link.name}
        </a>
      ));

    return (
      <Transition>
        <StyledNavbar className={this.state.show ? "active" : "hidden"}>
          <a className="brand" href={this.props.brand.to}>
            {this.props.brand.name}
          </a>
          <nav>
            <NavLinks />
          </nav>
        </StyledNavbar>
      </Transition>
    );
  }
}
const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;
const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: cornflowerblue;
  z-index: 1000;
  a {
    margin-right: 2rem;
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
  }
  .brand {
    font-style: italic;
    margin-left: 1rem;
    font-weight: bolder;
    color: white;
    font-size: 3rem;
  }
`;
// const NavbarStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   margin: "0 auto",
//   padding: "0.5rem 0",
//   zIndex: 1000,
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-between",
//   alignContent: "center"
// };
