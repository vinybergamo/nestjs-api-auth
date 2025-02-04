import { Injectable, OnModuleInit } from '@nestjs/common';
import { InstanceRepository } from './instance.repository';
import { WapiService } from '@/wapi/wapi.service';

@Injectable()
export class InstanceService implements OnModuleInit {
  constructor(
    private readonly instanceRepository: InstanceRepository,
    private readonly wapiService: WapiService,
  ) {}
  async onModuleInit() {
    const instanceData = await this.wapiService.getInstanceData();

    const exists = await this.instanceRepository.findById(1);

    if (!exists) {
      await this.instanceRepository.create({});
    }

    await this.instanceRepository.update(1, {
      name: instanceData.instance.name,
      automaticReading: instanceData.instance.automaticReading,
      callMessage: instanceData.instance.callMessage,
      chats: instanceData.instance.chats,
      connectedPhone: instanceData.instance.connectedPhone,
      contacts: instanceData.instance.contacts,
      instanceName: instanceData.instance.instanceName,
      isActive: instanceData.instance.isActive,
      isBlocked: instanceData.instance.blocked,
      messagesReceived: instanceData.instance.messagesReceived,
      messagesSent: instanceData.instance.messagesSent,
      picture: instanceData.instance.profileStatus,
      platform: instanceData.instance.platform,
      profileStatus: instanceData.instance.profileStatus,
      rejectCalls: instanceData.instance.rejectCalls,
      syncContacts: instanceData.instance.syncContacts,
      token: instanceData.instance.token,
      webhookV3: instanceData.instance.webhookV3,
      delayCallMessage: instanceData.instance.delayCallMessage,
    });
  }
}
