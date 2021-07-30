import './Card.css';

const Card = (props) => {

    const coloredDiv = {
        color: "#297898"
        ,
        backgroundColor:"#eaf3f5"
        ,
        opacity: "70%"
      };

       return (
        <div className="cardWrapper">
            {props.data.map((item)=>{
                if(props.position === item.name){
                    return(
                <div key={item.name}  className="card">
                    {props.colored === "yes" ?
                    <div style={coloredDiv} className="cardHeader">
                        {props.title === "mixed" ? 
                        <div className="cardInsideHeader">
                        <h3>Edge Delivery</h3>
                        <p className="secondP">| {item.name}</p>
                        </div>
                        :
                        <h3>{item.name}</h3>
                    }
                    </div>
                    :
                    <div className="cardHeader">
                        {props.title === "mixed" ? 
                        <div className="cardInsideHeader">
                        <h3>Edge Delivery</h3>
                        <p className="secondP">| {item.name}</p>
                        </div>
                        :
                        <h3>{item.name}</h3>
                    }
                    </div>
            }
                    <div className="cardDescr">
                      <p>{item.description}</p>
                    </div>
                    <div className="cardList">
                        <ul>
                            {props.dummyData.map((dummy)=> <li key={dummy}>{dummy}</li>)}
                        </ul>
                    </div>
                    <div className="cardPrice">
                       <p>{item.price}</p>
                    </div>
                    <div className="cardBtnDiv">
                        {props.templates === "yes" ?
                          <div>
                              {props.validateBtn === false ?
                         <button className="cardBtn" onClick={()=>{props.clicked(item.name,item.description,item.price)}}>Select</button>
                          :
                          <button className="cardBtnTwo">Selected ✓</button>
                              }
                         </div> 
                         :
                         <div>
                         {props.validateBtn === false ?
                         <button className="cardBtn" onClick={()=>{props.clicked(item.name,item.description,item.price)}}>Select</button>
                          :
                          <button className="cardBtnTwo"onClick={()=>{props.uncheck(item.name)}}>Selected ✓</button>
                              }
                         </div>
                         }
                    </div>
     
                </div>

                    )
                }else return null
            })}
           
         </div>
       )
}
export default Card;