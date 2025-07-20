import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('ini-post').title('Posts'),
      S.documentTypeListItem('ini-category').title('Categories'),
      S.documentTypeListItem('ini-author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['ini-post', 'ini-category', 'ini-author'].includes(item.getId()!),
      ),
    ])
