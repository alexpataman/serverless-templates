import { lambdaHandler } from '@/utils/lambdaHandler';
import schema from './schema';

export const main = lambdaHandler(async () => {
  console.log('zzz', process.env.OFFLINE_HTTP_PORT);
  return 'Hello world';
}, schema);
