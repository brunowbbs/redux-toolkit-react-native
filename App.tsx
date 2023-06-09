import { Provider } from "react-redux";
import HomePage from "./src/ui/pages/home";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
