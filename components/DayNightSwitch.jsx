// import "@styles/dayNightSwitch";
import {useState, useEffect} from "react";

// Hacky way to define CSS variables for light and dark themes, we can look at trying to do this differently...
const lightTheme = {
    '--color-text': '#994cc3',
    '--color-bg': '#f0f0f0',
    '--color-primary': '#EF5350',
    '--color-secondary': '#0c969b',
    '--color-header-bg': 'rgba(255, 255, 255, 0.9)',
    '--color-neon-fill': '#ef5350',
    '--color-neon-glow': 'rgba(255, 255, 255, 0)',
};
const darkTheme = {
    '--color-text': '#82AAFF',
    '--color-bg': '#011627',
    '--color-primary': '#c792ea',
    '--color-secondary': '#7fdbca',
    '--color-header-bg': 'rgba(1, 10, 18, 0.9)',
    '--color-neon-fill': '#FFFEFC',
    '--color-neon-glow': '#d99fff',
};

export default function DayNightSwitch({label}) {
    const [currentMode, setCurrentMode] = useState('light');
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('mode') === 'dark') {
            setCurrentMode('dark');
            setIsChecked(true);
        }
        window.addEventListener('storage', handleThemeChange);
    }, []);

    useEffect(() => {
        const theme = currentMode === 'light' ? lightTheme : darkTheme;
        Object.keys(theme).forEach(key => {
            const value = theme[key];
            document.documentElement.style.setProperty(key, value);
        });
    }, [currentMode]);

    const toggleTheme = () => {
        const newMode = currentMode === 'light' ? 'dark' : 'light';
        setIsChecked(!isChecked);
        setCurrentMode(newMode);
        localStorage.setItem('mode', newMode);
    };

    const handleThemeChange = (e) => {
        if (e.storageArea != localStorage) {
            return;
        }
        if (e.key === 'mode') {
            window.location.reload();
        }
    }

    return (
        <div className="flex items-center space-x-4">
            {label && <span className="text-sm font-medium">{label}</span>}
            <button
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isChecked ? "bg-green-500" : "bg-gray-300"
                }`}
            >
        <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isChecked ? "translate-x-6" : "translate-x-1"
            }`}
        />
            </button>
        </div>
    );
};
