import { readFile } from 'node:fs/promises'
import yaml from 'js-yaml'

class optUtils {
  static async getKeyDoc() {
    const optDoc = yaml.load(await readFile('./easy.yml', 'utf8'))
    return optDoc.key
  }

  static async getComponentUrlDoc() {
    const optDoc = yaml.load(await readFile('./easy.yml', 'utf8'))
    return optDoc.component.url
  }
}

export default optUtils
