const { Doctor } = require('@appworks/doctor')

const doctor = new Doctor({ignore: ['node_modules', 'report']})
doctor.scan('./', {
    framework: 'vue',tempFileDir: 'doctorResult'
}).then((result) => {
  console.log(result)
})