import { store } from '@hyhello/utils';
import { USER_INFO } from '@/common/constants';

export default {
    userInfo(state) {
        return state.userInfo || store.get(USER_INFO, true) || {};
    }
};
