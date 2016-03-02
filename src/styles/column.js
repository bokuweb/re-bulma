const csjs = require('csjs');

module.exports = csjs`
  @media screen and (max-width: 768px) {
    .column  + .column  {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 769px) {
    .column {
      flex: 1;
    }
    .column  + .column  {
      margin-left: 20px;
    }

    .isDouble extends .column{
      flex: 2;
    }

    .isTriple extends .column {
      flex: 3;
    }

    .isQuadruple extends .column {
      flex: 4;
    }

    .isHalf extends .column {
      flex: none;
      width: 50%;
    }

    .isThird extends .column {
      flex: none;
      width: 33.3333%;
    }

    .isQuarter extends .column {
      flex: none;
      width: 25%;
    }

    .is1 extends .column {
      flex: none;
      width: 8.33333%;
    }

    .is2 extends .column {
      flex: none;
      width: 16.66667%;
    }

    .is3 extends .column {
      flex: none;
      width: 25%;
    }

    .is4 extends .column {
      flex: none;
      width: 33.33333%;
    }

    .is5 extends .column {
      flex: none;
      width: 41.66667%;
    }

    .is6 extends .column {
      flex: none;
      width: 50%;
    }

    .is7 extends .column {
      flex: none;
      width: 58.33333%;
    }

    .is8 extends .column {
      flex: none;
      width: 66.66667%;
    }

    .is9 extends .column {
      flex: none;
      width: 75%;
    }

    .is10 extends .column {
      flex: none;
      width: 83.33333%;
    }

    .is11 extends .column {
      flex: none;
      width: 91.66667%;
    }
  }
`;

