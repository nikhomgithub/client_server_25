
import React from 'react';
import GalleryoneForCard from '../galleryone/GalleryoneForCard.js';
import {FaRegPlayCircle,FaRegPauseCircle} from 'react-icons/fa';

function GridCard(props) {

   const {filterData,editData,setEditData,pageNumber,setPageNumber,
          showTimer,setShowTimer,limitRow,count,setReloadData,
          cardTitle
        } = props 

    
    
    const tempCardTitle=cardTitle.split(",")

   const genToDate=()=>{
        let toDate=new Date().toLocaleDateString('en-GB')
        const date=toDate.substring(0,2)
        const month=toDate.substring(3,5) 
        const fullYear=toDate.substring(6,10)
        toDate=`${fullYear}-${month}-${date}`
        return toDate     
   }


   const checkDateWithToDate=(fulldate)=>{
        if(!fulldate){return null}

        let toDate=Date.parse(genToDate())
        const targetDate=Date.parse(fulldate)

        if(toDate>targetDate){
            return "red"
        }
        else {
            return "blue"
        }
    }   

   const changeToThaiDate=(fulldate)=>{
      let thaiDate=null
  
      if(fulldate) {
          const year=fulldate.substring(0,4)
          const month=fulldate.substring(5,7)
          const date=fulldate.substring(8,10)
          thaiDate=`${date}-${month}-${year}`
      }
      return thaiDate
  }
  
const renderEachCard=(i,idx)=>{
      const { id,dateIn,
         dateTarget,jobStatus,
         jobType,title,name,remark,
         photoUrl1,photoUrl2,knowType,subject,
         active,urgency
         
        } = i
  
        const getEditBgcColor=(id)=>{
            if(editData){
                if(editData.id==id){
                    return "#A0DAA9"
                }
                else{
                    return "#DFCFBE"
                }
            }   
            else {
                return "#DFCFBE"
            }
        }
     

  //<Galleryone imgarrs={photoUrl1} width={100}/>

  return(
      <div key={idx} className="w-100 h-100" 
           style ={{border:"none",boxShadow:"5px 5px 5px #888888",position:"relative"}}
           onClick={e=>{setEditData(i)}}
           >
  
         <div className="flex-center-center w-100 h-60" 
              style={{overlfow:"auto"}}
         >      
            <GalleryoneForCard imgarrs={photoUrl1} width={100}/>
         </div>
  
         <div className="flex-center-start jc-start w-100 h-40"
              styl={{overflow:"auto"}}
         >
            
             <div className="w-100 h-100 bgc-yellow" 
                  style={{textAlign:"left",backgroundColor:getEditBgcColor(id),
                          borderRadius:"5px",padding:"0 0 0 0"}}>
                  <div className="w-100" 
                       style={{height:"15%",overflow:"hidden",
                               display:"flex",justifyContent:"space-between"
                  }}>
                  {
                   active
                  ?<div className="w-100" 
                       style={{height:"15%",overflow:"hidden",
                              fontWeight:"bold",fontSize:"1rem",
                              position:"absolute",top:"0.2rem",left:"0.2rem",
                              color:"green"
                  }}>
                      {`${active}`}
                  </div>
                  :null
                  }
                  {
                   urgency
                  ?<div className="w-100" 
                       style={{height:"15%",overflow:"hidden",
                              fontWeight:"bold",fontSize:"1rem",
                              position:"absolute",top:"1.2rem",left:"0.2rem",
                              color:"red"
                  }}>
                      {`${urgency}`}
                  </div>
                  :null
                  }

                    {dateIn
                     ?<div style={{color:"black"}}>
                        {changeToThaiDate(dateIn)}
                     </div>
                     :null
                     }

                     {dateTarget
                     ?<div style={{color:checkDateWithToDate(dateTarget)}}>
                        { changeToThaiDate(dateTarget)}
                     </div>
                     :null
                     }
                  </div>
                  
                  {name
                  ?<div className="w-100" 
                       style={{height:"15%",overflow:"hidden",fontWeight:"bold",fontSize:"1.2rem"
                  }}>
                      {`${title} ${name}`}
                  </div>
                  :null
                  }

                 

                  {subject
                  ?<div className="w-100" 
                       style={{height:"15%",overflow:"hidden",fontWeight:"bold",fontSize:"1.2rem"
                  }}>
                      {`${subject}`}
                  </div>
                  :null
                  }

                  {jobType
                  ?<div className="w-100" 
                       style={{height:"15%",overflow:"hidden",fontStyle:"italic",color:"darkgreen",
                  }}> 
                      {jobType} 
                  </div>
                  :null
                  }
                  
                  {knowType
                  ?<div className="w-100" 
                       style={{height:"15%",overflow:"hidden",fontStyle:"italic",color:"darkgreen",
                  }}> 
                      {knowType} 
                  </div>
                  :null
                  }

                  {remark
                  ?<div className="w-100" 
                       style={{height:"40%",overflow:"hidden",color:"black",
                  }}> 
                      {remark} 
                  </div>
                  :null
                  }  
                  
                  {jobStatus
                  ?<div className="w-100" 
                       style={{height:"15%",overflow:"hidden",fontStyle:"bold",fontSize:"1.2rem",
                               color:"brown",
                  }}> 
                      {jobStatus} 
                  </div>
                  :null
                  }
             </div>
           
         </div>
         
     </div>
      )
  }


  React.useEffect(()=>{
    if(showTimer){
        const totalPage=Math.ceil(count/limitRow)
        
        setTimeout(()=>{
            if(pageNumber==totalPage){
                setPageNumber(1)
                setReloadData(true)
            }
            else{
                const temp=pageNumber+1
                setPageNumber(temp)
                setReloadData(true)
            }
        },7000)
    }
  },[showTimer,pageNumber])

  const renderCard=()=>{
      return(
          <div className="w-100 h-100 bd-black" 
               style={{overflow:"auto",padding:"1rem",position:"relative"}}>
              {true
              ?<div style={{position:"absoulute",top:"0rem",left:"1rem",zIndex:"100",
                            backgroundColor:tempCardTitle[1]}}>
                  {tempCardTitle[0]}
              </div>
              :null
              }
              <div style={{position:"absolute",right:"1rem",top:"0",zIndex:"100"}}>
                {
                  showTimer
                  ?<FaRegPauseCircle className="lg-icon" style={{backgroundColor:"#88B04B",}}
                      onClick={e=>setShowTimer(false)}
                  />  
                  :<FaRegPlayCircle className="lg-icon" style={{backgroundColor:"#EFC050"}}
                      onClick={e=>setShowTimer(true)}
                  />
                }
              </div>
              <div className="grid-card"> 
                  {filterData.map((i,idx)=>renderEachCard(i,idx))
                  }
              </div>
          </div> 
      )
  }
  


return(
<div className="bgc-lightGray" style={{height:"100%",width:"100%"}}>
   {filterData
   ?renderCard()
   :null
   }
</div>
)
}
GridCard.defaultProps={
    filterData:[]
}
export default GridCard;

