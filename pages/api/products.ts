// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
  id: number
  name: string
  imageUrl: string
  listPrice: number
  salePrice: number
}

const products:Product[] = [
{
  id: 1,
  name: 'Nestle Chocolates',
  imageUrl: 'image_1.png',
  listPrice: 50.99,
  salePrice: 60.99
},
{
  id: 2,
  name: 'Parle Chocolates',
  imageUrl: 'image_2.png',
  listPrice: 100.99,
  salePrice: 110.99
},
{
  id: 3,
  name: 'Cadbury Chocolates',
  imageUrl: 'image_3.png',
  listPrice: 150.99,
  salePrice: 160.99
},
{
  id: 4,
  name: 'Lindt Chocolates',
  imageUrl: 'image_4.png',
  listPrice: 200.99,
  salePrice: 210.99
},
{
  id: 5,
  name: 'Ferrero Rocher Chocolates',
  imageUrl: 'image_5.png',
  listPrice: 250.99,
  salePrice: 260.99
},
{
  id: 6,
  name: 'Mars Chocolates',
  imageUrl: 'image_6.png',
  listPrice: 300.99,
  salePrice: 310.99
},

]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products)
}
