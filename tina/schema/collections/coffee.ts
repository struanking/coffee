import type { Collection } from 'tinacms';

export const coffee: Collection = {
  name: 'coffee',
  label: 'Coffee',
  path: 'content/coffees',
  format: 'json',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      isTitle: true,
      required: true,
    },
    {
      name: 'country',
      label: 'Country',
      type: 'string',
      options: [
        {
          value: 'brazil',
          label: 'Brazil',
        },
        {
          value: 'columbia',
          label: 'Columbia',
        },
      ],
    },
    {
      name: 'decaf',
      label: 'Decaf',
      type: 'boolean',
    },
    {
      name: 'altitude',
      label: 'Altitude',
      type: 'number',
    },
    {
      name: 'process',
      label: 'Process',
      type: 'string',
      options: [],
    },
    {
      name: 'goodFor',
      label: 'Good for',
      type: 'string',
      options: [
        {
          value: 'espresso',
          label: 'Espresso',
        },
        {
          value: 'pour-over',
          label: 'Pour over',
        },
      ],
    },
    {
      name: 'notes',
      label: 'Notes',
      type: 'string',
      ui: {
        component: 'textarea',
      },
    },
    {
      name: 'supplier',
      label: 'Supplier',
      type: 'reference',
      collections: ['supplier'],
    },
  ],
};
