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
    const type = movie.media_type ? "movie" : "tv";
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

export { dateFormater, generateMovieImage, getURL, formatDate } 