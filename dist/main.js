let personData = [];
let jsDOM = {
    data: {
        fname: document.getElementById('firstName'),
        lname: document.getElementById('lastName'),
        email: document.getElementById('email'),
        phone: document.getElementById('phoneNumber'),
        city: document.getElementById('city')
    },
    btn: {
        addBtn: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')
};
let jsFunc = {
    showData: () => {
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';
        let node = document.createElement("div");
        let nodeHeader = document.createElement("h3");
        let nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);
        let fullname, email, phone, city;
        personData.forEach(x => {
            fullname = `${x.firstname} ${x.lastname}`, email = x.email, phone = x.phone, city = x.city;
            var br = document.createElement("br");
            let personData = document.createElement('p');
            let personDataText = document.createTextNode(`Full Name: ${fullname}`);
            personData.appendChild(personDataText);
            node.appendChild(personData);
            personData = document.createElement('p');
            personDataText = document.createTextNode(`Email: ${email}`);
            personData.appendChild(personDataText);
            node.appendChild(personData);
            personData = document.createElement('p');
            personDataText = document.createTextNode(`Phone Number: ${phone}`);
            personData.appendChild(personDataText);
            node.appendChild(personData);
            personData = document.createElement('p');
            personDataText = document.createTextNode(`City: ${city}`);
            personData.appendChild(personDataText);
            node.appendChild(personData);
            node.appendChild(br);
        });
        parentDiv.appendChild(node);
    },
    clearFields: () => {
        jsDOM.data.fname.value = "";
        jsDOM.data.lname.value = "";
        jsDOM.data.email.value = "";
        jsDOM.data.phone.value = "";
        jsDOM.data.city.value = "";
    },
    addData: () => {
        let firstNameIV = document.getElementById('firstName').value;
        let lastNameIV = document.getElementById('lastName').value;
        let emailIV = document.getElementById('email').value;
        let phoneIV = document.getElementById('phoneNumber').value;
        let cityIV = document.getElementById('city').value;
        if (firstNameIV === "" || lastNameIV === "" || emailIV === "" || phoneIV === "" || cityIV === "") {
            let arrayDatas = [];
            Object.values(jsDOM.data).forEach(x => {
                if (x.value == "") {
                    arrayDatas.push(`Fill up ${x.title}`);
                }
            });
            alert(arrayDatas.join(', \n'));
        }
        else {
            personData.push({ firstname: jsDOM.data.fname.value, lastname: jsDOM.data.lname.value, email: jsDOM.data.email.value, phone: jsDOM.data.phone.value, city: jsDOM.data.city.value });
            jsFunc.clearFields();
        }
    }
};
jsDOM.btn.addBtn.addEventListener('click', jsFunc.addData);
jsDOM.btn.showData.addEventListener('click', jsFunc.showData);