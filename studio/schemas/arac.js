import { MdApps } from 'react-icons/md'

export default {
  name: 'arac',
  title: 'Araçlar',
  type: 'document',
  icon: MdApps,
  fields: [
    {
      name: 'title',
      title: 'Sınıf Adı',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Açıklamalar',
      type: 'text'
    }
  ],
  liveEdit: true
}
