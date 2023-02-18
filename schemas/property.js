export default {
    name:"property",
    title:"Property",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string"
        },
        {
            name:"location",
            title:"Location",
            type:"geopoint"
        },
        {
            name:"propertyType",
            title:"Property Type",
            type:"string",
            options:{
                list:[
                    { title:"House" , value:"house"},
                    { title:"Bed and Breakfast", value:"bed-and-breakfast" },
                    { title:"Pool", value:"pool" },
                    { title:"Double Bed", value:"doubleBed" }
                ],
                layout:"radio"
            }
        },

        //hotspots for adding editing feature like cropping image  
        {
            name:"mainImage",
            title:"Main Image",
            type:"image",
            options:{
                hotspot:true
            }
        },
        //adds multiple image feature
        {
            name:"images",
            title:"Images",
            type:"array",
            of:[
                {type:"propertyImage"}
            ]

        },
        {
            name:"pricePerNight",
            title:"Price per night",
            type:"number"
        },
        {
            name:"bed",
            title:"Bed",
            type:"number"
        },
        {
            name:"bedrooms",
            title:"Bedrooms",
            type:"number"
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"title",
                maxLength:100
            }
        },
        {
            name:"id",
            title:"Id",
            type:"number"
        },
        {
            name:"description",
            title:"Description",
            type:"string"
        },
        {
            name:"host",
            title:"Host",
            type:"host"
        },
        //type array helps for adding multiple number of data
        {
            name:"reviews",
            title:"Reviews",
            type:"array",
            of:[
                {type:"review"}
            ]
        }
    ]
}