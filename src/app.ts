class Department {
  //   private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`department:  ${this.id} ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "it");
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("666", ["jodelajo"]);
const accounting = new AccountingDepartment("83", []);

accounting.addReport("something went wrong");
accounting.printReports();

it.addEmployee("max");
it.addEmployee("jo");

it.describe();
it.printEmployeesInformation();

console.log(it);
console.log(accounting);
// const itCopy = { name: "jodelsjoa", describe: it.describe };
// itCopy.describe();
