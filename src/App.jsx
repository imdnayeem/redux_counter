import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./components/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
