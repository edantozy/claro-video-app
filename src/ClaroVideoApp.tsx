import { UIProvider } from "./context/ui"
import { HomePage } from "./pages";

function ClaroVideoApp() {
  return (
    <UIProvider>
      <HomePage />
    </UIProvider>
  )
}

export default ClaroVideoApp;
