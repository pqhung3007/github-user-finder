import { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [input, setInput] = useState("");
  const { setAlert } = useContext(AlertContext);
  const { users, searchUsers, clearResults } = useContext(GithubContext);

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(input);
    }
    setInput("");
  };

  return (
    <div className="max-w-xl mx-auto px-6 flex flex-col items-center">
      <form
        id="form"
        className="relative flex flex-col w-full p-10 space-y-4 md:flex-row md:space-y-0 md:space-x-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="flex-1 p-2 border-2 rounded-lg placeholder-blue-500 outline-none focus:border-blue-500"
          placeholder="Type to search"
          id="input"
          value={input}
          onChange={handleChange}
        />
        <button className="px-8 py-2 text-blue-500 bg-white border-2 border-blue-500 hover:bg-blue-500 hover:text-white duration-200 rounded-lg focus:outline-none md:py-2">
          Search
        </button>
      </form>

      {users.length > 0 && (
        <button
          className="px-8 py-2 text-red-500 bg-white border-2 border-red-500 hover:bg-red-500 hover:text-white duration-200 rounded-lg focus:outline-none md:py-2"
          onClick={clearResults}
        >
          Clear result
        </button>
      )}
    </div>
  );
}

export default UserSearch;
