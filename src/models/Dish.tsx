class Dish {
  id: number;
  image: string;
  name: string;
  description: string;

  constructor(id: number, name: string, description: string, image: string) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
  }
}

export default Dish;
