/*
 * @Author: Bianyu by15242952083@outlook.com
 * @Date: 2023-07-05 14:08:07
 * @LastEditors: Bianyu by15242952083@outlook.com
 * @LastEditTime: 2023-07-05 16:17:09
 * @FilePath: \Easy-code-cli\index.ts
 * @Description:
 * Copyright (c) 2023 by Bianyu email: by15242952083@outlook.com, All Rights Reserved.
 */

import input from '@inquirer/input'

import consola from 'consola'

async function init() {
  const modulesName = await input({ message: '请输入模块名称' })
  consola.info(['模块名称', modulesName])
}

export default init
