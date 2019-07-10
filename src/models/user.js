import { query as queryUsers, queryCurrent } from '@/services/user';
import {
  queryUser,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  queryCurrentUser,
} from '@/services/api';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { setAuthority, clearAuthority } from '@/utils/authority';
import { getToken } from '@/utils/token';
import { ssoLogin } from '@/utils/sso';
import { getPageQuery } from '@/utils/utils';
import router from 'umi/router';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'user',

  state: {
    queryParams: {}, //除pagination外其他查询信息
    list: [],
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
      showTotal: total => formatMessage({ id: 'table.total' }, { total: total }),
      pageSizeOptions: ['10', '20', '30'],
      showSizeChanger: true,
      showQuickJumper: true,
    },
    currentUser: {},
  },

  effects: {
    *fetchCurrent({ callback }, { call, put }) {
      const token = getToken();

      if (!token) {
        if (SSO) {
          ssoLogin(window.location.href);
        } else {
          router.replace({
            pathname: '/login',
            query: {
              redirect: window.location.href,
            },
          })
        }
        return;
      }
      const response = yield call(queryCurrentUser);
      if (!response.permissions) {
        if (SSO) {
          ssoLogin(window.location.href);
        } else {
          router.replace({
            pathname: '/login',
            query: {
              redirect: window.location.href,
            },
          })
        }
      }
      setAuthority(response.permissions);
      reloadAuthorized();
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
      callback(response);
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
