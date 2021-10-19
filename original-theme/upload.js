const fs = require('fs-extra')
const path = require('path')

const buildDir = path.resolve(__dirname, 'public')
const targetDir = path.resolve(__dirname,'../wp-app/wp-content/themes/original-theme');

try {
  fs.emptyDirSync(targetDir)
  fs.copySync(buildDir, targetDir)
  console.log(`
  ✅ copy files successed !
  `)
} catch (err) {
  console.error(err)
}