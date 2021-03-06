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
      title: 'Logo',
      name: 'logo',
      type: 'image',
      description: 'Transparan arkaplanlı, PNG format kullanın.'
    },
    {
      name: 'description',
      title: 'Açıklama',
      type: 'text'
    }
  ],
  liveEdit: true
}
