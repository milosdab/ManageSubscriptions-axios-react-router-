import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Modal from './utils/Modal';



function App() {

    const[data,setData] = useState([]);
    const[data2,setData2]= useState([]);
    const[validateBtn,setValidateBtn]=useState(false);
    const[validateBtn2,setValidateBtn2]=useState(false);
    const[validateBtn3,setValidateBtn3]=useState(false);

//--------------------------------------------------------
    const [checkedNum,setCheckedNum] = useState([]);
    const [twoValidate,setTwoValidate]=useState(false);
    const [twoValidate2,setTwoValidate2]=useState(false);
    const [twoValidate3,setTwoValidate3]=useState(false);
    const [twoValidate4,setTwoValidate4]=useState(false);
    const [twoValidate5,setTwoValidate5]=useState(false);
    
 //--------------------------------------------------------
    const [nextBtn,setNextBtn]=useState(false);   

    //------------------------------------------------------
    const [selectedCard,setSelectedCard]= useState([]);
    const [selectedProductCard,setSlProductCard] = useState([]);
    

  useEffect(()=>{
    axios.get('https://api.kadporastembicu.dev/v1/templates')
    .then(response =>{
        
        setData(response.data);
        
        
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])
  useEffect(()=>{
    axios.get('https://api.kadporastembicu.dev/v1/products')
    .then(response =>{
        
        setData2(response.data);
        
        
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])
 
  const nextButtonHandler = (e) => {
    setNextBtn(true);
  }
  const templatesSelectHandler=(name,description,price) => {
        if(name === "e20"){
          setValidateBtn(true);
          setValidateBtn2(false);
          setValidateBtn3(false);
        }else if (name === "e200"){
          setValidateBtn2(true);
          setValidateBtn(false);
          setValidateBtn3(false);
        }else {
          setValidateBtn3(true);
          setValidateBtn2(false);
          setValidateBtn(false);
        }

        setTwoValidate(false);
        setTwoValidate2(false);
        setTwoValidate3(false);
        setTwoValidate4(false);
        setTwoValidate5(false);
        setCheckedNum([]);

        setSelectedCard({name,description,price})
        setSlProductCard([])
  }

  const productSelectHandler = (name,description,price)=>{
       setCheckedNum((prev)=>{
         return [...prev,name]
       })

       if(name === "CDN"){
        setTwoValidate(true);
       }else if (name === "DNS"){
        setTwoValidate2(true)
       }else if (name === "Edge Compute"){
        setTwoValidate3(true)
       }else if (name === "Monitoring"){
        setTwoValidate4(true)
       }else if (name === "WAF"){
        setTwoValidate5(true)
       }

      setValidateBtn(false);
      setValidateBtn2(false);
      setValidateBtn3(false);

      setSelectedCard([]);
      setSlProductCard((prv)=>{
        return[...prv,{name,description,price}]
      })
  }

  const productUncheckHandler = (name) =>{
    let newArr = checkedNum.filter((item)=>{
      return item !== name
    })
    setCheckedNum(()=>newArr);
    if(name === "CDN"){
      setTwoValidate(false);
     }else if (name === "DNS"){
      setTwoValidate2(false)
     }else if (name === "Edge Compute"){
      setTwoValidate3(false)
     }else if (name === "Monitoring"){
      setTwoValidate4(false)
     }else if (name === "WAF"){
      setTwoValidate5(false)
     }

     let newArrTwo = selectedProductCard.filter((el)=>{
       return el.name !==name;
     })
     setSlProductCard(()=>newArrTwo);

  }


const dummyData =["Unlimited Sites","Unlimited SSL Ceritifcates","1TB CDN Bandwith","5M WAF requests","5 WAF Custom Rules","2M DNS Requests","1 Monitored Service","Netword Layer DDoS Protection"]
const dummyData1 = ["Unlimited Sites","Unlimited Requests","1TB/mo Bandwith","All Global PoPs Included","Free SSL Certificate per site","Network Layer DDoS Protection"];
const dummyData2 = ["Unlimited DNS Zones","Unlimited DNS Records","2M/mo DNS Queries","Global Anycast Network","Network Layer DDoS Protection"];
const dummyData3 = ["45+ PoPs around the World","Platform-wide network layer DDoS protection","Anycast IPs","Built-in CPU and RAM Monitoring"];
const dummyData4 = ["5 Monitored Services","34 Location Checks","30-day Data Retention","5-minute Check Interval"];
const dummyData5 = ["Unlimited Sites","10M Requests","5 Custom Rules","Free Private SSL Certificate","Built-in OWASP & CMS Rules"];
  return (
    <div className="App">
      <Header checkedNum={checkedNum} />
      <Route path="/vl/templates">
      <div className="templates">
        <Card position="e20" title="mixed" data={data} dummyData={dummyData} validateBtn={validateBtn} templates="yes" clicked={templatesSelectHandler}/>
        <Card position="e200" title="mixed" data={data} dummyData={dummyData} validateBtn={validateBtn2} templates="yes"clicked={templatesSelectHandler}/>
        <Card position="e2000" title="mixed" data={data} dummyData={dummyData} validateBtn={validateBtn3} templates="yes" clicked={templatesSelectHandler}/>
      </div>
      </Route>
      <Route path="/vl/products">
      <div className="products">
        <Card position="CDN" data={data2} dummyData={dummyData1} colored="yes" clicked={productSelectHandler} validateBtn={twoValidate} uncheck={productUncheckHandler} />
        <Card position="DNS" data={data2} dummyData={dummyData2} clicked={productSelectHandler} validateBtn={twoValidate2} uncheck={productUncheckHandler}/>
        <Card position="Edge Compute" data={data2} dummyData={dummyData3} colored="yes" clicked={productSelectHandler} validateBtn={twoValidate3} uncheck={productUncheckHandler} />
        <Card position="Monitoring" data={data2} dummyData={dummyData4} clicked={productSelectHandler} validateBtn={twoValidate4} uncheck={productUncheckHandler}/>
        <Card position="WAF" data={data2} dummyData={dummyData5} colored="yes" clicked={productSelectHandler} validateBtn={twoValidate5} uncheck={productUncheckHandler}/>
      </div>
      </Route>
      <div className="bottomBtns">
        {validateBtn === false &&
         validateBtn2 === false &&
         validateBtn3 === false &&
         twoValidate === false &&
         twoValidate2 === false &&
         twoValidate3 === false &&
         twoValidate4 === false &&
         twoValidate5 === false 
         ?
         <button  disabled={true}>Next →</button>
         :
         <button  onClick={nextButtonHandler}disabled={false}>Next →</button>
        }
          
          <span>or</span>
          <button>Back</button>
      </div>
        {nextBtn === true ? 
        <Modal onClose={()=> setNextBtn(false)}>
          {selectedCard && checkedNum.length <=0 ? <div className="selectedTemp">
              <h2>Edge Delivery{selectedCard.name}</h2>
              <div>{selectedCard.description}</div>
              <div>{selectedCard.price}</div>
          </div>: null }
          {selectedProductCard.map((item)=>{
            return (
              <div key={item.name} className="selectedTemp">
          <h2>{item.name}</h2>
              <div>{item.description}</div>
              <div>{item.price}</div>
          </div>
            )
          }) }
          </Modal> 
        : null}
    </div>
  );
}

export default App;

