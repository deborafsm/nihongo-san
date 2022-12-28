import AppRoutes from "./routes";
import GlobalStyle from "./style/globalStyle";
import NewAside from "./layout/Aside/NewAside";
function App() {
  return (
    <>
      {/* <NewAside /> */}
      <GlobalStyle />
        <AppRoutes />
    </>
  );
}

export default App;
