const Database = require('./db')
const createProffy = require('./createProffy')

Database.then( async(db) => {
    //Inserir dados

    proffyValue = {
        name: 'Mayk Brito',
        avatar: 'https://avatars2.githubusercontent.com/u/38513134?s=460&u=9707d0fed00ab3072ddab5eb76855c8d2c63b68b&v=4',
        whatsapp: '8678999999',
        bio: 'professor de aula rapida online',

    }

    classValue = {
        subject:1 ,
        cost:'20',
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from:720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from:520,
            time_to: 1220
        }
    ]


  //  await createProffy(db,{proffyValue,classValue,classScheduleValues})

   //consultar todos os proffys

  const selectedProffys = await db.all("SELECT * FROM proffys")
 // console.log(selectedProffys)

  //consultar as classes de um determinado professor 
  //e junto os dados dele

  const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1; 
  `)
  //console.log(selectClassesAndProffys)

  const selectClassesSchedules = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = 1
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "520"
            AND class_schedule.time_to > "520"
  `)

  //console.log(selectClassesSchedules)
  

})