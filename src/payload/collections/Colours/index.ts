import type { CollectionConfig } from 'payload/types'

const Colours: CollectionConfig = {
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
        name: "category",
        type: "text",
        required: true,
    },
    {
      name:'logo',
      type:'upload',
      relationTo:'media'
    },
    {
      name:'wallpapers',
      type:'relationship',
      hasMany:true,
      relationTo:'wallpapers'
  },
  ],
  slug: 'colours',
}

export default Colours
