import { dep } from './dep.js';

export function test() {
  dep('param');

  const returnValue = [];
  const parts = [];

  for (let index = 0; index < 10; index += 1) {
    if (index % 2 === 0) {
      returnValue.push(['odd', index]);
    } else {
      returnValue.push(['even', index]);
    }

    switch (index) {
      case 0: {
        const zeroString = `zero=${index}`;
        parts.push(zeroString);
        break;
      }
      case 1: {
        const oneString = `one=${index}`;
        parts.push(oneString);
        break;
      }
      default:
      // do nothing
    }
  }

  // Ternary operator
  return parts.length === 0 ? 'zero' : parts.length === 1 ? 'one' : 'other';
}

export function ternary() {
  const booleanValue = true;
  const falsyValue = undefined;

  return falsyValue ? booleanValue : false;
}
