import { readFile, readdir } from 'node:fs/promises'
import consola from 'consola'
import optUtils from '../utils/optUtils.js'

import { Components } from '../utils/model.js'

async function disposeComponent() {
  const { createHash } = await import('node:crypto')

  try {
    const files = await readdir(await optUtils.getComponentUrlDoc())

    files.forEach(async (file) => {
      const controller = new AbortController()
      const { signal } = controller
      const fileDoc = await readFile(`${await optUtils.getComponentUrlDoc()}/${file}`, { signal })

      const hash = createHash('md5')
      hash.update(fileDoc, 'utf8')
      const fileMd5 = hash.digest('hex')
      consola.info(fileMd5)
      controller.abort()

      const componentRes = await Components.findOne({ componentName: file, belongsUserKey: await optUtils.getKeyDoc() }).exec()
      if (!componentRes) {
        consola.fail(`组件${file}不存在`)
        const component = {}
        await Components.create(component)
      }
    })

    consola.info(222)
  }
  catch (error) {
    consola.fatal(error)
  }
}
export { disposeComponent }
