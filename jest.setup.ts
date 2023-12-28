import '@testing-library/jest-dom';
import crypto from 'crypto';

Object.defineProperty(globalThis, 'crypto', {
    value: {
        getRandomValues: function (buffer: any) {
            return crypto.randomFillSync(buffer);
          },
          randomUUID: function (){
              return crypto.randomUUID()
          },
          subtle: crypto.webcrypto.subtle,
    }
  });