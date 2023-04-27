function dateFormater(date) {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var day = date.getDate();
    // get month from 0 to 11
    var month = date.getMonth();
    // conver month digit to month name
    month = months[month];
    var year = date.getFullYear();

    // show date in two digits
    if (day < 10) {
        day = "0" + day;
    }
    // now we have day, month and year
    // arrange them in the format we want
    return month + " " + day + ", " + year;
}

// decide movie poster
const generateMovieImage = (movie, addCard) => {
    if (movie?.poster_path && addCard)
        return (
            "https://www.themoviedb.org/t/p/w220_and_h330_face" + movie.poster_path
        );
    else if (movie?.poster_path)
        return "https://image.tmdb.org/t/p/original" + movie.poster_path;
    else
        return "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
};

// put url of selected movie or tv
const getURL = (movie) => {
    const type = movie.first_air_date ? "tv" : "movie";
    return `/${type}/${movie.id}`;
};

function formatDate(date, info) {

    if (info) {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    } else {
        var months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        var day = date.getDate();
        // get month from 0 to 11
        var month = date.getMonth();
        // conver month digit to month name
        month = months[month];
        var year = date.getFullYear();

        // show date in two digits
        if (day < 10) {
            day = "0" + day;
        }
        // now we have day, month and year
        // arrange them in the format we want
        return month + " " + day + ", " + year;
    }
}

// convert miniute into hour

const toHours = (minutes) => {
    const hour = Math.floor(minutes / 60);

    if (hour === 0) {
        return minutes + "m";
    }

    return hour + "h";
}

// below function generate genre name based on movie or tv object
const generateGenreName = (genres) => {
    let genreName = "";

    genres.filter((genre) => {
        genreName = genreName + ", " + genre.name;
    });

    return genreName.replace(",", "");
};

// find origin country from response

const findOriginCountry = (data) => {
    if (data?.production_countries)
        return data.production_countries[0]?.iso_3166_1;
    else if (data?.origin_country) return data.origin_country[0];
    else if (data?.production_companies)
        return data?.production_companies[0]?.origin_country;
    else return "false";
};

// getProviderChannelLogo 

const getStreamingLogo = (providers) => {

    if (providers?.flatrate) return providers.flatrate[0].logo_path;
    else if (providers?.buy) return providers.buy[0].logo_path;
    else if (providers?.ads) return providers.ads[0].logo_path;
    else if (providers?.free) return providers.free[0].logo_path;
    else if (providers?.rent) return providers.rent[0].logo_path;
    else return "";
}

// getStreamingChannelName

const getStreamingChannelName = (providers) => {

    if (providers?.flatrate) return providers.flatrate[0].provider_name;
    else if (providers?.buy) return providers.buy[0].provider_name;
    else if (providers?.ads) return providers.ads[0].provider_name;
    else if (providers?.free) return providers.free[0].provider_name;
    else if (providers?.rent) return providers.rent[0].provider_name;
    else return "";
}

// getAvatarPath 
const getAvatarPath = (path) => {
    if (path === null) {
        return;
    }
    const pathIndex = path.lastIndexOf("/");
    return path.substring(pathIndex)
}

// select poster path returns true if available
const selectPosterPath = (path) => {
    if (path === null) return false;
    else return true;
};

export { selectPosterPath, dateFormater, generateMovieImage, getURL, formatDate, toHours, generateGenreName, findOriginCountry, getStreamingLogo, getStreamingChannelName, getAvatarPath } 