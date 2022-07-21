// Question Using Async/Await and Generators, 
//create separate functions and achieve the samefunctionality
//Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3()
const doTask1 = async ()=>{
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('first async await call'))
        },1000)
    })
}
const doTask2 = async ()=>{
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('second async await call'))
        },1000)
    })
}
const doTask3 = async ()=>{
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('third async await call'))
        },1000)
    })
}

//all async await together 

async function allAsync(){
    try{
        await doTask1();
        console.log('first call done');
        await doTask2();
        console.log('second call done');
        await doTask3();
        console.log('third call done');
    } catch (err){
        console.log(`Error ${err} found`);
    } finally{
        console.log('all three call complete ');
    }
}

// generator function 

function* generatorAsync(){
    yield doTask1().then().catch((err)=>console.log(`Error ${err} found`))
    .finally(()=> console.log('first call in generator done'));
    yield doTask2().then().catch((err)=>console.log(`Error ${err} found`))
    .finally(()=> console.log('second call in generator done'));
    yield doTask3().then().catch((err)=>console.log(`Error ${err} found`))
    .finally(()=> console.log('thrid call in generator done'));
    return { done : true}
}

const genAsync = generatorAsync();
genAsync.next();
genAsync.next();
genAsync.next();
setTimeout(()=> {
    console.log('Finish all three call in generator function')
},3000)