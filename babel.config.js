module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      ['module-resolver', {
        root: ['.'],
        alias: {
          '@Components': './src/components/index',
          '@Types' : './src/types.tsx',
          '@Contexts' : './src/contexts/index',
          '@Navigation' : './src/navigation/index'
        }
      }]
    ]
  };
};
