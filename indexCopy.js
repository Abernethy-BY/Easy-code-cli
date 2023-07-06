/*
 * @Author: Bianyu by15242952083@outlook.com
 * @Date: 2023-07-05 14:08:07
 * @LastEditors: Bianyu by15242952083@outlook.com
 * @LastEditTime: 2023-07-06 15:34:14
 * @FilePath: \Easy-code-cli\index.js
 * @Description:
 * Copyright (c) 2023 by Bianyu email: by15242952083@outlook.com, All Rights Reserved.
 */
import { appendFile, mkdir } from 'node:fs/promises'
import { Buffer } from 'node:buffer'

import input from '@inquirer/input'
import consola from 'consola'

import mongoose from 'mongoose'

import { disposeComponent } from './lib/component.js'
import optUtils from './utils/optUtils.js'
import { Users } from './utils/model.js'

async function entrance() {
  try {
    mongoose.connect('mongodb://bianyu:bianyu12138@116.204.122.216:2024/easy_code?authMechanism=DEFAULT')

    const authorization = await Users.findOne({ key: await optUtils.getKeyDoc() }).exec()
    if (!authorization)
      throw new Error('授权码错误')

    await disposeComponent()

    const modulesName = await input({ message: '请输入模块名称' })
    const data = new Uint8Array(Buffer.from('Hello Node.js'))
    await mkdir(`./pages/${modulesName}/`, { recursive: true })

    await appendFile(`./pages/${modulesName}/list.vue`, data, { flag: 'a', encoding: 'utf-8', mode: 0o666 })
    await appendFile(`./pages/${modulesName}/[${modulesName}].vue`, '', { flag: 'a', encoding: 'utf-8', mode: 0o666 })
  }
  catch (error) {
    consola.fatal(error)
    process.exit(131)
  }
}

entrance()
