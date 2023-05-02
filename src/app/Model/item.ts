export class item{
  id:string ;
    title:string;
    description:string;
    ownername:string;
constructor( id:string ,
  title:string,
  description:string,ownername:string){
    this.id=id;
    this.title=title;
    this.description=description;
    this.ownername=ownername;
  }
}