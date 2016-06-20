import common from './common';

export default () => `
.menu ul, .menu li, .menu a, .menu p {
  ${common()}
}

.menu ul {
  list-style: none;
}

.menu-list a {
  color: #1fc8db;
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: none 86ms ease-out;
  transition: none 86ms ease-out;
  border-radius: 2px;
  color: #69707a;
  display: block;
  padding: 5px 10px;
}

.menu-list a:hover {
  background: #f5f7fa;
  color: #1fc8db;
}

.menu-list a.is-active {
  background: #1fc8db;
  color: white;
}

.menu-list li ul {
  border-left: 1px solid #d3d6db;
  margin: 10px;
  padding-left: 10px;
}

.menu-label {
  color: #aeb1b5;
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.menu-label:not(:first-child) {
  margin-top: 20px;
}
`;
