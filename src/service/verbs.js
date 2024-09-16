import {Client} from './instance';

export async function getRequest(URL, params) {
  const response = Client.get(URL, {params: params});
  return response;
}
export async function postRequest(URL, params) {
  const response = Client.post(URL, params);
  return response;
}
