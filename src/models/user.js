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
    *fetchCurrent(_, { call, put }) {
      const token = getToken();
      if (!token) {
        router.push('/login');
      }
      const response = yield call(queryCurrentUser);
      if (!response.permissions) {
        router.push('/login');
      }
      setAuthority(response.permissions);
      reloadAuthorized();
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
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
