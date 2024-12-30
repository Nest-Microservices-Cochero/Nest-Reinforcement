import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { v4 as uuid} from 'uuid'

@Injectable()
export class ProductsService {

  private products: Product[] = [];

  create(createProductDto: CreateProductDto) {

    const { name, description, price} = createProductDto;

    
    const product = new Product(uuid(), name, price, description);

    console.log(product);

    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {

    const product = this.products.find(p => p.id === id.toString());

    // error con su state code correspondiente
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }

  /// 1) Update product
  update(id: string, updateProductDto: UpdateProductDto): Product {

    const { id:_, ...values } = updateProductDto;

    const product = this.findOne(id)

    product.updateWith(values);

    return product;
  }

  remove(id: string): Product {

    const product = this.findOne(id);

    this.products = this.products.filter((p) => p.id !== product.id);

    return product
  }
}
