import inquirer from 'inquirer'

const inquire = async (question) => {
  const {result} = await inquirer.prompt([question])
  return result
}

export default inquire

