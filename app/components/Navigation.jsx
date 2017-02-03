var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () =>{
    return (
       <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className ="menu-text">React Timer App</li>
              <li>
                <indexLink to="/" activeClassName="active-Link">Timer</indexLink>
              </li>
              <li>
                <Link to="/" activeClassName="active-Link">Countdown</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created by <a href="http://www.mead.io" target="_blank">Fahar Jatoi</a>
              </li>
            </ul>
          </div>
        </div>
    );
}


module.exports = Navigation;