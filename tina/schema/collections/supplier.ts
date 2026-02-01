import type { Collection } from 'tinacms';

export const supplier: Collection = {
  name: 'supplier',
  label: 'Supplier',
  path: 'content/suppliers',
  format: 'json',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'string',
      isTitle: true,
      required: true,
    },
  ],
};
