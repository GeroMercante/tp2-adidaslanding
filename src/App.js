import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <AppRoutes />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Provider>
    </>
  );
}

export default App;
