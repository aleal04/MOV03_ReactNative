import { ADD_TRAINER } from '../actions/Types';

const INITIAL_STATE = {trainerList: [
    {name: 'User1' , phone: '00000000' , address: 'Lugar 1' , gender: 'M'}, 
    {name: 'User2' , phone: '01111111' , address: 'Lugar 2' , gender: 'F'},
    {name: 'User3' , phone: '02222222' , address: 'Lugar 3' , gender: 'M'},
    {name: 'User4' , phone: '03333333' , address: 'Lugar 4' , gender: 'F'},
    {name: 'User5' , phone: '04444444' , address: 'Lugar 5' , gender: 'F'},
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