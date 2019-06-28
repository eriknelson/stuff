import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  addToCounter: ['amountToAdd'],
});

export { Creators, Types };
