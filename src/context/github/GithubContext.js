import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_TOKEN

// children that are surrounded by <provider>
export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        isLoading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })
        // https://api.github.com/search/users?q=pqhung3007
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });

        // items array contains user's info
        const { items } = await response.json();
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    };

    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    const clearResults = () => dispatch({ type: 'CLEAR_RESULTS' })

    return <GithubContext.Provider
        value={{
            users: state.users,
            isLoading: state.isLoading,
            searchUsers,
            clearResults,
        }}
    >
        {children}
    </GithubContext.Provider>
}

export default GithubContext;