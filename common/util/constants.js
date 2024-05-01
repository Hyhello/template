export const ACCESS_TOKEN = 'Access-Token'
export const USER_NAME = 'login_username';
export const USER_INFO = 'login_user_info';
export const USER_ID = 'login_user_id';
export const X_TENANT_ID = 'X-Tenant-Id';
export const PAGE_CUR = 'app-page-cur';

const STORAGE_OPTIONS = {
	namespace: 'pro__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local', // storage name session, local, memory
}

export default STORAGE_OPTIONS;


