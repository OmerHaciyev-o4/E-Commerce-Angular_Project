export class Product{
    constructor(
        public id: string,
        public name: string,
        public imageUrl: string,
        public description: string,
        public categoryId: string,
        public brandId: string,
        public colorId: string,
        public price: number,
        public publishedDate: Date,
        public count: number,
        public newItem: boolean
    ){}
}