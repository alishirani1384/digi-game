export default {
    name: 'banners',
    type: 'document',
    title: 'Banners',
    fields: [
        {
            name: "name",
            type: 'string',
            title:'Name'
        },
        {
            name: 'image',
            type: 'image',
            title:'Image'
        },
        {
            name: "slug",
            type: 'slug',
            title: 'slug',
            options: {
                source: 'name',
                maxLength: 200,
            }
        }
        
    ]
}