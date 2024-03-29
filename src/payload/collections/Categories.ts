import type { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  fields: [
    {
      name: 'title',
      type: 'text',
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
  slug: 'categories',
}

export default Categories
