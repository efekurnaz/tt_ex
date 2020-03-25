// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import arac from './arac'
import blockContent from './blockContent'
import blockText from './blockText'
import sinif from './sinif'
import marka from './marka'
import companyInfo from './companyInfo'
import figure from './figure'
import mainImage from './mainImage'
import page from './page'
import person from './person'
import post from './post'
import postAuthor from './postAuthor'
import project from './project'
import projectMember from './projectMember'
import siteSettings from './siteSettings'
import slideshow from './slideshow'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    arac,
    blockContent,
    blockText,
    companyInfo,
    figure,
    mainImage,
    marka,
    page,
    person,
    post,
    postAuthor,
    project,
    projectMember,
    sinif,
    siteSettings,
    slideshow

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
