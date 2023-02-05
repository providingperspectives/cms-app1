export class Documents {

  constructor (public id: string, public name: string, public description: string,
  public url: string, public children: Documents[]) {

 /* constructor(id: string, name: string, description: string, url: string, children: string, ) {*/
      this.id = id;
      this.name = name;
      this.description = description;
      this.url = url;
      this.children = children;

  }
}
