// for adding array of image or multiple image 

export default{
    name:"propertyImage",
    title:"Property Image",
    type:"image",
    fields:[
        {
            name:"caption",
            title:"Captions",
            type:"string",
            options:{
                isHighLight:true
            },

        }
    ],
    options:{
        hotspot:true
    }
    
}