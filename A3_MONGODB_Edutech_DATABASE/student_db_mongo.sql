
--to see all collections in a database
>show databases;

--to see all documents
>show tables;

--to select/create/use database
>use student_courses;


--to insert only single document
>db.student_courses.insertOne(
        {
                student_name:'Vinay',
                admin:'rvd_',
                sessions:12,
                assignments:'final'
        })

--to insert in many documents
>db.student_courses.insertMany([

        {
        
                "student_name" : "Rakesh",
                "admin" : "dev_",
                "sessions" : 42.0,
                "assignments" : "assessmentexam"
        },
        
        {
               
                "student_name" : "survesh",
                "admin" : "crack_",
                "sessions" : 42.0,
                "assignments" : "customerexam"
        },
        {
            
            "student_name" : "prathmesh",
            "admin" : "div_",
            "sessions" : 21.0,
            "assignments" : "clientexam"
        }
        
    ])

--to show all documents in a table
>db.student_courses.find()

--to show document having student named as 'Vinay'
>db.student_courses.find({student_name:'Vinay'})

--to update a single document having name as 'Vinay'
>db.student_courses.update(
        {
                student_name:'Vinay'
        },
        {
                $set:{sessions:50}
        })

--to update all documents having name as 'Vinay'
>db.student_courses.updateMany(
        {
                student_name:'Vinay'
        },
        {
                $set:{sessions:50}
        })

--to delete a single document having name as 'Vinay'
>db.student_courses.deleteOne(
        {
                student_name:'Vinay'
        })

--to delete all documents having name as 'Vinay'
>db.student_courses.deleteMany(
        {
                student_name:'Vinay'
        })



