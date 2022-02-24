

>show databases;
>show tables;
>use student_courses;

>db.student_courses.insertMany([

        {
        
            "_id" : ObjectId("621731425d1652ec8e1ef6a0"),
                "student_name" : "Rakesh",
                "admin" : "dev_",
                "sessions" : 42.0,
                "assignments" : "assessmentexam"
        },
        
        {
                "_id" : ObjectId("621731425d1652ec8e1ef6a1"),
                "student_name" : "survesh",
                "admin" : "crack_",
                "sessions" : 42.0,
                "assignments" : "customerexam"
        },
        {
            "_id" : ObjectId("621731425d1652ec8e1ef6a2"),
            "student_name" : "prathmesh",
            "admin" : "div_",
            "sessions" : 21.0,
            "assignments" : "clientexam"
        }
        
    ])
