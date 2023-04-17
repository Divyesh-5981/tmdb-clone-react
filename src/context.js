import React, { useState, useEffect, useContext } from "react";

const TRENDING_API = "https://api.themoviedb.org/3/trending/all/day?api_key=700a119d738aa19bfa6867998fafed10";
const POPULAR_API = "https://api.themoviedb.org/3/tv/popular?api_key=700a119d738aa19bfa6867998fafed10";

const initialState = {
    trendingMovies: [],
    popularMovies: [],
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
            // setState({ trendingMovies: data.results })
            setState(prev =>
                url.includes("trending") ? { ...prev, trendingMovies: data.results } : url.includes("popular") ? { ...prev, popularMovies: data.results } : { ...prev, popularMovies: data.results }
            )
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovieData(TRENDING_API);
        fetchMovieData(POPULAR_API);
    }, []);

    // getTrending Movies By Week
    const getTrendingMoviesByWeek = () => {
        console.log("Movies by week");
        fetchMovieData("https://api.themoviedb.org/3/trending/all/week?api_key=700a119d738aa19bfa6867998fafed10");
    }

    // getTrending Movies By Today
    const getTrendingMoviesByToday = () => {
        console.log("Movies By Today");
        fetchMovieData(TRENDING_API)
    }

    // getPopular Movies On TV
    const getPopularByOnTv = () => {
        console.log("Popular Movies on TV");
        fetchMovieData(POPULAR_API);
    }

    // getPopular Movies On TV
    const getPopularByTheater = () => {
        console.log("Popular Movies on Theator");
        fetchMovieData("https://api.themoviedb.org/3/movie/now_playing?api_key=700a119d738aa19bfa6867998fafed10")
    }

    return (<AppContext.Provider value={{ ...state, getTrendingMoviesByWeek, getTrendingMoviesByToday, getPopularByOnTv, getPopularByTheater }}> {children}</AppContext.Provider >);
}


// custom hook creation
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }