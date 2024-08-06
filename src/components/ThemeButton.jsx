import useTheme from "../Context/Theme";

export default function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer ml-auto mr-10">
      <input
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
        type="checkbox"
        value=""
        className="sr-only peer"
      />
      <div className="w-10 h-6 bg-purple-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-700 dark:peer-focus:ring-purple-950 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-950"></div>

      <span className="ml-3 text-sm font-medium text-white">Change Theme</span>
    </label>
  );
}
