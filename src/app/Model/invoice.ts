export class invoice{
    id:string;
    title:string;
    cost:string;
    email:string;
    
    constructor(id:string,title:string,cost:string,email:string){
        this.cost=cost;
        this.email=email;
        this.title=title;
        this.id=id;
    }
}