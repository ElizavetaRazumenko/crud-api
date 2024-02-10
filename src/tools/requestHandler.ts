import { IncomingMessage, ServerResponse } from 'http';
import { getMethodHandler } from './getMethodHandler';
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
      case 'GET': 
        getMethodHandler(endpoint, users, response);
        break;
      }
    } else {
      sendResponse(404, response, { message: 'Non-existent endpoint' });
    }
  } catch {
    console.log('PIZDEC');
  }

};