import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UsersRepository)
        private usersRespository :UsersRepository,
    ){}

async signUp(authCredentialsDto: AuthCredentialsDto) : Promise<void>{
    return this.usersRespository.createUser(authCredentialsDto);
}
}
