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
          '@Contexts' : './src/contexts/index',
          '@Hooks' : './src/hooks/index',
          '@Navigation' : './src/navigation/index',
          '@Services' : './src/services/index',
          '@Types' : './src/types.tsx',
          '@Utils' : './src/utils/index'
        }
      }]
    ]
  };
};
