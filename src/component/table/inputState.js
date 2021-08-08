const customerInputState={
  id:{toCheck:false,min:0,max:0},
  title:{toCheck:false,value:""},
  name:{toCheck:false,value:""},
  surname:{toCheck:false,value:""},
  phone:{toCheck:false,value:""},
  customerType:{toCheck:false,value:""},
  remark:{toCheck:false,value:""},
  address_number:{toCheck:false,value:""},
  address_tambon:{toCheck:false,value:""},
  address_district:{toCheck:false,value:""},
  address_province:{toCheck:false,value:""},
  address_postcode:{toCheck:false,value:""},
}


const jobInputState={
id:{toCheck:false,min:0,max:0},
dateIn:{toCheck:false,min:new Date().toISOString().substring(0,10),max:new Date().toISOString().substring(0,10)},
dateTarget:{toCheck:false,min:new Date().toISOString().substring(0,10),max:new Date().toISOString().substring(0,10)},
dateOut:{toCheck:false,min:new Date().toISOString().substring(0,10),max:new Date().toISOString().substring(0,10)},

jobType:{toCheck:false,value:""},
jobStatus:{toCheck:false,value:""},
active:{toCheck:true,value:"active"},
urgency:{toCheck:false,value:""},

customerId:{toCheck:false,min:0,max:0},
title:{toCheck:false,value:""},
name:{toCheck:false,value:""},
surname:{toCheck:false,value:""},
phone:{toCheck:false,value:""},

remark:{toCheck:false,value:""},

jobValue:{toCheck:false,min:0,max:0},
progress:{toCheck:false,min:0,max:0},

}

const knowInputState={
  id:{toCheck:false,min:0,max:0},
  dateIn:{toCheck:false,min:new Date().toISOString().substring(0,10),max:new Date().toISOString().substring(0,10)},
  
  subject:{toCheck:false,value:""},

  knowType:{toCheck:false,value:""},
  active:{toCheck:false,value:""},
   
  remark:{toCheck:false,value:""},
    
  }
  
const inputState = {
  jobInputState,
  customerInputState,
  knowInputState
}
export default inputState
