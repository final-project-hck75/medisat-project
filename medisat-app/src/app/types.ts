export type DoctorType = {
    _id:string;
    employeeId: string;
    name: string;
    password: string;
    image: string;
    phoneNumber: string;
    polyclinic: string;
    schedule: string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

export type RecordType = {
    _id:string
    name: string;
    status: string;
    bookDate: string;
    symptom: string;
    disease: string;
    recipe: string;
    checkupDate: string;
    patientId: string;
    doctorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: string | undefined;
}