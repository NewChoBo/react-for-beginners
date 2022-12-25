import PropTypes from "prop-types";
import {Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres }){
    //모든 인자에 대한 정보들은 부모 컴포넌트로부터 받아온다.
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
              <Link to={`/movie/${id}`}>{title}</Link>  {/** Link : 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트 */}
              {/** id값을 받아와서 넣어줌 */}
            </h2>
            <p>{summary}</p>
            <ul>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
        </div>
    );
}

// Typescript처럼 데이터형 확인해줄 수 있게 하는 그런것
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;