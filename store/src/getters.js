/**
 * 作者：yeshengqiang
 * 时间：2021-05-31
 * 描述：获取用户信息
 */
import { USER_INFO, PAGE_CUR } from "@/common/util/constants";
import { isH5 } from '@/common/util/util';


export default {
    userInfo(state) {
        return state.userInfo || uni.getStorageSync(USER_INFO) || {};
    },
    pageCur(state) {
        if (isH5()) {
            return state.pageCur || uni.getStorageSync(PAGE_CUR);
        } else {
            return state.pageCur;
        }
    }
};
