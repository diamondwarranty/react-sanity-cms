import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'diamond_warranty',

  projectId: 'r9lui59o',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Hero singleton
            S.listItem()
              .title('Hero Section')
              .child(
                S.editor()
                  .schemaType('hero')
                  .documentId('heroSettings')
              ),

              //Add other singletons here
            // ...S.documentTypeListItems().filter(
            //   (item) => item.getId() !== 'hero'
            // ),
            ...S.documentTypeListItems().filter(
              (item) => !['hero'].includes(item.getId())
            ),
          ]),
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
