// read data from load page
// read data from load page
window.onload = function () {
  getDataFromLocalStorage();
  console.log("2");
};
//------------VALIDATE FUNCTION------------//
//check required

function required(value, spanId) {
  //length can check length of string
  if (value.length === 0) {
    document.getElementById(spanId).innerHTML = "*Trường này bắt buộc nhập";
    document.getElementById(spanId).classList.remove("sp-thongbao");
    document.getElementById(spanId).classList.add("text-danger");
    return false;
  }
  document.getElementById(spanId).classList.add("sp-thongbao");
  document.getElementById(spanId).classList.remove("text-danger");
  return true;
}

//check minLength
//check maxLength
function minMaxLength(value, spanId, min, max) {
  if (value.length < min || value.length > max) {
    document.getElementById(
      spanId
    ).innerHTML = `*Độ dài phải từ ${min} đến ${max} kí tự`;
    document.getElementById(spanId).classList.remove("sp-thongbao");
    document.getElementById(spanId).classList.add("text-danger");
    return false;
  }
  document.getElementById(spanId).innerHTML = "";
  document.getElementById(spanId).classList.add("sp-thongbao");
  document.getElementById(spanId).classList.remove("text-danger");
  return true;
}

//check pattern: "biểu thức chính quy"
function checkMail(value, spanId) {
  var pattern = /^[A-z0-9.]{5,40}@gmail.com$/g;
  if (pattern.test(value)) {
    document.getElementById(spanId).classList.add("sp-thongbao");
    document.getElementById(spanId).classList.remove("text-danger");
    document.getElementById(spanId).innerHTML = "";
    return true;
  }
  document.getElementById(
    spanId
  ).innerHTML = `*Chỉ nhập ký tự từ A-z và số 0-9, dấu . và có đuôi @gmail.com, không nhập chữ số và có dấu`;
  document.getElementById(spanId).classList.remove("sp-thongbao");
  document.getElementById(spanId).classList.add("text-danger");
  return false;
}
//check pattern: "biểu thức chính quy"
function checkName(value, spanId) {
  var pattern = /^[A-z ]+$/g;
  if (pattern.test(value)) {
    document.getElementById(spanId).innerHTML = "";
    document.getElementById(spanId).classList.add("sp-thongbao");
    document.getElementById(spanId).classList.remove("text-danger");
    return true;
  }
  document.getElementById(
    spanId
  ).innerHTML = `*Chỉ nhập ký tự từ A đến z, không nhập chữ số và có dấu`;
  document.getElementById(spanId).classList.remove("sp-thongbao");
  document.getElementById(spanId).classList.add("text-danger");
  return false;
}
function checkDay(value, spanId) {
  var pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (pattern.test(value)) {
    document.getElementById(spanId).innerHTML = "";
    document.getElementById(spanId).classList.add("sp-thongbao");
    document.getElementById(spanId).classList.remove("text-danger");
    return true;
  }
  document.getElementById(
    spanId
  ).innerHTML = `*Chỉ nhập đúng định dạng mm/dd/YYYY`;
  document.getElementById(spanId).classList.remove("sp-thongbao");
  document.getElementById(spanId).classList.add("text-danger");
  return false;
}

function checkPass(value, spanId) {
  var pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/g;
  if (pattern.test(value)) {
    document.getElementById(spanId).innerHTML = "";
    document.getElementById(spanId).classList.add("sp-thongbao");
    document.getElementById(spanId).classList.remove("text-danger");
    return true;
  }
  document.getElementById(
    spanId
  ).innerHTML = `*Nhập khẩu phải có một ký tự viết hoa, một viết thường, môt ký tự đặc biệt, một số và dài từ 6-10 ký số `;
  document.getElementById(spanId).classList.remove("sp-thongbao");
  document.getElementById(spanId).classList.add("text-danger");
  return false;
}

function checkSalary(value, spanId) {
  var valueNum = parseFloat(value);
  console.log(valueNum, typeof valueNum);
  if (valueNum >= 1000000 && valueNum <= 20000000) {
    document.getElementById(spanId).innerHTML = "";
    document.getElementById(spanId).classList.add("sp-thongbao");
    document.getElementById(spanId).classList.remove("text-danger");
    return true;
  }
  document.getElementById(
    spanId
  ).innerHTML = `*Lương có giá trị từ 1.000.000 đến 20.000.000 vnd`;
  document.getElementById(spanId).classList.remove("sp-thongbao");
  document.getElementById(spanId).classList.add("text-danger");
  return false;
}

