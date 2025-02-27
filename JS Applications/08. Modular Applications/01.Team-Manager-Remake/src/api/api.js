import { settings } from './request.js';
const host = 'http://localhost:3030';
settings.host = host;

import * as auth from './auth.js';
import * as data from './data.js';

export const api = {
    auth,
    data,
}