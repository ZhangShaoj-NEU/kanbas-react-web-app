import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Kanbas/store";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* We can make any component the default screen by forcing navigation with the Navigate component. */}
          <Route path='/' element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Provider store={store} ><Kanbas /></Provider>} />
        </Routes>
      </div>
    </HashRouter>

  )
}

export default App