export default interface IAppState {
    category: string;
    data: Category[];
}

export interface Category {
    categoryName: string;
    filesCollection: string[];
}