import { useState, useEffect } from "react";    // 한번에 여러개를 같은 곳에서 import 할 때 이렇게 할 수도 있나보다
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )).json();
  
      setMovies(json.data.movies);
      setLoading(false);
    }
  
    useEffect(() => {
      getMovies();
    }, []);
    
    console.log(movies);
  
    return ( 
      <div>
        {loading ? (
          <h1>Loading...</h1> 
          ): ( 
          <div>
            {movies.map((movie) => (
              <Movie 
                key={movie.id}  //내부랑 별개로 map이 돌고있으니 key
                id={movie.id}

                // {/*순서만 같으면 되고, 꼭 인자를 받는 애랑 이름이 같을 필요 없다 */}
                // 라고 설명하신 줄 알았는데, api에서 받아온 값에 대한 얘기였던거 같다.
                // 순서 바꿔도 잘 동작하는것을 보니, 이름이 같아야 하는것이 맞는듯.
                // 이름 다를땐 동작 안하였음 ㅇㅇ
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres} 
              />
            ))}
          </div>
          )}
      </div>
    );
  }
  export default Home;