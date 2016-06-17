import common from './common';

export default () => `
.level-item {
  ${common()}
}

.level-item .title,
.level-item .subtitle {
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
  .level-item:not(:last-child) {
    margin-bottom: 10px;
  }
}

.level-left .level-item:not(:last-child),
.level-right .level-item:not(:last-child) {
  margin-right: 10px;
}

.level-left .level-item.is-flexible,
.level-right .level-item.is-flexible {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

@media screen and (max-width: 768px) {
  .level-left + .level-right {
    margin-top: 20px;
  }
}

@media screen and (min-width: 769px) {
  .level-left {
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

@media screen and (min-width: 769px) {
  .level-right {
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end;
  }
}

.level {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
              -ms-grid-row-align: center;
          align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.level code {
  border-radius: 3px;
}

.level img {
  display: inline-block;
  vertical-align: top;
}

.level.is-mobile {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.level.is-mobile > .level-item:not(:last-child) {
  margin-bottom: 0;
}

.level.is-mobile > .level-item:not(.is-narrow) {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

@media screen and (min-width: 769px) {
  .level {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .level > .level-item:not(.is-narrow) {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
  }
}

.has-text-centered {
  text-align: center;
}

.has-text-left {
  text-align: left;
}

.has-text-right {
  text-align: right;
}

`;
