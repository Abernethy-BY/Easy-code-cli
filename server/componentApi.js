import { consola } from 'consola'

async function addComponent(md5, fileName) {
  try {
    // const componentRes = Components.findOne({ componentMd5: md5,belongsUserId: await optUtils.getKeyDoc()  }).exec()
    // if (componentRes) {

    // }
  }
  catch (error) {
    consola.fatal(error)
  }
}

export { addComponent }
