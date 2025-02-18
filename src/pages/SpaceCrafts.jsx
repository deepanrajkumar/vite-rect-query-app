import ThemeContext from "../context/theme/ThemeContext";
import useSpaceCrafts from "../hooks/useSpaceCrafts";
import { useContext } from "react";

const SpaceCrafts = () => {
  const { data: spacecrafts, isLoading, error } = useSpaceCrafts();
  const { toggleTheme, theme } = useContext(ThemeContext);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div
      className={`h-screen flex justify-center items-center ${theme === "light" ? "bg-gray-100 text-black" : "dark:bg-gray-900 dark:text-white"}`}
    >
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-6xl my-4 self-center">Spacecrafts</h1>
        <button
          className={`my-4 p-2 rounded transition ${theme === "light" ? "bg-gray-200 text-black" : "dark:bg-gray-700 dark:text-white"}`}
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
        <ul className="my-4 rounded-sm h-96 p-4 overflow-scroll bg-gray-800 text-zinc-400">
          {spacecrafts.map((spacecraft) => (
            <li key={spacecraft.id}>{spacecraft.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpaceCrafts;
