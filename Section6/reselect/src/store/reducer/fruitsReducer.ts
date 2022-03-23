import { Reducer } from "redux";
import FruitsActions from "../actions/fruitsAction";
import { createSelector } from 'reselect';
import { StoresStatesType } from "./rootReducer";

export interface FruitsReducerAction{
    type: string;
    fruits: string[];
}

export const fruitsReducer: Reducer<string[], FruitsReducerAction> = (state= [], action) => {
    switch (action.type) {
        case FruitsActions.ADD_FRUITS:
            return [...state, ...action.fruits]
    
        default:
            return state;
    }
}

export const fruitsWithO = createSelector<StoresStatesType, string[],string[]> (
    (state) => state.fruits,
    fruits => {
        return fruits.filter(fruit => fruit.includes('o'))
    }
)