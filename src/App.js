import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
function App() {
  return(
    <Provider store={appStore}> {/* Pass the store as a prop */}


   <Body />
   </Provider>
  )
}

export default App;

