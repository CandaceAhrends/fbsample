import { hot } from "react-hot-loader";
import React from "react";
import NewsFeed from "./component/facebook/NewsFeed";
import { user } from "./api/fetchUser";
import { AppCtx } from "./appContext";
import { from } from "rxjs";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1eaedb",
    },
    secondary: {
      main: "#333",
    },
  },
});

const App = () => {
  const [userInfo, setUserInfo] = React.useState({});

  React.useEffect(() => {
    const user$ = from(user).subscribe((response) => {
      setUserInfo(response);
    });
    return () => user$ && user$.unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppCtx.Provider value={userInfo}>
        <NewsFeed></NewsFeed>
      </AppCtx.Provider>
    </ThemeProvider>
  );
};
export default hot(module)(App);
