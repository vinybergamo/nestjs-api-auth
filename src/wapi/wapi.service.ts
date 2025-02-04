import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { InstanceData } from './wapi.interfaces';

@Injectable()
export class WapiService {
  constructor(private readonly httpService: HttpService) {}

  async getInstanceData() {
    const { data } = await firstValueFrom(
      this.httpService.get<InstanceData>('/instance/getInstance').pipe(
        catchError((error: AxiosError) => {
          console.error(error);

          throw new HttpException(
            error.response?.data || error.message,
            error.response?.status,
          );
        }),
      ),
    );

    return data;
  }
}
