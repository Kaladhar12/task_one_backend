import { Controller, Get } from '@nestjs/common';

interface desc{
    id: number,
    desc: string;
}

@Controller('subtopics_desc')
export class SubtopicsDescController {
    private subtopics_desc: desc[] = [
    ]
       
    @Get()
    findAll(): desc[] {
        return this.subtopics_desc;
    }

}
