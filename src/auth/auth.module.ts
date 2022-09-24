import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret : 'topSecret51',
      signOptions : {
        expiresIn: 3600
      }
    }),
    TypeOrmModule.forFeature([UsersRepository])],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports:[JwtStrategy,PassportModule] // by this we are allowing any other module which imports auth module can also enjoy this 2 modules
})
export class AuthModule {}
