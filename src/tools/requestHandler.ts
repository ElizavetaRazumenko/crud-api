import { IncomingMessage, ServerResponse } from 'http';
import { sendOptionsResponse } from '../tools/sendOptionsResponse';
import { getMethodHandler } from './getMethodHandler';
import { postMethodHandler } from './postMethodHandler';
import { putMethodHandler } from '../tools/putMethodHandler';
import { User } from '../types/types';
import { sendResponse } from './sendResponse';

const users: User[] = [];

export const requestHandler = (request: IncomingMessage, response: ServerResponse) => {
  try {
    const { method, url } = request;
  
    if (
      url 
      && url.startsWith('/api/users') 
      && url.split('/').length < 5
    ) {
      const endpoint = url.slice('api/'.length);
      switch (method) {
      case 'OPTIONS': 
        sendOptionsResponse(response);
        break;
      case 'GET': 
        getMethodHandler(endpoint, users, response);
        break;
      case 'POST': 
        postMethodHandler(users, request, response);
        break;
      case 'PUT':
        putMethodHandler(endpoint, users, request, response);
        break;
      }
    } else {
      sendResponse(404, response, { message: 'Non-existent endpoint' });
    }
  } catch {
    sendResponse(500, response, { message: 'Internal server error' });
  }

};