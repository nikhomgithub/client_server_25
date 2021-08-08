
import React from 'react';
import axios from 'axios'
import {Route,Switch,Redirect} from 'react-router-dom';

import Navbar from './component/navbar/Navbar'

import Home from './page/home/Home'
import ShopWelcome from './page/shop/ShopWelcome'
import UserWelcome from './page/user/UserWelcome'
import BasicData from './page/basicdata/BasicData'
import Customer from './page/customer/Customer'
import Job from './page/job/Job'
import Know from './page/know/Know'

import GridCard from './component/gridcard/GridCard'

import {MainContext} from './context/MainContext';

import './App2.css'
import { HomeWork } from '@material-ui/icons';

function App() {

const {username,setUsername,
   reloadCheckToken,setReloadCheckToken,
   haveShopToken,setHaveShopToken,
   haveUserToken,setHaveUserToken,
   userName,setUserName,
   basicData,myheader
}=React.useContext(MainContext)


let temp=window.location.href.split("/")
const home=`${temp[0]}//${temp[2]}/home`

const [reloadData,setReloadData]=React.useState(true)

const reloadAxios=()=>{
   
   axios.post(`/job/getlimit`,
      {pageNumber:1,limitRow:10,sort:{id:1}},myheader)
   
       .then(result=>{
          console.log(result.data.data)
          setReloadData(false)
       })
       .catch(error=>{
           //setMessage(error.response.data.message)
           //console.log(error.response)
       })
}


React.useEffect(()=>{

   if(reloadData){
      reloadAxios()
   }
},[reloadData])


return(
<div className="bgc-lightGray" style={{height:"100vh",width:"100vw"}}>
   <div className="h-5">
         <Navbar/>   
   </div>

   <div className="h-95">
     
      <Switch>
         <Route path="/home" component={() => window.location.href = home} />
         <Route exact path="/p25/shop" component={haveShopToken?UserWelcome:ShopWelcome}/>
         <Route exact path="/p25/user" component={haveShopToken?UserWelcome:ShopWelcome}/> 
         <Route exact path="/p25/basicdata" 
            component={haveShopToken?(haveUserToken?BasicData:UserWelcome):ShopWelcome} /> 
         <Route exact path="/p25/customer" 
            component={haveShopToken?(haveUserToken?Customer:UserWelcome):ShopWelcome}/> 
         <Route exact path="/p25/job" 
            component={haveShopToken?(haveUserToken?Job:UserWelcome):ShopWelcome}/>    
         <Route exact path="/p25/know" 
            component={haveShopToken?(haveUserToken?Know:UserWelcome):ShopWelcome}/>  
      </Switch>     

   </div>

</div>
)

}
export default App;


/*


    <Switch>
         <Route path="/home" component={Home}/>
         <Route exact path="/pageshop" component={haveShopToken?UserWelcome:ShopWelcome}/>
         <Route exact path="/pageuser" component={haveShopToken?UserWelcome:ShopWelcome}/> 
         <Route exact path="/pagebasicdata" 
            component={haveShopToken?(haveUserToken?BasicData:UserWelcome):ShopWelcome} /> 
         <Route exact path="/pagecustomer" 
            component={haveShopToken?(haveUserToken?Customer:UserWelcome):ShopWelcome}/> 
         <Route exact path="/pagejob" 
            component={haveShopToken?(haveUserToken?Job:UserWelcome):ShopWelcome}/>    
         <Route exact path="/" render={() => <Redirect to="/home" />} />   
      </Switch>     





*/