import { Test, TestingModule } from '@nestjs/testing';
import { SubtopicsDescController } from './subtopics_desc.controller';

describe('SubtopicsDescController', () => {
  let controller: SubtopicsDescController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubtopicsDescController],
    }).compile();

    controller = module.get<SubtopicsDescController>(SubtopicsDescController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
