import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from '../../auth/validations/UniqueValidation';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @Length(3)
  fullName: string;

  @IsEmail()
  @UniqueOnDatabase(UserEntity, { message: 'Такая почта уже есть' })
  email: string;
  @Length(6, 32, { message: 'Пароль должен содержать минимум 6 символов' })
  password?: string;
}
