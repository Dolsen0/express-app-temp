export function getDogs(req, res){
    res.send([
        {name: "Ryder", age: 4, breed: "Dalmation", gender: "MN"},
        {name: "Kevin", age: 3, breed: "Beagle", gender: "MN"}
    ])
}

export function testApi(req,res){
    res.send({success: true, message: "Api is working"})
}

