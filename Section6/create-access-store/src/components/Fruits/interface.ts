export interface FruitsOwnProps{
    ownerName: string;
}

export interface FruitsStatePorps{
    fruits: string[];
}

export type FruitsProps = FruitsOwnProps & FruitsStatePorps;