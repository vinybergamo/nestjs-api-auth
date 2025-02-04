export interface InstanceData {
  error: boolean;
  message: string;
  instance: Instance;
}

interface Instance {
  connectionKey: string;
  instanceName: string;
  connectedPhone: string;
  name: string;
  profilePictureUrl: string;
  profileStatus: string;
  contacts: number;
  chats: number;
  messagesSent: number;
  messagesReceived: number;
  isActive: boolean;
  platform: string;
  blocked: boolean;
  automaticReading: boolean;
  rejectCalls: boolean;
  callMessage: string;
  delayCallMessage: number;
  syncContacts: boolean;
  webhookV3: boolean;
  token: string;
  createdAt: string;
}
