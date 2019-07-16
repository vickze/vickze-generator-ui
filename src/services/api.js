import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}

export async function queryTable(params = {}) {
  return request(`/api/generator/table?${stringify(params)}`, {
    getResponse: true,
  });
}

export async function getGeneratorDs() {
  return request(`/api/generator/datasource/generator`);
}

export async function updateGeneratorDs(params = {}) {
  return request(`/api/generator/datasource`, {
    method: 'PUT',
    data: params,
    getResponse: true,
  });
}

export async function codeGenerator(params = {}) {
  return request(`/api/generator/code`, {
    method: 'POST',
    data: params,
    responseType: 'blob',
    getResponse: true,
  });
}

export async function queryConfig(params = {}) {
  return request(`/api/generator/config?${stringify(params)}`, {
    getResponse: true,
  });
}

export async function getConfig(id) {
  return request(`/api/generator/config/${id}`);
}

export async function addConfig(params) {
  return request(`/api/generator/config`, {
    method: 'POST',
    data: params,
    getResponse: true,
  });
}

export async function updateConfig(params) {
  return request(`/api/generator/config`, {
    method: 'PUT',
    data: params,
    getResponse: true,
  });
}

export async function deleteConfig(ids) {
  return request(`/api/generator/config`, {
    method: 'DELETE',
    data: ids,
    getResponse: true,
  });
}

export async function queryTemplate(params = {}) {
  return request(`/api/generator/template?${stringify(params)}`, {
    getResponse: true,
  });
}

export async function getTemplate(id) {
  return request(`/api/generator/template/${id}`);
}

export async function addTemplate(params) {
  return request(`/api/generator/template`, {
    method: 'POST',
    data: params,
    getResponse: true,
  });
}

export async function updateTemplate(params) {
  return request(`/api/generator/template`, {
    method: 'PUT',
    data: params,
    getResponse: true,
  });
}

export async function deleteTemplate(ids) {
  return request(`/api/generator/template`, {
    method: 'DELETE',
    data: ids,
    getResponse: true,
  });
}

export async function queryCurrentUser() {
  return request(`/api/auth/user/_current`);
}

export async function createToken(params) {
  return request(`/api/auth/user/token`, {
    method: 'POST',
    data: params,
  });
}

export async function validateToken() {
  return request(`/api/auth/token/validate`, {
    method: 'GET',
  });
}

export async function deleteToken(token) {
  return request(`/api/auth/token`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
    getResponse: true,
    errorHandler: () => {
      //
    },
  });
}
