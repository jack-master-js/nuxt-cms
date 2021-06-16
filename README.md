#### Nuxt

```
# 开发模式
yarn
yarn dev

# 部署测试环境
yarn build:uat
pm2 start --env uat

# 部署生产环境
yarn build:production
pm2 start --env production

# 更新
pm2 restart NAME
pm2 reload ecosystem.config.js --env ENVIROMENT
```

## config.js

```
let env =  process.env.__ENV

console.log('env:',process.env.__ENV)

module.exports = {
  secret: 'nuxt-koa-mongoose-pwa',
  app: {
    domain: env === 'production' ? 'https://PRODUCTION.com' : (env === 'uat' ? 'https://UAT.com' : 'http://localhost:3000'),
    host: '0.0.0.0',
    port: 3000
  },
  admin: {
    role: '',
    username: '',
    password: '',
    name: '',
    email: ''
  },
  mongodb: {
    host: '127.0.0.1',
    database: 'nuxt-cms',
    port: 27017,
    username: '',
    password: ''
  },
  SMTPConfig: {
    user: '',
    pass: ''
  }
}
```

> 注：config.js 不被 git 记录，需要自己添加此文件

### 开源协议

[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)
