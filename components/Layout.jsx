import { HashRouter } from "react-router";
import MainContent from "./MainContent";

export default function Layout() {
  return (
    <div>
      <HashRouter>
        <div>
          {/* where the header will go */}
          <MainContent />
          {/* where the footer will go */}
        </div>
      </HashRouter>
    </div>
  );
}
