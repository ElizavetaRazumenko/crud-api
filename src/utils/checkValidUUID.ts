import { parse as parseUUID } from 'uuid';

export const checkValidUUID = (uuid: string): boolean => {
  try {
    parseUUID(uuid);
    return true;
  } catch {
    return false;
  }
};