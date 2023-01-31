import { Product } from '../types/data.model.js';
import { noStockProducts } from './no-stock-product.js';

describe('Given No Stock Product function', () => {
  test('when called with empty list, then no stock products must be provide', () => {
    const products: Product = ([] = []);
    expect(noStockProducts(products)).toEqual([]);
  });
});
