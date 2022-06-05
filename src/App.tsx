// Layouts
import Layout from "./Layout/Main";

// Context
import ContextProvider from "./Context/ContextProvider";

// Components
import Columns from "./Component/Column/ColumnsWrapper";

// Styles
import "./Style/reset.css";

function App() {
  return (
    <ContextProvider>
      <Layout>
        <Columns />
      </Layout>
    </ContextProvider>
  );
}

export default App;
