function Staff(username, name, email, pass, days, salary, pos, hour) {
  this.userName = username;
  this.fullName = name;
  this.email = email;
  this.passWord = pass;
  this.StartWorkingDay = days;
  this.basicSalary = salary;
  this.position = pos;
  this.inOfficeHour = hour;
  this.totalIncome = function () {
    if (this.position === "Sếp") {
      return +this.basicSalary * 3;
    }
    if (this.position === "Trưởng phòng") {
      return +this.basicSalary * 2;
    }
    if (this.position === "Nhân viên") {
      return +this.basicSalary;
    }
  };
  this.type = function () {
    if (this.inOfficeHour >= 192) return "Nhân viên xuất sắc";
    if (this.inOfficeHour < 192 && this.inOfficeHour >= 176)
      return "Nhân viên giỏi";
    if (this.inOfficeHour < 176 && this.inOfficeHour >= 160)
      return "Nhân viên khá";
    if (this.inOfficeHour < 160) return "Nhân trung bình";
  };
}
