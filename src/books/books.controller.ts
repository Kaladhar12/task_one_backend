import { Controller, Get } from '@nestjs/common';

interface Book {
  id: number,
  title: string;
  img: string;
}

@Controller('books')
export class BooksController {
  private readonly books: Book[] = [
    {
      id: 1,
      img: `sales.svg`,      
      title: 'Sales Automation'
    },
    {
      id: 2,
      img: `marketing.svg`,
      title: 'Marketing Automation'
    },
    {
      id: 3,
      img: `api.svg`,
      title: 'API Questions'
    },
    {
      id: 4,
      img: `personalization.svg`,
      title: 'Personalization'
    },
    {
      id: 5,
      img: `email.svg`,
      title: 'Email Marketing'
    },
    {
      id: 6,
      img: `demand.svg`,
      title: 'Demand Generation'
    }
  ];

  @Get()
  findAll(): Book[] {
    return this.books;
  }
}
