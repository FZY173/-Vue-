/**
 * 此文件是后端的router
 * @param app
 */
//写后端接口

//以下实现基本的增删改查，使用通用的CRUD接口
/**
 * 此处做一个思想提示，获取动态参数，找到对应的模型，存在对应关系
 * @param app
 */
//导出函数，接受app对象
module.exports = app => {
    const express = require('express')
    //定义一个子路由，方便增删改换
    const router = express.Router({
        //合并url参数,让父级与router中的参数都能访问到
        mergeParams: true
    })

    //因为无法确定固定的模型，所以此处无法导入固定模型
    // const Xjyy = require('../../models/Xjyy')

    //数据库得到数据
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    //成功定义/admin/api/xjyy接口，进行数据的接收,也就是编辑
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        // res.send('aaaaaaaa')
        res.send(model)
    })

    //此处是删除的接口
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body)
        // res.send('aaaaaaaa')
        //此处无需获取返回值
        res.send({
            success: true
        })
    })


    //传递数据到电瓶车预约列表的api
    router.get('/', async (req, res) => {
        const items = await req.Model.find().limit()
        res.send(items)
    })

    //通过id找
    //获取详情页api,同时改变数据库中的原有数据，再传回
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
        // res.send(req.params.id)
    })

    //挂载router
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        //此处可以理解为一个中间键/函数转换
        //给请求对象上挂载一个属性model
        //引入inflection进行大小写和单词的转化
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        //拿出来为小写，开始转换为类名的形式
        next()
    }, router)

//图片上传
//把图片信息生成一个URL返回给客户端，给他一个类似于一个HTTP的接口地址带上图片信息才能发挥，所以需要让上传文件对于前端可见
    //上传中间键upload，同时传递到目标地址(绝对地址，后端)
    const multer = require('multer')
    const upload = multer({dest: __dirname + '../../../uploads'})
    //获取上传文件，express本身获取不到上传文件的数据的，所以需要中间键处理上传的数据
    //single接受单个文件的生产
    //数据本身是没有file的，通过multer把file挂载在req上
    app.post('/admin/api/upload', upload.single(`file`), async (req, res) => {
        //拼出一个url地址
        const file = req.file
        file.url = `http://localhost:3001/uploads/${file.filename}`
        res.send(file)
    })

    // 这里开始写登录的路由
    app.post('/admin/api/login', async (req, res) => {
        // 解构出值,进行取值
        const { username , password } = req.body
        //1、根据用户名找用户，密码是密文。通过明文是找不到密码的。
        const Adminuser = require('../../models/Adminuser')
        //     //查找条件
       //+password')把密码取出来，因为默认是不取的
        const user = await Adminuser.findOne({username}).select('+password')
        if (!user) {
            //设定了一个状态码
            return res.status(422).send({
                message: '用户不存在'
            })
        }
   // 2、校验密码
    const isValid =  require('bcrypt').compareSync(password,user.password)
        if(!isValid){
            return res.status(421).send({
                message: '密码错误'
            })
        }
//3、返回token
//get是冲突的，通过ssecret去判断是获取路由还是配置
     const jwt = require('jsonwebtoken')
       const  token = jwt.sign({
            id:user._id,
            _id:user._id,
            username:user.username,
        },app.get('secret'))
res.send(token)
    })
}





