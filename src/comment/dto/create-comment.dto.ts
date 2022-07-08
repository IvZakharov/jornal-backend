import { isNotEmpty } from 'class-validator';

export class CreateCommentDto {
  // @isNotEmpty()
  text: string;

  // @isNotEmpty()
  postId: number;
}
