import DayNightSwitch from "@components/DayNightSwitch.jsx";
import "./Layout.css"

export default function Layout() {
  return (
    <div>
      {/* where the header will go */}
        <DayNightSwitch label={"Day/Night Mode"} />
      {/* where the main content will go */}
      {/* where the footer will go */}
    </div>
  );
};
