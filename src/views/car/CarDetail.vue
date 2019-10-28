<template>
  <div class="car-detail">
    <Table stripe :columns="columns1" :data="data1"></Table>
    <div v-for="item in dataList" :key="item.url">
      {{ item.content }}
    </div>

    {{ userInfo.name }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      dataList: []
    };
  },
  created() {
    this.getListData();
    console.log(this.userInfo);
  },
  methods: {
    ...mapActions(["fetchPersonInfo"]),
    async getListData() {
      try {
        let res = await this.api.user.getUserBranchList({});
        if (res.status === 200) {
          this.dataList = res.data;
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  watch: {}
};
</script>

<style scope lang="scss">
.car-detail {
}
</style>
