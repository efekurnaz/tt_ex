import { MdApps } from 'react-icons/md'

export default {
  name: 'arac',
  title: 'Araç',
  type: 'document',
  icon: MdApps,
  fields: [
    {
      name: 'sinif',
      title: 'Sınıf',
      type: 'reference',
      to: [{ type: 'sinif' }]
    },
    {
      name: 'marka',
      title: 'Marka',
      type: 'reference',
      to: [{ type: 'marka' }]
    },
    {
      name: 'title',
      title: 'Model',
      type: 'string'
    },
    {
      name: 'id',
      title: 'Plaka',
      type: 'string'
    },
    {
      name: 'yil',
      title: 'Yıl',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Fotoğraflar',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'description',
      title: 'Açıklamalar',
      type: 'text'
    }
  ],
  liveEdit: true,
  preview: {
    select: {
      title: 'title',
      subtitle: 'id',
      description: 'sinif.title',
      marka: 'marka.title',
      media: 'marka.logo'
    },
    prepare(selection) {
      const {title, subtitle, description, marka, media} = selection
      return {
        title: marka + ' ' + title,
        media: media,
        subtitle: subtitle,
        description: description
      }
    }
  }
}
