import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UsersRepository)
        private usersRespository :UsersRepository,
        private jwtService : JwtService
    ){}

async signUp(authCredentialsDto: AuthCredentialsDto) : Promise<void>{
    return this.usersRespository.createUser(authCredentialsDto);
}


async signIn(authCredentialsDto:AuthCredentialsDto) : Promise<{accessToken : string}>{
    const {username, password} = authCredentialsDto;
    const user = await this.usersRespository.findOne({username});

    if(user && (await bcrypt.compare(password, user.password))){

        const payload: JwtPayload = {username};
        const accessToken = await this.jwtService.sign(payload);
        return {accessToken}
    }else{
        throw  new UnauthorizedException('Please check your login credentials');
    }
}
}
