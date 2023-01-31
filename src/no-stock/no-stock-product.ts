import { Product } from '../types/data.model.js';

export const noStockProducts = (products: Product[]) =>
  products.filter(product => product.stock === 0);
