/*
 * @Author: Bianyu by15242952083@outlook.com
 * @Date: 2023-07-05 14:08:07
 * @LastEditors: Bianyu by15242952083@outlook.com
 * @LastEditTime: 2023-07-06 17:07:47
 * @FilePath: \Easy-code-cli\index.js
 * @Description:
 * Copyright (c) 2023 by Bianyu email: by15242952083@outlook.com, All Rights Reserved.
 */
import consola from 'consola'
import mongoose from 'mongoose'

import { disposeComponent } from './lib/component.js'
import optUtils from './utils/optUtils.js'
import { Users } from './utils/model.js'

async function entrance() {
  try {
    await mongoose.connect('mongodb://bianyu:bianyu12138@116.204.122.216:2024/easy_code?authMechanism=DEFAULT')

    const authorization = await Users.findOne({ key: await optUtils.getKeyDoc() }).exec()
    if (!authorization)
      throw new Error('授权码错误')

    await disposeComponent()
  }
  catch (error) {
    consola.fatal(error)
    process.exit(131)
  }
}

entrance()
