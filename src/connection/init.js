import { httpClient } from '@/services/httpClient';
import { serviceOptions } from './resources.js';
serviceOptions.axios = httpClient;
