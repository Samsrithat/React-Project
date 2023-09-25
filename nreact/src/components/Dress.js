import { IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9 as tops } from "../utils/constants";

const Dress = (props) => {
    const { DressData } = props;
    return(
        <div className = "dress-Card">
            <h3>{DressData.dressName}</h3>
            <img className = "dressStyle" 
            alt = "green top" 
            // src = {DressData.map(image => <img src = {tops}/>)} 
            src = {DressData.dressimg}
            />   
            <h4>{DressData.brand}</h4>
            <h5>{DressData.rating} stars</h5>
             </div>     
    );
};

export default Dress;