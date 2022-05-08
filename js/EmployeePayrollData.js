class EmployeePayRollData {

    get name() { return this._name; }
    set name(name) {
        let regexName = RegExp('^[A-Z][a-z]{2,}$');
        if (regexName.test(name))
            this._name = name;
        else
            throw 'Name is Invalid!';
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) { this._profilePic = profilePic; }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) { this._department = department; }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        if (startDate <= new Date())
            this._startDate = startDate;
        else
            throw 'Start Date is Invalid!';
    }

    get notes() { return this._notes; }
    set notes(notes) {
        this._notes = notes;
    }

    toString() {
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric'
        };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-IN", options);
        return "name = " + this.name + ", profilePic = " + this.profilePic + ", salary = " + this.salary + ", gender = " + this.gender + ", department = " + this.department + ", startDate = " + empDate + ", notes= " + this.notes;
    }
}