function checkTime(value, spanId) {
  var valueNum = parseFloat(value);
  console.log(valueNum, typeof valueNum);
  if (valueNum >= 80 && valueNum <= 200) {
    document.getElementById(spanId).innerHTML = "";
    document.getElementById(spanId).classList.add("sp-thongbao");
    document.getElementById(spanId).classList.remove("text-danger");
    return true;
  }
  document.getElementById(
    spanId
  ).innerHTML = `*Giờ làm việc có giá trị từ 80 đến 200`;
  document.getElementById(spanId).classList.remove("sp-thongbao");
  document.getElementById(spanId).classList.add("text-danger");
  return false;
}

function ValidateForm() {
  var staffUserName = document.getElementById("tknv").value;
  var staffFullName = document.getElementById("name").value;
  var staffEmail = document.getElementById("email").value;
  var staffPassWord = document.getElementById("password").value;
  var staffStartDay = document.getElementById("datepicker").value;
  var staffBasicSalary = document.getElementById("luongCB").value;
  var staffPosition = document.getElementById("chucvu").value;
  var staffInOfficeHour = document.getElementById("gioLam").value;

  var isValid = true;
  isValid &=
    required(staffUserName, "tbTKNV") &&
    minMaxLength(staffUserName, "tbTKNV", 4, 6);
  isValid &=
    required(staffFullName, "tbTen") && checkName(staffFullName, "tbTen");
  isValid &=
    required(staffEmail, "tbEmail") && checkMail(staffEmail, "tbEmail");
  isValid &=
    required(staffStartDay, "tbNgay") && checkDay(staffStartDay, "tbNgay");
  isValid &=
    required(staffPassWord, "tbMatKhau") &&
    checkPass(staffPassWord, "tbMatKhau");
  isValid &=
    required(staffBasicSalary, "tbLuongCB") &&
    checkSalary(staffBasicSalary, "tbLuongCB");
  isValid &= required(staffPosition, "tbChucVu");
  isValid &=
    required(staffInOfficeHour, "tbGiolam") &&
    checkTime(staffInOfficeHour, "tbGiolam");
  return isValid;
}

var staffList = [];

function createStaff() {
  if (!ValidateForm()) {
    alert("Nhập sai, nhập lại theo yêu cầu");
    return;
  }
  //1. get Input:
  var staffUserName = document.getElementById("tknv").value;
  var staffFullName = document.getElementById("name").value;
  var staffEmail = document.getElementById("email").value;
  var staffPassWord = document.getElementById("password").value;
  var staffStartDay = document.getElementById("datepicker").value;
  var staffBasicSalary = +document.getElementById("luongCB").value;
  var staffPosition = document.getElementById("chucvu").value;
  var staffInOfficeHour = +document.getElementById("gioLam").value;
  // //1.1 Check Input:
  // console.log(staffUserName, typeof staffUserName);
  // console.log(staffFullName, typeof staffFullName);
  // console.log(staffEmail, typeof staffEmail);
  // console.log(staffPassWord, typeof staffPassWord);
  // console.log(staffStartDay, typeof staffStartDay);
  // console.log(staffBasicSalary, typeof staffBasicSalary);
  // console.log(staffPosition, typeof staffPosition);
  // console.log(staffInOfficeHour, typeof staffInOfficeHour);

  //check staffUserName is coincided with old staffList[i].userName
  for (var i = 0; i < staffList.length; i++) {
    if (staffList[i].userName === staffUserName) {
      alert("mã nhân viên trùng lặp, nhập lại");
      return;
    }
  }

  //2. create object staff
  var staff = new Staff(
    staffUserName,
    staffFullName,
    staffEmail,
    staffPassWord,
    staffStartDay,
    staffBasicSalary,
    staffPosition,
    staffInOfficeHour
  );

  //Add new student into list(list is array)
  staffList.push(staff);
  console.log(staffList);
  renderStaff();
  saveDataToLocalStorage();
}

