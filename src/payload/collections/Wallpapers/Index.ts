import type { CollectionConfig } from 'payload/types'

export const wallpapers: CollectionConfig = {
    fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "category",
          type: "text",
          required: true,
        },
        {
            name: "color",
            type: "text",
            required: true,
        },
        {
            name:'image',
            type:'upload',
            relationTo:'media'
        },
      ],

  slug: 'wallpapers',
}
