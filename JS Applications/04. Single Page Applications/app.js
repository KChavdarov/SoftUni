import * as externalModule from './module.js';

document.querySelector('main').textContent = `The result is: ${externalModule.sumNum (1,3)}`;