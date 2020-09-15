import React from 'react';
import './TMDBMoviecard.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import altImage from '../../img/TMDBmovies.jpg';
// import Hr from '../Hr';
// contrast color generator
function rgbToYIQ({ r, g, b }) {
  return ((r * 299) + (g * 587) + (b * 114)) / 1000;
}

function hexToRgb(hex) {
  if (!hex || hex === undefined || hex === '') {
    return undefined;
  }

  const result =
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : undefined;
}

function contrast(colorHex, threshold = 128) {
  if (colorHex === undefined) {
    return '#000';
  }

  const rgb = hexToRgb(colorHex);

  if (rgb === undefined) {
    return '#000';
  }

  return rgbToYIQ(rgb) >= threshold ? '#000' : '#fff';
}
//////////////////////



const TMDBMoviecard = (props) => {

  function randBGenerator() {
    const bgColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + bgColor
  }

  const randColor = randBGenerator();

  // const imageBGUrl=`url('http://image.tmdb.org/t/p/w400${props.movieBGPath}')`;
  // console.log('BG',imageBGUrl)
  const movieName = `${props.movieTitle}`.split(' ').join('-');
  const movieLink = `https://www.themoviedb.org/movie/${props.MovieId}-${movieName}`
  // console.log(movieLink)
  return (
    

      <div className="card hovereffect" style={{ backgroundColor: randColor }}>
        {props.moviePosterPath ?
          <a href={movieLink} target='_blank' rel="noopener noreferrer"><img class="card-img-top"

            src={`http://image.tmdb.org/t/p/w300${props.moviePosterPath}`}

            alt={props.movieTitle} /></a>
          :
          <img class="card-img-top"

            src={altImage}

            alt="" />}

        <div className="card-body" style={{ color: contrast(randColor) }}>
          {/* <p class="card-title" >{props.movieOverview}</p> */}
          
          {/* <img className='zone' src={`http://image.tmdb.org/t/p/w300${props.moviePosterPath}`} alt="movieImage" /> */}
          {/* <a href={movieLink} target='_blank' rel="noopener noreferrer" style={{ color: contrast(randColor) }}>More information...</a> */}
          {/* <h2 class="card-title" >{props.movieTitle}</h2> */}
          {/* <div className='movie-title'> */}
          {/* <h2>{props.movieTitle}</h2> */}
          <ProgressBar valueEnd={props.voteAverage * 10} />
          {/* <ul className='movie-score-box'>
            <li className='chart' >
              <ProgressBar valueEnd={props.voteAverage * 10} /> */}
              {/* <div style={{ fontWeight: 'normal' }}>  User <br /> Score</div> */}

            {/* </li> */}
            {/* <li style={{ fontWeight: 'normal' }}>Popularity: {props.popularity}</li> */}

            {/* <li></li> */}
          {/* </ul> */}
          <a href={movieLink} class="card-link card-text-responsive-movie" target='_blank' rel="noopener noreferrer" style={{ color: contrast(randColor) }}>More info ...</a>
          {/* <br />
            <h6>Release Date: {props.movieDate}</h6>
            <h3>Overview</h3>
            <p>{props.movieOverview}</p>
            <hr style={{ height: '1px', border: 'none', color: '#fff', backgroundColor: '#fff', width: '80%', textAlign: 'center' }} /> */}


          {/* <small>
              <a href={movieLink} target='_blank' rel="noopener noreferrer" style={{ color: contrast(randColor) }}>More information...</a>
            </small> */}



          {/* </div> */}
        </div>

        <div class="card-footer" style={{ color: contrast(randColor), fontSize: "16px", padding: "2px", textAlign: "center" }}>
          <small >Release Date: {props.movieDate}</small>
        </div>

      </div>



    
  )
};


export default TMDBMoviecard;