interface UpdateWithOptions {
  name?: string;
  price?: number;
  description?: string;
}

export class Product {
  id: string;
  name: string;
  price: number;
  description?: string;

  constructor(id: string, name: string, price: number, description?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  /// 1) método para actualizar los valores de mi clase, Podemos crear una interfaz envés de definir hay mismo
  updateWith({
    name,
    price,
    description,
  }: {
    name?: string;
    price?: number;
    description?: string;
  }) {
    //-2) si no se proporciona algún valor, se mantiene el valor anterior
    this.name = name || this.name;
    this.price = price || this.price;
    this.description = description || this.description;
  }
}
