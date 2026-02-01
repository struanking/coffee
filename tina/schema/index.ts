import type { Schema } from 'tinacms';
import { coffee } from './collections/coffee';
import { supplier } from './collections/supplier';

export const schema: Schema = {
  collections: [coffee, supplier],
};
