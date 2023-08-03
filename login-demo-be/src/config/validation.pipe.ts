import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class CreateDeviceValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { mac_address, name } = value;

    // validate mac_address
    const macAddressRegex = /^\d{5}$/;
    if (mac_address && !mac_address.match(macAddressRegex)) {
      throw new BadRequestException(
        'Invalid mac_address format. It should be 5 digits.',
      );
    }
    // validate name
    if (name && name.length < 3) {
      throw new BadRequestException(
        'Invalid name. It should have at least 3 characters.',
      );
    }
    return value;
  }
}
