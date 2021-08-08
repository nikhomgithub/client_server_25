import React from 'react';

import PageComponent from '../../component/dataComponent/PageComponent.js'
import {MainContext} from '../../context/MainContext';

import StateTemplate from '../../model/StateTemplate'
import FormTemplate from '../../render/renderForm/FormTemplate'
import FilterTemplate from '../../render/renderFilter/FilterTemplate'
import inputState from '../../component/table/inputState'
import ModalComponent from '../../render/ModalComponent'
import CardTemplate from '../../component/card/CardTemplate'
//import './App2.css'

function Know() {

const {knowForm,knowEditForm}=FormTemplate
const {knowState}=StateTemplate
const {knowFilter}=FilterTemplate
const {knowInputState}=inputState
const {knowCard}=CardTemplate

//=======================================
const [isSecond,setIsSecond]=React.useState(false)
React.useEffect(()=>{
    if(!isSecond){
        setIsSecond(true)
    }
},[isSecond])    

//=======================================
const {basicData,widthLeft,setWidthLeft,myheader}=React.useContext(MainContext)

return(
<div className="bgc-lightGray" style={{height:"100%",width:"100%"}}>
    <PageComponent
        basicData={basicData}     //basicData={basicData}
        dataForm={knowForm}       //dataForm={jobForm}
        dataEditForm={knowEditForm}   //dataEditForm={jobEditForm}
        dataState={knowState}     //dataState={jobState}
        dataFilter={knowFilter}   //dataFilter={jobFilter}

        dataInputState={knowInputState}     //dataInputState={jobInputState}
        tableTitle={"ตาราง"}         //tableTitle={"ตารางงาน"}
        graphTitle={"กราฟข้อมูลงาน"}   //graphTitle={"กราฟข้อมูลงาน"}
        addFormTitle={"เพิ่มความรู้"}    //addFormTitle={"เพิ่มข้อมูลงาน"}
        editFormTitle={"แก้ไขความรู้"}  //editFormTitle={"แก้ไขข้อมูลงาน"}
        
        tableHeadColor={"#F7786B"}   //tableHeadColor={"#F7786B"}
        graphColor={"#FF6F61"}       //graphColor={"#FF6F61"}
        dataUrl={"know"}             //dataUrl={"job"}
        prefixUrl={"p25"}            //prefixUrl={"p25"}         
        canDataChange={true}         //canDataChange={true}
                                     //dataTableTemplateName={"jobTableTemplate"}
                                     //iconAction={[()=>setShowCustomerModal(true),]}
                                     //iconActionData={iconActionData}
                                     //widthLeft={widthLeft}
                                     //setWidthLeft={setWidthLeft}
        cardTemplate={knowCard}      //cardTemplate={jobCard}
        cardTitle={"แสดงความรู้,yellow"}     //cardTitle={"แสดงงานอัตโนมัติ"}
        intervalTime={4000}          //intervalTime={4000}
        myheader={myheader}          //myheader={myheader}
        totalSwapPage={1}            //totalSwapPage={3}
        swapPageOption={["card"]}    //swapPageOption={["card","table","table-graph"]}
        keyName={["photoUrl1"]}      //keyName={["photoUrl1","photoUrl2"]}
        dfQry={{active:"active"}}    //dfQry={{active:"active"}}
        dfLimitRow={5}               //dfLimitRow={5}
    />
 
</div>
)

}
export default Know;