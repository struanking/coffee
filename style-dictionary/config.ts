import StyleDictionary from 'style-dictionary';
import { propertyFormatNames } from 'style-dictionary/enums';
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

StyleDictionary.registerFormat({
  name: 'withTailwindTheme',
  format: async ({ dictionary, file, options }) => {
    const { outputReferences } = options;
    const header = await fileHeader({ file });
    return (
      header +
      '@theme {\n' +
      formattedVariables({
        format: propertyFormatNames.css,
        dictionary,
        outputReferences,
        usesDtcg: true,
      }) +
      '\n}\n'
    );
  },
});

export default {
  source: ['design-tokens/**/*.json'],
  platforms: {
    css: {
      transforms: ['name/kebab', 'color/hsl', 'size/pxToRem'],
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'theme-variables.css',
          format: 'withTailwindTheme',
        },
      ],
    },
  },
};
