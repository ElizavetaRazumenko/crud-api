import { ServerResponse } from 'http';
import { User } from '../types/types';
import { checkValidUUID } from '../utils/checkValidUUID';
import { sendResponse } from '../tools/sendResponse';

export const getMethodHandler = (endpoint: string, users: User[], response: ServerResponse): void => {
  const id = endpoint.split('/')[2];
  if (id) {
    const isValidUUID = checkValidUUID(id);
    if (isValidUUID) {
      const currentUser = users.find((user) => user.id === id);
      currentUser
        ? sendResponse(200, response, currentUser)
        : sendResponse(404, response, { message: 'User doesn\'t exist' });
    } else {
      sendResponse(400, response, { message: 'Invalid user ID' });
    }
  } else {
    sendResponse(200, response, users);
  }
};