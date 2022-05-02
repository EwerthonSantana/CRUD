export class EmployeesModel {
    constructor(
        public id: string,
        public name: string,
        public cpf: number,
        public fone: number,
        public email: string,
        public emailConfirmation: string,
        public cep: number,
        public houseNumber: number,
        public complement: string,
        public street: string,
        public district: string,
        public city: string,
        public state: string,
        public office: string,
        public technology: string,
        public frameworks: string,
        public newsletter: string
    ) { }
}