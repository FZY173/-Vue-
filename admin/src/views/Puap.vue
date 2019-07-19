<template>
<div>
    <h1>{{id ? '编辑' : '新增'}}接送机预约</h1>
        <el-form :model="model"  ref="form" label-width="90px" @submit.native.prevent="save" >
            <el-form-item label="类别" >
            <el-checkbox-group v-model="checkList">
            <el-checkbox label="接机" v-model="model.category"></el-checkbox>
            <el-checkbox label="送机" v-model="model.category"></el-checkbox>
            </el-checkbox-group>
            </el-form-item>
            <el-form-item label="姓名" >
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" >
                <el-input v-model="model.phone"></el-input>
            </el-form-item>
            <el-form-item label="站口" >
                <el-select v-model="model.id" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <!--<el-input v-model="model.id"></el-input>-->
            </el-form-item>
            <el-form-item label="预约时间" >
                <el-col :span="7">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="日期" v-model="model.date" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="开始时间" v-model="model.time1" style="width: 100%; margin-left: 30px"></el-time-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">--------------</el-col>
                <el-col :span="7">
                    <el-form-item prop="date3">
                        <el-time-picker placeholder="结束时间" v-model="model.time2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
                <el-button  @click="$router.push(`/order/jjsj`)">取消</el-button>
            </el-form-item>
        </el-form>
</div>
</template>

<style>
    </style>

<script>
    export default {
        props: {
            id: {}
        },
        data () {
            return {
                model:{},
                checkList: ['选中且禁用','复选框 A'],
                options: [{
                    value: '选项1',
                    label: 'A口停车场'
                }, {
                    value: '选项2',
                    label: 'B口停车场'
                }, {
                    value: '选项3',
                    label: 'C口停车场'
                }, {
                    value: '选项4',
                    label: 'D口停车场'
                },
                   ],
                value: ''
            };
        },
        methods: {
            async save() {
                //异步换成类似同步,新建和修改
                let res
                if(this.id){
                    res = await this.$http.put(`/rest/puap/${this.id}`,this.model)
                }else{
                    res = await this.$http.post('rest/puap', this.model)
                }
                this.$router.push('/order/jjsj')
                this.$message({
                    type: 'success',
                    message: '保存成功'
                })
            },

            async fetch() {
                const res = await this.$http.get(`rest/puap/${this.id}`)
                this.model = res.data

            }
        },

        //进行判断，有id才执行
        created(){
            this.id && this.fetch()
        }

    }
</script>