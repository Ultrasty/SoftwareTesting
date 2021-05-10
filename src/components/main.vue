<template>
  <div class="hello" style="height: 100vh">
    <el-container style="height: 100%">
      <el-header style="border-bottom: 1px solid #323232;text-align: right;height: 8%; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>XP 极限测试平台</span>
      </el-header>
      <el-container style="height: 92%; border: 0px solid #eee">
        <el-aside width="250px" style="background-color: #3c3f41;">
          <div>
          <el-scrollbar style="height: 100%; ">
            <el-menu background-color="#3c3f41" active-text-color="#5fc0f7" :default-openeds="['1','2']" text-color="white">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>练习题</template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="q1" style="padding-left: 25px;">1.	判断三角形类型</el-menu-item>
                  <el-menu-item index="1-2" @click="q2" style="padding-left: 25px;">2.	电脑销售系统</el-menu-item>
                  <el-menu-item index="1-3" @click="q3" style="padding-left: 25px;">3.	电信收费问题系统</el-menu-item>
                  <el-menu-item index="1-4" @click="q4" style="padding-left: 25px;">4.	万年历问题</el-menu-item>
                </el-menu-item-group>


                </el-submenu>

                <el-submenu index="2">
                  <template slot="title"><i class="el-icon-menu"></i>项目</template>

                </el-submenu>
            </el-menu>
          </el-scrollbar>

          </div>
        </el-aside>

        <el-scrollbar style="height: 100%;">

          <router-view></router-view>

        </el-scrollbar>

      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  },
  methods: {
    q1: function () {
      window.location = '#/question1'
    },
    q2: function () {
      window.location = '#/question2'
    },
    q3: function () {
      window.location = '#/question3'
    },
    q4: function () {
      window.location = '#/question4'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-header {
  background-color: #0078d5;
  color: white;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}

.el-menu-item {
  text-align: left;
}

.el-submenu {
  text-align: left;
}
</style>

<style>
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>