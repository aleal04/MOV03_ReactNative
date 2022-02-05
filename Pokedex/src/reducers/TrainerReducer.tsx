import { ADD_TRAINER } from '../actions/Types';

const INITIAL_STATE = {trainerList: [
    {name: 'User1' , phone: '22989009' , address: 'Lugar 1' , gender: 'M' , birthdayDate: new Date('2000-01-01') }, 
    {name: 'User2' , phone: '73040494' , address: 'Lugar 2' , gender: 'F' , birthdayDate: new Date('2000-01-01') },
  ] 
};

const trainerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRAINER:
      return { trainerList: [...state.trainerList, action.payload] };
    default:
      return state;
  }
};

export default trainerReducer;