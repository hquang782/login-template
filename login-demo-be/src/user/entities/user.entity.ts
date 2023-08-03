import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
    constructor() {
        this.id = uuidv4();
    }

    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string

    @Column({ type: 'varchar', length: 128, nullable: false })
    @ApiProperty()
    username: string;

    @Column({ type: 'varchar', length: 128, nullable: false })
    @ApiProperty()
    email: string;

    @Column({ type: 'varchar', length: 128, nullable: false })
    @ApiProperty()
    password: string;

}