function renderStaff(data) {
  if (!data) {
    data = staffList;
  }
  var html = "";
  for (var i = 0; i < data.length; i++) {
    html += `
    <tr>
    <td>${data[i].userName}</td>
    <td>${data[i].fullName}</td>
    <td>${data[i].email}</td>
    <td>${data[i].StartWorkingDay}</td>
    <td>${data[i].position}</td>
    <td>${data[i].totalIncome()}</td>
    <td>${data[i].type()}</td>
    <td>
    <button onclick="deleteStaff('${
      data[i].userName
    }')" class="btn btn-danger" >Xóa</button>

      <button onclick="getStaffDetail('${
        data[i].userName
      }')" class ="btn btn-info" data-toggle="modal"
      data-target="#myModal">Sửa</button>
    </td>
    </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = html;
}

function saveDataToLocalStorage() {
  // localStorage only storage data in string
  // object must be convert to JSON
  localStorage.setItem("myStaffList", JSON.stringify(staffList));
}

function mapData(datafromLocal) {
  var result = [];
  for (var i = 0; i < datafromLocal.length; i++) {
    var oldStaff = datafromLocal[i];
    //copy data from localStorage and newStudent will have a method is countGPA in result
    var newStaff = new Staff(
      oldStaff.userName,
      oldStaff.fullName,
      oldStaff.email,
      oldStaff.passWord,
      oldStaff.StartWorkingDay,
      oldStaff.basicSalary,
      oldStaff.position,
      oldStaff.inOfficeHour
    );
    result.push(newStaff);
  }

  return result;
}

function getDataFromLocalStorage() {
  var jsondata = localStorage.getItem("myStaffList");
  console.log(jsondata);
  if (!jsondata) {
    // !jsondata = !NULL = !false = true
    return;
  }
  //convert string json to array
  var staffListLocal = JSON.parse(jsondata);
  //fail: the problem when read database will loose all method (function calcGPA())
  staffList = mapData(staffListLocal);
  console.log(staffList);
  renderStaff();
}

function findById(staffUserName) {
  for (var i = 0; i < staffList.length; i++) {
    if (staffList[i].userName === staffUserName) {
      return i;
    }
  }
  return -1;
}

function deleteStaff(staffUserName) {
  var index = findById(staffUserName);
  if (index === -1) {
    alert("Not found: this userName Staff does not Exist");
    return;
  }
  staffList.splice(index, 1);
  renderStaff();
  saveDataToLocalStorage();
}

function addStaffDetail() {
  document.getElementById("tknv").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("datepicker").value = "";
  document.getElementById("luongCB").value = "";
  document.getElementById("chucvu").value = "";
  document.getElementById("gioLam").value = "";

  document.getElementById("tknv").disabled = false;

  document.getElementById("btnCapNhat").style.display = "none";
  document.getElementById("btnThemNV").style.display = "inline";
}

function getStaffDetail(staffUserName) {
  var index = findById(staffUserName);
  if (index === -1) {
    alert("Not found: this userName Staff does not Exist");
    return;
  }
  var staff = staffList[index];
  document.getElementById("tknv").value = staff.userName;
  document.getElementById("name").value = staff.fullName;
  document.getElementById("email").value = staff.email;
  document.getElementById("password").value = staff.passWord;
  document.getElementById("datepicker").value = staff.StartWorkingDay;
  document.getElementById("luongCB").value = staff.basicSalary;
  document.getElementById("chucvu").value = staff.position;
  document.getElementById("gioLam").value = staff.inOfficeHour;

  document.getElementById("tknv").disabled = true;

  document.getElementById("btnCapNhat").style.display = "inline";
  document.getElementById("btnThemNV").style.display = "none";
}

//Update2: change Info on form
function updateStaff() {
  if (!ValidateForm()) {
    alert("Nhập sai, nhập lại theo yêu cầu");
    return;
  }
  //1. get input
  var staffUserName = document.getElementById("tknv").value;
  var staffFullName = document.getElementById("name").value;
  var staffEmail = document.getElementById("email").value;
  var staffPassWord = document.getElementById("password").value;
  var staffStartDay = document.getElementById("datepicker").value;
  var staffBasicSalary = +document.getElementById("luongCB").value;
  var staffPosition = document.getElementById("chucvu").value;
  var staffInOfficeHour = +document.getElementById("gioLam").value;

  var index = findById(staffUserName);
  if (index === -1) {
    alert("Not found: this userName Staff does not Exist");
    return;
  }

  var staff = staffList[index];
  staff.userName = staffUserName;
  staff.fullName = staffFullName;
  staff.email = staffEmail;
  staff.passWord = staffPassWord;
  staff.StartWorkingDay = staffStartDay;
  staff.basicSalary = staffBasicSalary;
  staff.position = staffPosition;
  staff.inOfficeHour = staffInOfficeHour;

  renderStaff();

  saveDataToLocalStorage();
}
