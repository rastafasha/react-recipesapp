export interface Recipe {
    id: number;
    title: string;
    readyInMinutes: number;
    healthScore: number;
    type?: string;
    image: string;
  }