const a = async function(){
    console.log(1)
    new Promise((res) => res(console.log(2)))
        .then(()=>console.log(3))

    await  console.log(4)

    new Promise((res)=> res(console.log(5)))
        .then(()=> console.log(6))

}

    setTimeout(()=>console.log(8),0)

    a().then(()=> console.log(9))

    console.log(10)

// 1 2 10 3 4 5 6 9 8