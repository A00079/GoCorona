import { conditionalExpression } from "@babel/types";

const initState = {
    response: []
}

const rootReducer = (state = initState, action) =>{
    switch(action.type) {
        case 'FETCH_DATA':
          fetch(action.url)
          .then(Rawdata => Rawdata.json())
          .then((data) =>{
              state = {...state,...data};
              return state;
          })
          break;
            default:
            return state;
      }
}

export default rootReducer;