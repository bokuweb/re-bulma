export default {
  column : `
    @media screen and (max-width: 768px) {
      .__react-bulma__column + .__react-bulma__column {
        margin-top: 20px;
      }
    }
    @media screen and (min-width: 769px) {
      & {
        flex: 1;
      }
      .__react-bulma__column + .__react-bulma__column {
        margin-left: 20px;
      }
    }`,
  isDouble: `
    @media screen and (min-width: 769px) {
      & {
        flex: 2;
      }
    }`,
  isTriple: `
    @media screen and (min-width: 769px) {
      & {
        flex: 3;
      }
    }`,
  isQuadruple: `
    @media screen and (min-width: 769px) {
      & {
        flex: 4;
      }
    }`,
  isHalf: `
    @media screen and (min-width: 769px) {
      & {
        flex: none;
        width: 50%;
      }
    }`
};

/*
          .__react-bulma__column.is-third {
            flex: none;
            width: 33.3333%;
          }
          .__react-bulma__column.is-quarter {
            flex: none;
            width: 25%;
          }
          .__react-bulma__column.is-1 {
            flex: none;
            width: 8.33333%;
          }
          .__react-bulma__column.is-2 {
            flex: none;
            width: 16.66667%;
          }
          .__react-bulma__column.is-3 {
            flex: none;
            width: 25%;
          }
          .__react-bulma__column.is-4 {
            flex: none;
            width: 33.33333%;
          }
          .__react-bulma__column.is-5 {
            flex: none;
            width: 41.66667%;
          }
          .__react-bulma__column.is-6 {
            flex: none;
            width: 50%;
          }
          .__react-bulma__column.is-7 {
            flex: none;
            width: 58.33333%;
          }
          .__react-bulma__column.is-8 {
            flex: none;
            width: 66.66667%;
          }
          .__react-bulma__column.is-9 {
            flex: none;
            width: 75%;
          }
          .__react-bulma__column.is-10 {
            flex: none;
            width: 83.33333%;
          }
          .__react-bulma__column.is-11 {
            flex: none;
            width: 91.66667%;
          }
        }`}>
        {this.props.children}
      </InlineCss>
    );
  }
};

*/
