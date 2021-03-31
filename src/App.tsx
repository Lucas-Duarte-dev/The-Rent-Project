import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import Routes from "./routes";

import { GlobalStyles } from "./styles/global";
import theme from "./theme/theme";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
          </ThemeProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
