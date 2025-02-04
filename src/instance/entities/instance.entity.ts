import { Column, Entity } from 'typeorm';
import { BaseSchema } from 'src/database/base-schema';

@Entity()
export class Instance extends BaseSchema {
  @Column()
  name: string;

  @Column()
  instanceName: string;

  @Column({ nullable: true })
  connectedPhone: string;

  @Column({ nullable: true })
  picture: string;

  @Column({ nullable: true })
  profileStatus: string;

  @Column({ default: 0 })
  contacts: number;

  @Column({ default: 0 })
  chats: number;

  @Column({ default: 0 })
  messagesSent: number;

  @Column({ default: 0 })
  messagesReceived: number;

  @Column({ default: false })
  isActive: boolean;

  @Column({ nullable: true })
  platform: string;

  @Column({ default: false })
  isBlocked: boolean;

  @Column({ default: false })
  automaticReading: boolean;

  @Column({ default: false })
  rejectCalls: boolean;

  @Column({ nullable: true })
  callMessage: string;

  @Column({ default: 0 })
  delayCallMessage: number;

  @Column({ default: false })
  syncContacts: boolean;

  @Column({ default: false })
  webhookV3: boolean;

  @Column({ nullable: true })
  token: string;
}
