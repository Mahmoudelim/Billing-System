export class item{
  id:string ;
    title:string;
    description:string;
    ownername:string;
    status:string;
    gb:string;
    cost:string;
constructor( id:string ,
  title:string,
  description:string,ownername:string,status:string,gb:string,cost:string){
    this.id=id;
    this.title=title;
    this.description=description;
    this.ownername=ownername;
    this.status=status;
    this.gb=gb;
    this.cost=cost;
  }
}