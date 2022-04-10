const initialValue:object[] = []
interface Action{
    type:string,
    payload: object
}

export const reducer = (state= initialValue,action:Action)=>{
  switch (action.type) {
      case "ADD_TO_LIST":
          return[
                ...state,
              action.payload
          ]
      default:
       return state
  }

}

