import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();   // 이렇게 바꿔준것이 어떻게 동작에 변화를 준지는 모르겠으나, 
    // console.log(id);            // 오브젝트 안에 담겨있던 값을 빼내와서 동작함 ({id: '47400'} => 47400)
   
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }
    
    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail</h1>
}
export default Detail;