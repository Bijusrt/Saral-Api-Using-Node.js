const express = require('express');

const fs = require('fs');

const app = express();

app.use(express.json());

app.use(express.text());

app.get('/',(req,res)=>{
    
    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    const resultantList = []; 

    for (let i=0;i<convert.length;i++){

        const innerDict = {};
            
        innerDict['id'] = convert[i]['id'];

        innerDict['name'] = convert[i]['name'];

        innerDict['description'] = convert[i]['description']

        resultantList.push(innerDict);

    }

    res.send(resultantList);

})

app.get('/courses',(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    var resultantList2 = [];

    for (var i in convert){

        const innerList=[];

        for (var j in convert[i].submission){

            delete convert[i].submission[j].usersummision;
  
            innerList.push(convert[i].submission[j]);
        
        }

        resultantList2.push(innerList);
    
    }
    
    res.send(resultantList2);
    
})

app.get('/comments',(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    var resultantList5 = [];

    for (var i in convert){

        const innerList4=[];

        for (var j in convert[i].submission){

            const subInnerList = [];
            
            for (var k in convert[i].submission[j].usersummision){

                subInnerList.push(convert[i].submission[j].usersummision[k]);  

            }
            
            innerList4.push(subInnerList);
        
        }

        resultantList5.push(innerList4);
    
    }
    
    res.send(resultantList5);
    
})

app.get('/comments/:id',(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    var resultantList5 = [];

    for (var i in convert){

        const innerList4=[];

        for (var j in convert[i].submission){

            const subInnerList = [];
            
            for (var k in convert[i].submission[j].usersummision){

                subInnerList.push(convert[i].submission[j].usersummision[k]);  

            }
            
            innerList4.push(subInnerList);
        
        }

        resultantList5.push(innerList4);
    
    }

    const idVar3 = req.params.id - 1;
    
    res.send(resultantList5[idVar3]);
    
})

app.get('/comments/:id/:courseid',(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    var resultantList6 = [];

    for (var i in convert){

        const innerList5=[];

        for (var j in convert[i].submission){

            const subInnerList2 = [];
            
            for (var k in convert[i].submission[j].usersummision){

                subInnerList2.push(convert[i].submission[j].usersummision[k]);  

            }
            
            innerList5.push(subInnerList2);
        
        }

        resultantList6.push(innerList5);
    
    }

    const idVar4 = req.params.id - 1;
    
    const courseIdVar2 = req.params.courseid - 1;
    
    res.send(resultantList6[idVar4][courseIdVar2]);
    
})

app.get('/courses/:id',(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    var resultantList3 = [];

    for (var i in convert){

        const innerList2=[];

        for (var j in convert[i].submission){

            delete convert[i].submission[j].usersummision;
  
            innerList2.push(convert[i].submission[j]);
        
        }

        resultantList3.push(innerList2);
    
    }
    
    const idVar2 = req.params.id - 1;
    
    res.send(resultantList3[idVar2]);

})

app.get('/courses/:id/:courseid',(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    var resultantList4 = [];

    for (var i in convert){

        const innerList3=[];

        for (var j in convert[i].submission){

            delete convert[i].submission[j].usersummision;
  
            innerList3.push(convert[i].submission[j]);
        
        }

        resultantList4.push(innerList3);
    
    }
    
    const idVar2 = req.params.id - 1;

    const courseIdVar = req.params.courseid - 1;
    
    res.send(resultantList4[idVar2][courseIdVar]);

})

app.get("/:id",(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    const resultantList = []; 

    for (let i=0;i<convert.length;i++){

        const innerDict = {};
            
        innerDict['id'] = convert[i]['id'];

        innerDict['name'] = convert[i]['name'];

        innerDict['description'] = convert[i]['description']

        resultantList.push(innerDict);

    }

    const idVar = req.params.id - 1;

    res.send(resultantList[idVar]);
    
})

app.post('/',(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    convert.push(req.body);

    const write = fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));

    res.send(convert);
})

app.post('/courses/:id',(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    const postIdVar = req.params.id;

    for (var i in convert){

        if (convert[i].id == postIdVar){

            console.log('sdhg');
            
            convert[i].submission.push(req.body);
        }

    }
    
    const write = fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));

    res.send(convert);
})

app.post('/:id/comments/:courseid',(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    const postIdVar2 = req.params.id - 1;

    const postCourseIdVar = req.params.courseid - 1;
            
    convert[postIdVar2].submission[postCourseIdVar].usersummision.push(req.body);
    
    const write = fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));

    res.send(convert);
})

app.put('/:id/:property',(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    const putIdVar = req.params.id - 1;

    const putProperty = req.params.property;

    if (putProperty != 'submission'){
        
        convert[putIdVar][putProperty ]= req.body;

        const write = fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));

        res.send(convert);

    }else {

        res.send('Invalid Property');
    }

})

app.put('/courses/:id/:courseid/:property',(req,res)=>{

const express = require('express');

const fs = require('fs');

const app = express();

app.use(express.json());

app.use(express.text());
    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    const putIdVar2 = req.params.id - 1;

    const putCourseIdVar = req.params.courseid - 1;

    const putProperty2 = req.params.property;

    if (putProperty2 != 'usersummision'){
        
        convert[putIdVar2].submission[putCourseIdVar][putProperty2]= req.body;

        const write = fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));

        res.send(convert);

    }else {

        res.send('Invalid Property');

    }

})

app.put('/comments/:id/:courseid/:username/:property',(req,res)=>{

    const read = fs.readFileSync('availableCourses.json');

    const convert = JSON.parse(read);

    const putIdVar3 = req.params.id - 1;

    const putCourseIdVar2 = req.params.courseid - 1;

    const putUserName = req.params.username;

    const putProperty3 = req.params.property;

    for (var i in convert[putIdVar3].submission[putCourseIdVar2].usersummision){

        if (convert[putIdVar3].submission[putCourseIdVar2].usersummision[i].username == putUserName){

            convert[putIdVar3].submission[putCourseIdVar2].usersummision[i][putProperty3] = req.body;

            const write = fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));

            res.send(convert);
       
        }
    }
})

const listener = app.listen(process.env.PORT, () => {

  console.log("Your app is listening on port " + listener.address().port);

});
