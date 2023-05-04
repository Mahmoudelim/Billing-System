export class item{
  id:string ;
    title:string;
    description:string;
    ownername:string;
    status:string;
constructor( id:string ,
  title:string,
  description:string,ownername:string,status:string){
    this.id=id;
    this.title=title;
    this.description=description;
    this.ownername=ownername;
    this.status=status;
  }
}