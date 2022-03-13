module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/common/components',
          screens: './src/screens',
          images: './src/common/assets/images',
          constants: './src/common/constants',
        },
      },
    ],
  ],
};
