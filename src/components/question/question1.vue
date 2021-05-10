<template>

 <div class='container'>
   <el-container>
    <el-header class='header'> <h3>三角形测试问题</h3></el-header>
    <el-footer>
      <div class="single">
        <h4>单个测试</h4>
        <el-form ref="form" :model="form" label-width="80px" class="input-form">
          <el-form-item label="edge1" class="input-text">
            <el-input v-model="form.edge1"></el-input>
          </el-form-item>
          <el-form-item label="edge2" class="input-text">
            <el-input v-model="form.edge2"></el-input>
          </el-form-item>
          <el-form-item label="edge3" class="input-text">
            <el-input v-model="form.edge3"></el-input>
          </el-form-item>
          <el-form-item class="button">
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="onClear">清空</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="batch">
        <h4>批量测试</h4>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">上传测试用例</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <div>
      <el-table
          :data="tableData"
          stripe
          style="width: 100%">
        <el-table-column
            prop="date"
            label="序号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="输入"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="预期输出">
        </el-table-column>
        <el-table-column
            label="实际输出">
        </el-table-column>
        <el-table-column
            label="是否通过">
        </el-table-column>

      </el-table>
    </div>
    </el-footer>
   </el-container>
   
 </div>

</template>
<script>
export default {
  name: "question1",
  data() {
    return {
      uploadActionUrl:'',
      form: {
        edge1: '',
        edge2: '',
        edge3: '',
      },
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    // eslint-disable-next-line no-unused-vars
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
}
</script>

<style scoped>
.container{
  margin-top: 100px;
  position: absolute;
  left: 60%;
  transform: translate(-50%, 0); /*元素向上向左移动元素高宽的50%，使元素中心在正中*/
}
.header{
  margin-left: 40px;
  margin-bottom: 30px;
  text-align: center;
}
.single{
  margin-bottom: 50px;
  display: inline;
  float: left;
}

.batch{
  margin-bottom: 100px;
  display: inline;
  float: right;
}
.upload-demo {
  margin-top: 50px;
}
.input-form{
  padding-right: 20px;
}

</style>