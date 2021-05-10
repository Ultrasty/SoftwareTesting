<template>

 <div class='container'>
   <el-container>
    <el-header> <h3>三角形测试问题</h3></el-header>
    <el-footer>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="edge1" class="input-text">
          <el-input v-model="form.edge1"></el-input>
        </el-form-item>
        <el-form-item label="edge2" class="input-text">
          <el-input v-model="form.edge2"></el-input>
        </el-form-item>
        <el-form-item label="edge3" class="input-text">
          <el-input v-model="form.edge3"></el-input>
        </el-form-item>
        <el-form-item>
          <el-upload 
            :action="uploadActionUrl"
            accept="csv"
            multiple
            :limit="3"
            :on-exceed="handleExceed">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">请上传csv格式文件</div>
          </el-upload>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="onClear">清空</el-button>
        </el-form-item>
      </el-form>
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
    
  }
}
</script>

<style scoped>
.container{
  margin-top: 100px;
  margin-left: 420px;
}
</style>