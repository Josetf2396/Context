import React from 'react';
const ThemeContext = React.createContext(
  /* optional default value */
);
const App = props => (
  <ThemeContext.Provider value={{ primaryColor: green }}>
    {props.children}
  </ThemeContext.Provider>
);

const ThemedButton = () => (
  <ThemeContext.Consumer>
    {value => (
      <Button primaryColor={{ value.primaryColor }}>
        I'm button using context!
      </Button>
    )}
  </ThemeContext.Consumer>
);