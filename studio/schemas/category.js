import { MdApps } from 'react-icons/md'

export default {
  name: 'marka',
  title: 'Marka',
  type: 'document',
  icon: MdApps,
  fields: [
    {
      name: 'title',
      title: 'Marka Adı',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Açıklama',
      type: 'text'
    },
    {
      name: 'mainImage',
      title: 'Logo',
      type: 'text',
      description: 'PNG Kullanın.'
    }
  ],
  liveEdit: true
}
