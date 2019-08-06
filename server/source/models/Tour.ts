interface TourInterface{
    model: string;
    yearOfManofacture: string;
    readonly doorQuantitie: number;
    brand: string;
    text?: string | {};
}

export default class Tour implements TourInterface{
    model: string;    
    yearOfManofacture: string;
    doorQuantitie: number;
    brand: string;
    text?: string | {};

    constructor(atributes: TourInterface){
        this.model = atributes.model;
        this.yearOfManofacture = atributes.yearOfManofacture;
        this.doorQuantitie = 4;
        this.brand = atributes.brand;
        this.text = atributes.text;

        if(!this.model || !this.yearOfManofacture || this.brand)
            throw 'your request is missing some parameters';

    }

    public toJson(){
        return{
            'type': 'passeio',
            'model': this.model,
            'yearOfManofacture': this.yearOfManofacture,
            'doorQuantitie': this.doorQuantitie,
            'brand': this.brand,
            'text': this.text
        };
    }
}