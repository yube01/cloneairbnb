export default{
    name:"person",
    title:"Person",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string",
            description:" Please use 'FirstName Lastname' format"
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"name",
                maxLength:100
            }
        },
        {
            name:"id",
            title:"Id",
            type:"number"
        },

        {
            name:"image",
            title:"Image",
            type:"image"
        }
    ]
}