import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'

const hiddenTypes = ['sinif', 'companyInfo', 'page', 'person', 'post', 'project', 'siteSettings']

export default () =>
  S.list()
    .title('İçerik')
    .items([
      S.listItem()
        .title('Site Ayarları')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      
      S.listItem()
        .title('Şirket Bilgileri')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.divider(),
      S.listItem()
        .title('Araçlar')
        .schemaType('arac')
        .child(S.documentTypeList('arac').title('Araçlar')),
      S.listItem()
        .title('Araç Sınıfları')
        .schemaType('sinif')
        .child(S.documentTypeList('sinif').title('Sınıflar')),
      S.listItem()
        .title('Markalar')
        .schemaType('marka')
        .child(S.documentTypeList('marka').title('Markalar')),
        // araçları araç sınıfları içinde sub olark toplamak gerek. Hatta markaları da sublasak?
      S.divider(),
        S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(FaFile),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaFile)
            ])
        ),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      //...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])
