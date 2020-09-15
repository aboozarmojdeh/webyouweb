import React from 'react';
import './LSportnewscard.css';
import altImage from '../../img/sportNews.png';
// import ProgressBar from '../ProgressBar/ProgressBar';
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
function dateMaker(publishedDate) {
  let reformedDate = new Date(publishedDate)
  let modifiedDate = reformedDate.toString().split(" ").slice(0, 5).join(" ");
  return modifiedDate
}
///////////////////////


const LSportnewscard = (props) => {

  function randBGenerator() {
    const bgColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + bgColor
  }

  const randColor = randBGenerator();

  let newsDate = props.newsPublishedDate;
  return (


    <div class="card" style={{ backgroundColor: randColor }}>
      {props.newsImage ?
        <img class="card-img-top"

          src={props.newsImage}

          alt="Current Img" />
        :
        <img class="card-img-top"

          src={altImage}

          alt="" />}

      <div class="card-body card-text-responsive" style={{ color: contrast(randColor) }}>
      <p class="card-title" >{props.newsTitle}</p>

        <a href={props.newsURL} class="card-link" target='_blank' rel="noopener noreferrer" style={{ color: contrast(randColor) }}>More ...</a>
      </div>
      <div class="card-footer" style={{ color: contrast(randColor), fontSize: "14px", padding: "2px", textAlign: "center" }}>
        <small >{dateMaker(newsDate)}</small>
      </div>

    </div>
  )
};


export default LSportnewscard;