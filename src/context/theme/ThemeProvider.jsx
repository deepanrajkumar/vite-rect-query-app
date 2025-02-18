import useTheme from "../../hooks/useTheme";
import ThemeContext from "./ThemeContext";
import PropTypes from "prop-types";

const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