/*
[
   {
   id: 1,
   dateIn: "2021-01-01T00:00:00.000Z",
   dateOut: "2021-01-29T00:00:00.000Z",
   dateTarget: "2021-01-19T00:00:00.000Z",
   jobStatus: "เสร็จแล้ว",
   jobType: "เรือรดน้ำ",

   customerId: 1,
   title: "นาย",
   name: "จิตติ",
   surname: "ดี",
   phone:["12345", "67890"],
   photoUrl1: ["https://picsum.photos/id/7/200/300", "https://picsum.photos/id/23/200/300"],
   photoUrl2: [https://picsum.photos/id/3/200/300],
   jobValue: 1000,  
   progress: 100,
   remark: "ด่วน",

   },

   {
   id: 1,
   dateIn: "2021-01-01T00:00:00.000Z", //1
   dateOut: "2021-01-29T00:00:00.000Z",
   dateTarget: "2021-01-19T00:00:00.000Z", //2
   jobStatus: "เสร็จแล้ว", //3
   jobType: "เรือรดน้ำ", 

   customerId: 1,
   title: "นาย", //4
   name: "จิตติ", //5
   surname: "ดี",
   phone:["12345", "67890"],
   photoUrl1: ["https://picsum.photos/id/7/200/300", "https://picsum.photos/id/23/200/300"],
   photoUrl2: [https://picsum.photos/id/3/200/300],
   jobValue: 1000,  
   progress: 100,
   remark: "ด่วน",
   },

]


*/