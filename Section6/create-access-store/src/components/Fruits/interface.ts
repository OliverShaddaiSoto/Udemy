export interface FruitsOwnProps{
    ownerName: string;
}

export interface FruitsStatePorps{
    fruits: string[];
}

export interface FruitsDispatchProps{
    addFruits(fruits: string[]): any;   
}

export type FruitsProps = FruitsOwnProps & FruitsStatePorps & FruitsDispatchProps;