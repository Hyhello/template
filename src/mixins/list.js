export default {
    data() {
        return {
            autoLoad_: true,
            loading: false, // 列表加载
            list: [], // 列表展示
            searchData: {
                // 搜索条件
                pageNum: this.$store.state.pageNum, // 当前页码
                pageSize: this.$store.state.pageSize // 分页大小
            },
            multipleSelection: [], // 列表多选集合
            total: 0 // 总数量
        };
    },
    computed: {
        // 分页是否展示
        pageShow() {
            return !!this.list.length;
        }
    },
    mounted() {
        if (this.autoLoad_) {
            this.currentChange(1);
        }
    },
    methods: {
        async currentChange(val) {
            try {
                this.loading = true;
                this.searchData.pageNum = val;
                // 获取列表
                const result = await this._getList(this.searchData);
                if (result) {
                    this.list = result.rows || [];
                    this.total = result.total;
                }
            } catch (e) {
                if (e.message) {
                    this.$message.error(e.message);
                }
            } finally {
                this.loading = false;
            }
        },
        _getIndex(index) {
            return (this.searchData.pageNum - 1) * this.searchData.pageSize + index + 1;
        },
        sizeChange(size) {
            this.searchData.pageSize = size;
            this.currentChange(1);
        },
        handleSearch() {
            this.currentChange(1);
        },
        handleRefresh(changeValue = 0) {
            const { pageNum, pageSize } = this.searchData;

            // 当前分页下面总共有多少条数据
            const len = this.list.length + changeValue;
            let pageNo = this.$store.state.pageNum;
            const cv = len >= 0 ? Math.ceil(len / pageSize) - 1 : Math.floor(len / pageSize);
            pageNo = pageNum + cv;
            pageNo = Math.max(pageNo, this.$store.state.pageNum);
            this.currentChange(pageNo);
        },
        handleReset() {
            this.searchData = {
                pageNum: this.$store.state.pageNum, // 当前页码
                pageSize: this.$store.state.pageSize // 分页大小
            };
            this.handleSearch();
        }
    }
};
