/*
 * @Author: Bianyu by15242952083@outlook.com
 * @Date: 2023-07-05 14:08:07
 * @LastEditors: Bianyu by15242952083@outlook.com
 * @LastEditTime: 2023-07-05 17:27:50
 * @FilePath: \Easy-code-cli\lib\index.ts
 * @Description:
 * Copyright (c) 2023 by Bianyu email: by15242952083@outlook.com, All Rights Reserved.
 */

import input from '@inquirer/input'

import consola from 'consola'

async function init() {
  const modulesName = await input({ message: '请输入模块名称' })
  consola.info(['模块名称', modulesName])
}

init()

export default init
