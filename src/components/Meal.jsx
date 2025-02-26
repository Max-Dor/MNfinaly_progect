import { Link } from "react-router-dom";

export function Meal(props){
    const {strMeal, idMeal,strCategoryThumb} = props;

        return <div className="card" >
                <div className="card-image">
                    <img src={strCategoryThumb} alt={strMeal}/>
                </div>
                <div className="card-content">
                    <span className="card-title">{strMeal}</span>
                </div>
                <div className="card-action">
                    <Link to={`/category/${idMeal}`} className="btn" >Watch reciepe</Link>
                </div>
        </div>

}