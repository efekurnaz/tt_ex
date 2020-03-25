import { MdApps } from 'react-icons/md'

export default {
  name: 'sinif',
  title: 'Araç Sınıfları',
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
