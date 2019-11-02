const toSpawnArgs = require('./')

const options = {
  input: 'nogame.mkv',
  output: 'nogame.mp4',
  encoder: 'x264',
  'encoder-preset': 'medium',
  'encoder-tune': 'animation',
  quality: '20',
  optimize: true,
  audio: 2,
  aencoder: 'faac',
  subtitle: 2,
  'subtitle-burned': 2
}

console.log(toSpawnArgs(options, { optionEqualsValue: true }))
console.log(toSpawnArgs(options, { optionEqualsValue: false }))
