import React, { useState, useEffect, useContext } from "react";

const API = "https://api.themoviedb.org/3/trending/all/day?api_key=700a119d738aa19bfa6867998fafed10";

const initialState = {
    trendingMovies: [],
}

// creation of context
const AppContext = React.createContext();

// provider
const AppProvider = ({ children }) => {

    // useState
    const [state, setState] = useState(initialState)

    const fetchMovieData = async (url) => {

        try {
            const response = await fetch(url);
            const data = await response.json();
            setState({ trendingMovies: data.results })
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovieData(API);
    }, []);

    return (<AppContext.Provider value={state}>{children}</AppContext.Provider>);
}


// custom hook creation
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }