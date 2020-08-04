var arrayList = [];
var curIndex = -1;
var storageKey = 'arrayList';

let json = localStorage.getItem(storageKey);
arrayList = JSON.parse(json);
displayAll();

function add(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var student = {"name": name, "age": age, "address": address};
    
    if(curIndex == -1){
        addTag(student);
    }else{
        arrayList[curIndex] = student;
        curIndex = -1;
        document.getElementById('btn-save').innerHTML = "Submit";
        displayAll();
    }

    //save to localStorage
    let json = JSON.stringify(arrayList);
    console.log(json);
    localStorage.setItem(storageKey, json);
}

function displayAll(){
    var dataList = document.getElementById('dataList');
    dataList.innerHTML = "";
    for(var i=0; i<arrayList.length; i++){
        var student = arrayList[i];
        dataList.innerHTML += "<tr><td>"+(i + 1)+"</td><td>"+student.name+"</td><td>"+student.age+"</td><td>"+student.address+
                        "</td><td><button onclick='editStudent("+i+")' class='btn btn-outline-primary mr-3'>Edit</button><button onclick='deleteStudent("+i+")' class='btn btn-outline-danger'>Delete</button></td></tr>";
    }
}

function addTag(student){
    arrayList.push(student);
    console.log(arrayList.length);
    var dataList = document.getElementById('dataList');
    dataList.innerHTML += "<tr><td>"+arrayList.length+"</td><td>"+student.name+"</td><td>"+student.age+"</td><td>"+student.address+
                        "</td><td><button onclick='editStudent("+(arrayList.length - 1)+")' class='btn btn-outline-primary mr-3'>Edit</button><button onclick='deleteStudent("+(arrayList.length - 1)+")' class='btn btn-outline-danger'>Delete</button></td></tr>";
}

function editStudent(index){
    curIndex = index;
    var student = arrayList[index];
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('address').value = student.address;
    document.getElementById('btn-save').innerHTML = "Save";
}

function deleteStudent(index){
    arrayList.splice(index, 1);
    displayAll();

    //save to localStorage
    let json = JSON.stringify(arrayList);
    console.log(json);
    localStorage.setItem(storageKey, json);
}