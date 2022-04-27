import * as tf from '@tensorflow/tfjs';

// Crear array de tensores
// Mostrar cuantos tensores y cuanta memoria se usa
// Crear otros 4 tensores dentro de un tf.tidy()
// Mostrar cuantos tensores y cuanta memoria se usa
// Marcar un tensor para que no se elimine al terminar el tidy
// Finalizar tidy
// Mostrar cuantos tensores y cuanta memoria se usa
// Eliminar un tensor con tf.dispose
// Mostrar cuantos tensores y cuanta memoria se usa
// Eliminar todo
// Mostrar cuantos tensores y cuanta memoria se usa

// Crear array de tensores
const a = tf.tensor1d([1, 2, 3]);
const b = tf.tensor1d([4, 5, 6]);
const c = tf.tensor1d([7, 8, 9]);

// Mostrar cuantos tensores y cuanta memoria se usa
console.log('1');
console.log('numero de tensores: ', tf.memory().numTensors);
console.log('Cantidad memoria usada: ', tf.memory().numBytes, ' bytes');

// Crear otros 4 tensores dentro de un tf.tidy()

tf.tidy(() => {
  const d = tf.tensor1d([10, 11, 12]);
  const e = tf.tensor1d([13, 14, 15]);
  const f = tf.tensor1d([16, 17, 18]);
  const g = tf.tensor1d([19, 20, 21]);

  // Mostrar cuantos tensores y cuanta memoria se usa
  console.log('2');
  console.log('numero de tensores: ', tf.memory().numTensors);
  console.log('Cantidad memoria usada: ', tf.memory().numBytes, ' bytes');

  // Marcar un tensor para que no se elimine al terminar el tidy

  tf.keep(d);

  e.dispose();

  console.log('3');

  console.log('numero de tensores: ', tf.memory().numTensors);
  console.log('Cantidad memoria usada: ', tf.memory().numBytes, ' bytes');

  // Finalizar tidy
});

console.log('4');
console.log('numero de tensores: ', tf.memory().numTensors);
console.log('Cantidad memoria usada: ', tf.memory().numBytes, ' bytes');
