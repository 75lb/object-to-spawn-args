const toSpawnArgs = require('./')
const spawn = require('child_process').spawn

const options = { input: 'nogame.mkv',
  output: 'nogame.mp4',
  encoder: 'x264',
  'encoder-preset': 'medium',
  'encoder-tune': 'animation',
  quality: '20',
  optimize: true,
  audio: 2,
  aencoder: 'faac',
  subtitle: 2,
  'subtitle-burned': 2 }

const spawnArgs = toSpawnArgs(options, { optionEqualsValue: true })
console.log(spawnArgs)
