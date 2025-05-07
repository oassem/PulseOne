const db = require('../models');
const Users = db.users;

const Appointments = db.appointments;

const Departments = db.departments;

const Holidays = db.holidays;

const ImagingInvestigations = db.imaging_investigations;

const ImagingOrderItems = db.imaging_order_items;

const ImagingOrders = db.imaging_orders;

const Insurances = db.insurances;

const InvoiceItems = db.invoice_items;

const Invoices = db.invoices;

const LabOrderItems = db.lab_order_items;

const LabOrders = db.lab_orders;

const LabTests = db.lab_tests;

const Medications = db.medications;

const PatientDocuments = db.patient_documents;

const Patients = db.patients;

const PharmacyOrderItems = db.pharmacy_order_items;

const PharmacyOrders = db.pharmacy_orders;

const SickLeaves = db.sick_leaves;

const Visits = db.visits;

const Organizations = db.organizations;

const AppointmentsData = [
  {
    appointment_date: new Date('2023-10-01'),

    start_time: '09:00',

    end_time: '09:30',

    type: 'New',

    status: 'Rescheduled',

    reminder_sent: true,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    appointment_date: new Date('2023-10-02'),

    start_time: '10:30',

    end_time: '11:00',

    type: 'FollowUp',

    status: 'Scheduled',

    reminder_sent: true,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    appointment_date: new Date('2023-10-03'),

    start_time: '11:00',

    end_time: '11:30',

    type: 'FollowUp',

    status: 'Rescheduled',

    reminder_sent: false,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    appointment_date: new Date('2023-10-04'),

    start_time: '14:00',

    end_time: '14:30',

    type: 'FollowUp',

    status: 'Completed',

    reminder_sent: false,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const DepartmentsData = [
  {
    name: 'Cardiology',

    description: 'Heart and vascular care',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Radiology',

    description: 'Imaging and diagnostics',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Pediatrics',

    description: 'Child healthcare services',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Orthopedics',

    description: 'Bone and joint care',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const HolidaysData = [
  {
    start_date: new Date('2023-12-25'),

    end_date: new Date('2023-12-26'),

    notes: 'Christmas Holiday',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_date: new Date('2023-11-01'),

    end_date: new Date('2023-11-02'),

    notes: 'National Day',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_date: new Date('2023-10-15'),

    end_date: new Date('2023-10-16'),

    notes: 'Eid Al-Fitr',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_date: new Date('2023-09-10'),

    end_date: new Date('2023-09-11'),

    notes: 'Eid Al-Adha',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ImagingInvestigationsData = [
  {
    name: 'X-Ray',

    description: 'Imaging test using X-rays',

    price: 100,

    // type code here for "relation_one" field
  },

  {
    name: 'MRI',

    description: 'Magnetic resonance imaging',

    price: 300,

    // type code here for "relation_one" field
  },

  {
    name: 'CT Scan',

    description: 'Computed tomography scan',

    price: 250,

    // type code here for "relation_one" field
  },

  {
    name: 'Ultrasound',

    description: 'Imaging using sound waves',

    price: 150,

    // type code here for "relation_one" field
  },
];

const ImagingOrderItemsData = [
  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },
];

const ImagingOrdersData = [
  {
    total_amount: 200,

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 250,

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 220,

    status: 'Pending',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 270,

    status: 'Pending',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const InsurancesData = [
  {
    provider_name: 'Tawuniya',

    policy_number: 'T123456789',

    coverage_start: new Date('2023-01-01'),

    coverage_end: new Date('2023-12-31'),

    plan_details: 'Comprehensive Plan',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    provider_name: 'Bupa Arabia',

    policy_number: 'B987654321',

    coverage_start: new Date('2023-02-01'),

    coverage_end: new Date('2023-11-30'),

    plan_details: 'Basic Plan',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    provider_name: 'MedGulf',

    policy_number: 'M456789123',

    coverage_start: new Date('2023-03-01'),

    coverage_end: new Date('2023-10-31'),

    plan_details: 'Premium Plan',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    provider_name: 'AXA Cooperative',

    policy_number: 'A654321987',

    coverage_start: new Date('2023-04-01'),

    coverage_end: new Date('2023-09-30'),

    plan_details: 'Standard Plan',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const InvoiceItemsData = [
  {
    description: 'Consultation Fee',

    amount: 200,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Lab Test',

    amount: 100,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Imaging Investigation',

    amount: 150,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Medication',

    amount: 250,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const InvoicesData = [
  {
    total_amount: 500,

    vat_amount: 25,

    is_paid: false,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 300,

    vat_amount: 15,

    is_paid: false,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 450,

    vat_amount: 22.5,

    is_paid: true,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 600,

    vat_amount: 30,

    is_paid: false,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const LabOrderItemsData = [
  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },
];

const LabOrdersData = [
  {
    total_amount: 120,

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 150,

    status: 'Pending',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 130,

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 160,

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const LabTestsData = [
  {
    name: 'Complete Blood Count',

    description: 'Measures different components of blood',

    price: 50,

    // type code here for "relation_one" field
  },

  {
    name: 'Lipid Profile',

    description: 'Measures cholesterol and triglycerides',

    price: 70,

    // type code here for "relation_one" field
  },

  {
    name: 'Liver Function Test',

    description: 'Assesses liver health',

    price: 60,

    // type code here for "relation_one" field
  },

  {
    name: 'Thyroid Function Test',

    description: 'Evaluates thyroid gland function',

    price: 80,

    // type code here for "relation_one" field
  },
];

const MedicationsData = [
  {
    name: 'Paracetamol',

    description: 'Pain reliever and fever reducer',

    price: 10,

    // type code here for "relation_one" field
  },

  {
    name: 'Amoxicillin',

    description: 'Antibiotic for bacterial infections',

    price: 20,

    // type code here for "relation_one" field
  },

  {
    name: 'Ibuprofen',

    description: 'Nonsteroidal anti-inflammatory drug',

    price: 15,

    // type code here for "relation_one" field
  },

  {
    name: 'Cetirizine',

    description: 'Antihistamine for allergy relief',

    price: 12,

    // type code here for "relation_one" field
  },
];

const PatientDocumentsData = [
  {
    document_type: 'National ID',

    document_url: 'https://example.com/documents/national_id_ali.pdf',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    document_type: 'Insurance Card',

    document_url: 'https://example.com/documents/insurance_card_noura.pdf',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    document_type: 'Passport',

    document_url: 'https://example.com/documents/passport_mohammed.pdf',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    document_type: 'Iqama',

    document_url: 'https://example.com/documents/iqama_aisha.pdf',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const PatientsData = [
  {
    full_name_en: 'Ali Al-Zahrani',

    full_name_ar: 'علي الزهراني',

    date_of_birth: new Date('1985-05-15'),

    gender: 'Male',

    nationality: 'Saudi',

    identifier_type: 'NationalID',

    identifier: '1012345678',

    address: 'Riyadh, Saudi Arabia',

    emergency_contact_name: 'Fatima Al-Zahrani',

    emergency_contact_phone: '0559876543',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    full_name_en: 'Noura Al-Otaibi',

    full_name_ar: 'نورة العتيبي',

    date_of_birth: new Date('1990-08-22'),

    gender: 'Male',

    nationality: 'Saudi',

    identifier_type: 'Passport',

    identifier: '2012345678',

    address: 'Jeddah, Saudi Arabia',

    emergency_contact_name: 'Hassan Al-Otaibi',

    emergency_contact_phone: '0568765432',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    full_name_en: 'Mohammed Al-Qahtani',

    full_name_ar: 'محمد القحطاني',

    date_of_birth: new Date('1978-11-30'),

    gender: 'Female',

    nationality: 'Saudi',

    identifier_type: 'Iqama',

    identifier: 'G12345678',

    address: 'Dammam, Saudi Arabia',

    emergency_contact_name: 'Aisha Al-Qahtani',

    emergency_contact_phone: '0577654321',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    full_name_en: 'Aisha Al-Shehri',

    full_name_ar: 'عائشة الشهري',

    date_of_birth: new Date('1995-02-10'),

    gender: 'Female',

    nationality: 'Saudi',

    identifier_type: 'Passport',

    identifier: '3012345678',

    address: 'Jubail, Saudi Arabia',

    emergency_contact_name: 'Omar Al-Shehri',

    emergency_contact_phone: '0586543210',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const PharmacyOrderItemsData = [
  {
    quantity: 2,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    quantity: 1,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    quantity: 3,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    quantity: 1,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const PharmacyOrdersData = [
  {
    total_amount: 30,

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 50,

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 40,

    status: 'Pending',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    total_amount: 60,

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const SickLeavesData = [
  {
    start_date: new Date('2023-10-01'),

    end_date: new Date('2023-10-07'),

    diagnosis: 'Angina',

    instructions: 'Rest and avoid stress',

    document_url: 'https://example.com/documents/sick_leave_ali.pdf',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_date: new Date('2023-10-02'),

    end_date: new Date('2023-10-05'),

    diagnosis: 'Bronchitis',

    instructions: 'Take prescribed antibiotics',

    document_url: 'https://example.com/documents/sick_leave_noura.pdf',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_date: new Date('2023-10-03'),

    end_date: new Date('2023-10-06'),

    diagnosis: 'Migraine',

    instructions: 'Avoid triggers and rest',

    document_url: 'https://example.com/documents/sick_leave_mohammed.pdf',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_date: new Date('2023-10-04'),

    end_date: new Date('2023-10-10'),

    diagnosis: 'Arthritis',

    instructions: 'Physiotherapy and pain management',

    document_url: 'https://example.com/documents/sick_leave_aisha.pdf',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const VisitsData = [
  {
    visit_datetime: new Date('2023-10-01T09:00:00'),

    symptoms: 'Chest pain and shortness of breath',

    diagnosis: 'Angina',

    notes: 'Patient advised to reduce stress and follow up in two weeks',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    visit_datetime: new Date('2023-10-02T10:30:00'),

    symptoms: 'Persistent cough and fever',

    diagnosis: 'Bronchitis',

    notes: 'Prescribed antibiotics and rest',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    visit_datetime: new Date('2023-10-03T11:00:00'),

    symptoms: 'Severe headache and nausea',

    diagnosis: 'Migraine',

    notes: 'Recommended lifestyle changes and prescribed medication',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    visit_datetime: new Date('2023-10-04T14:00:00'),

    symptoms: 'Joint pain and swelling',

    diagnosis: 'Arthritis',

    notes: 'Advised physiotherapy and pain management',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'Al Noor Hospital',
  },

  {
    name: 'Kingdom Health Clinic',
  },

  {
    name: 'Riyadh Medical Center',
  },

  {
    name: 'Dammam Health Services',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }
}

async function associateAppointmentWithPatient() {
  const relatedPatient0 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setPatient) {
    await Appointment0.setPatient(relatedPatient0);
  }

  const relatedPatient1 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setPatient) {
    await Appointment1.setPatient(relatedPatient1);
  }

  const relatedPatient2 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setPatient) {
    await Appointment2.setPatient(relatedPatient2);
  }

  const relatedPatient3 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Appointment3 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Appointment3?.setPatient) {
    await Appointment3.setPatient(relatedPatient3);
  }
}

async function associateAppointmentWithDoctor() {
  const relatedDoctor0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setDoctor) {
    await Appointment0.setDoctor(relatedDoctor0);
  }

  const relatedDoctor1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setDoctor) {
    await Appointment1.setDoctor(relatedDoctor1);
  }

  const relatedDoctor2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setDoctor) {
    await Appointment2.setDoctor(relatedDoctor2);
  }

  const relatedDoctor3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment3 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Appointment3?.setDoctor) {
    await Appointment3.setDoctor(relatedDoctor3);
  }
}

async function associateAppointmentWithDepartment() {
  const relatedDepartment0 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setDepartment) {
    await Appointment0.setDepartment(relatedDepartment0);
  }

  const relatedDepartment1 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setDepartment) {
    await Appointment1.setDepartment(relatedDepartment1);
  }

  const relatedDepartment2 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setDepartment) {
    await Appointment2.setDepartment(relatedDepartment2);
  }

  const relatedDepartment3 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Appointment3 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Appointment3?.setDepartment) {
    await Appointment3.setDepartment(relatedDepartment3);
  }
}

async function associateAppointmentWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setOrganization) {
    await Appointment0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setOrganization) {
    await Appointment1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setOrganization) {
    await Appointment2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment3 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Appointment3?.setOrganization) {
    await Appointment3.setOrganization(relatedOrganization3);
  }
}

async function associateAppointmentWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setOrganization) {
    await Appointment0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setOrganization) {
    await Appointment1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setOrganization) {
    await Appointment2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment3 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Appointment3?.setOrganization) {
    await Appointment3.setOrganization(relatedOrganization3);
  }
}

async function associateDepartmentWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Department0 = await Departments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Department0?.setOrganization) {
    await Department0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Department1 = await Departments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Department1?.setOrganization) {
    await Department1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Department2 = await Departments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Department2?.setOrganization) {
    await Department2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Department3 = await Departments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Department3?.setOrganization) {
    await Department3.setOrganization(relatedOrganization3);
  }
}

async function associateDepartmentWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Department0 = await Departments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Department0?.setOrganization) {
    await Department0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Department1 = await Departments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Department1?.setOrganization) {
    await Department1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Department2 = await Departments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Department2?.setOrganization) {
    await Department2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Department3 = await Departments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Department3?.setOrganization) {
    await Department3.setOrganization(relatedOrganization3);
  }
}

async function associateHolidayWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Holiday0 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Holiday0?.setOrganization) {
    await Holiday0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Holiday1 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Holiday1?.setOrganization) {
    await Holiday1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Holiday2 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Holiday2?.setOrganization) {
    await Holiday2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Holiday3 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Holiday3?.setOrganization) {
    await Holiday3.setOrganization(relatedOrganization3);
  }
}

async function associateHolidayWithDoctor() {
  const relatedDoctor0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Holiday0 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Holiday0?.setDoctor) {
    await Holiday0.setDoctor(relatedDoctor0);
  }

  const relatedDoctor1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Holiday1 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Holiday1?.setDoctor) {
    await Holiday1.setDoctor(relatedDoctor1);
  }

  const relatedDoctor2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Holiday2 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Holiday2?.setDoctor) {
    await Holiday2.setDoctor(relatedDoctor2);
  }

  const relatedDoctor3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Holiday3 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Holiday3?.setDoctor) {
    await Holiday3.setDoctor(relatedDoctor3);
  }
}

async function associateHolidayWithDepartment() {
  const relatedDepartment0 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Holiday0 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Holiday0?.setDepartment) {
    await Holiday0.setDepartment(relatedDepartment0);
  }

  const relatedDepartment1 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Holiday1 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Holiday1?.setDepartment) {
    await Holiday1.setDepartment(relatedDepartment1);
  }

  const relatedDepartment2 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Holiday2 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Holiday2?.setDepartment) {
    await Holiday2.setDepartment(relatedDepartment2);
  }

  const relatedDepartment3 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Holiday3 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Holiday3?.setDepartment) {
    await Holiday3.setDepartment(relatedDepartment3);
  }
}

async function associateHolidayWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Holiday0 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Holiday0?.setOrganization) {
    await Holiday0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Holiday1 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Holiday1?.setOrganization) {
    await Holiday1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Holiday2 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Holiday2?.setOrganization) {
    await Holiday2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Holiday3 = await Holidays.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Holiday3?.setOrganization) {
    await Holiday3.setOrganization(relatedOrganization3);
  }
}

async function associateImagingInvestigationWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingInvestigation0 = await ImagingInvestigations.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (ImagingInvestigation0?.setOrganization) {
    await ImagingInvestigation0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingInvestigation1 = await ImagingInvestigations.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (ImagingInvestigation1?.setOrganization) {
    await ImagingInvestigation1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingInvestigation2 = await ImagingInvestigations.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (ImagingInvestigation2?.setOrganization) {
    await ImagingInvestigation2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingInvestigation3 = await ImagingInvestigations.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (ImagingInvestigation3?.setOrganization) {
    await ImagingInvestigation3.setOrganization(relatedOrganization3);
  }
}

async function associateImagingOrderItemWithImaging_order() {
  const relatedImaging_order0 = await ImagingOrders.findOne({
    offset: Math.floor(Math.random() * (await ImagingOrders.count())),
  });
  const ImagingOrderItem0 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (ImagingOrderItem0?.setImaging_order) {
    await ImagingOrderItem0.setImaging_order(relatedImaging_order0);
  }

  const relatedImaging_order1 = await ImagingOrders.findOne({
    offset: Math.floor(Math.random() * (await ImagingOrders.count())),
  });
  const ImagingOrderItem1 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (ImagingOrderItem1?.setImaging_order) {
    await ImagingOrderItem1.setImaging_order(relatedImaging_order1);
  }

  const relatedImaging_order2 = await ImagingOrders.findOne({
    offset: Math.floor(Math.random() * (await ImagingOrders.count())),
  });
  const ImagingOrderItem2 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (ImagingOrderItem2?.setImaging_order) {
    await ImagingOrderItem2.setImaging_order(relatedImaging_order2);
  }

  const relatedImaging_order3 = await ImagingOrders.findOne({
    offset: Math.floor(Math.random() * (await ImagingOrders.count())),
  });
  const ImagingOrderItem3 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (ImagingOrderItem3?.setImaging_order) {
    await ImagingOrderItem3.setImaging_order(relatedImaging_order3);
  }
}

async function associateImagingOrderItemWithImaging_investigation() {
  const relatedImaging_investigation0 = await ImagingInvestigations.findOne({
    offset: Math.floor(Math.random() * (await ImagingInvestigations.count())),
  });
  const ImagingOrderItem0 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (ImagingOrderItem0?.setImaging_investigation) {
    await ImagingOrderItem0.setImaging_investigation(
      relatedImaging_investigation0,
    );
  }

  const relatedImaging_investigation1 = await ImagingInvestigations.findOne({
    offset: Math.floor(Math.random() * (await ImagingInvestigations.count())),
  });
  const ImagingOrderItem1 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (ImagingOrderItem1?.setImaging_investigation) {
    await ImagingOrderItem1.setImaging_investigation(
      relatedImaging_investigation1,
    );
  }

  const relatedImaging_investigation2 = await ImagingInvestigations.findOne({
    offset: Math.floor(Math.random() * (await ImagingInvestigations.count())),
  });
  const ImagingOrderItem2 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (ImagingOrderItem2?.setImaging_investigation) {
    await ImagingOrderItem2.setImaging_investigation(
      relatedImaging_investigation2,
    );
  }

  const relatedImaging_investigation3 = await ImagingInvestigations.findOne({
    offset: Math.floor(Math.random() * (await ImagingInvestigations.count())),
  });
  const ImagingOrderItem3 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (ImagingOrderItem3?.setImaging_investigation) {
    await ImagingOrderItem3.setImaging_investigation(
      relatedImaging_investigation3,
    );
  }
}

async function associateImagingOrderItemWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingOrderItem0 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (ImagingOrderItem0?.setOrganization) {
    await ImagingOrderItem0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingOrderItem1 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (ImagingOrderItem1?.setOrganization) {
    await ImagingOrderItem1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingOrderItem2 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (ImagingOrderItem2?.setOrganization) {
    await ImagingOrderItem2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingOrderItem3 = await ImagingOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (ImagingOrderItem3?.setOrganization) {
    await ImagingOrderItem3.setOrganization(relatedOrganization3);
  }
}

async function associateImagingOrderWithVisit() {
  const relatedVisit0 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const ImagingOrder0 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (ImagingOrder0?.setVisit) {
    await ImagingOrder0.setVisit(relatedVisit0);
  }

  const relatedVisit1 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const ImagingOrder1 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (ImagingOrder1?.setVisit) {
    await ImagingOrder1.setVisit(relatedVisit1);
  }

  const relatedVisit2 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const ImagingOrder2 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (ImagingOrder2?.setVisit) {
    await ImagingOrder2.setVisit(relatedVisit2);
  }

  const relatedVisit3 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const ImagingOrder3 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (ImagingOrder3?.setVisit) {
    await ImagingOrder3.setVisit(relatedVisit3);
  }
}

async function associateImagingOrderWithImaging_technician() {
  const relatedImaging_technician0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const ImagingOrder0 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (ImagingOrder0?.setImaging_technician) {
    await ImagingOrder0.setImaging_technician(relatedImaging_technician0);
  }

  const relatedImaging_technician1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const ImagingOrder1 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (ImagingOrder1?.setImaging_technician) {
    await ImagingOrder1.setImaging_technician(relatedImaging_technician1);
  }

  const relatedImaging_technician2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const ImagingOrder2 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (ImagingOrder2?.setImaging_technician) {
    await ImagingOrder2.setImaging_technician(relatedImaging_technician2);
  }

  const relatedImaging_technician3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const ImagingOrder3 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (ImagingOrder3?.setImaging_technician) {
    await ImagingOrder3.setImaging_technician(relatedImaging_technician3);
  }
}

async function associateImagingOrderWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingOrder0 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (ImagingOrder0?.setOrganization) {
    await ImagingOrder0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingOrder1 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (ImagingOrder1?.setOrganization) {
    await ImagingOrder1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingOrder2 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (ImagingOrder2?.setOrganization) {
    await ImagingOrder2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const ImagingOrder3 = await ImagingOrders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (ImagingOrder3?.setOrganization) {
    await ImagingOrder3.setOrganization(relatedOrganization3);
  }
}

async function associateInsuranceWithPatient() {
  const relatedPatient0 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Insurance0 = await Insurances.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Insurance0?.setPatient) {
    await Insurance0.setPatient(relatedPatient0);
  }

  const relatedPatient1 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Insurance1 = await Insurances.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Insurance1?.setPatient) {
    await Insurance1.setPatient(relatedPatient1);
  }

  const relatedPatient2 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Insurance2 = await Insurances.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Insurance2?.setPatient) {
    await Insurance2.setPatient(relatedPatient2);
  }

  const relatedPatient3 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Insurance3 = await Insurances.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Insurance3?.setPatient) {
    await Insurance3.setPatient(relatedPatient3);
  }
}

async function associateInsuranceWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Insurance0 = await Insurances.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Insurance0?.setOrganization) {
    await Insurance0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Insurance1 = await Insurances.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Insurance1?.setOrganization) {
    await Insurance1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Insurance2 = await Insurances.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Insurance2?.setOrganization) {
    await Insurance2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Insurance3 = await Insurances.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Insurance3?.setOrganization) {
    await Insurance3.setOrganization(relatedOrganization3);
  }
}

async function associateInvoiceItemWithInvoice() {
  const relatedInvoice0 = await Invoices.findOne({
    offset: Math.floor(Math.random() * (await Invoices.count())),
  });
  const InvoiceItem0 = await InvoiceItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (InvoiceItem0?.setInvoice) {
    await InvoiceItem0.setInvoice(relatedInvoice0);
  }

  const relatedInvoice1 = await Invoices.findOne({
    offset: Math.floor(Math.random() * (await Invoices.count())),
  });
  const InvoiceItem1 = await InvoiceItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (InvoiceItem1?.setInvoice) {
    await InvoiceItem1.setInvoice(relatedInvoice1);
  }

  const relatedInvoice2 = await Invoices.findOne({
    offset: Math.floor(Math.random() * (await Invoices.count())),
  });
  const InvoiceItem2 = await InvoiceItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (InvoiceItem2?.setInvoice) {
    await InvoiceItem2.setInvoice(relatedInvoice2);
  }

  const relatedInvoice3 = await Invoices.findOne({
    offset: Math.floor(Math.random() * (await Invoices.count())),
  });
  const InvoiceItem3 = await InvoiceItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (InvoiceItem3?.setInvoice) {
    await InvoiceItem3.setInvoice(relatedInvoice3);
  }
}

async function associateInvoiceItemWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const InvoiceItem0 = await InvoiceItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (InvoiceItem0?.setOrganization) {
    await InvoiceItem0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const InvoiceItem1 = await InvoiceItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (InvoiceItem1?.setOrganization) {
    await InvoiceItem1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const InvoiceItem2 = await InvoiceItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (InvoiceItem2?.setOrganization) {
    await InvoiceItem2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const InvoiceItem3 = await InvoiceItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (InvoiceItem3?.setOrganization) {
    await InvoiceItem3.setOrganization(relatedOrganization3);
  }
}

async function associateInvoiceWithPatient() {
  const relatedPatient0 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Invoice0 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Invoice0?.setPatient) {
    await Invoice0.setPatient(relatedPatient0);
  }

  const relatedPatient1 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Invoice1 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Invoice1?.setPatient) {
    await Invoice1.setPatient(relatedPatient1);
  }

  const relatedPatient2 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Invoice2 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Invoice2?.setPatient) {
    await Invoice2.setPatient(relatedPatient2);
  }

  const relatedPatient3 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Invoice3 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Invoice3?.setPatient) {
    await Invoice3.setPatient(relatedPatient3);
  }
}

async function associateInvoiceWithVisit() {
  const relatedVisit0 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const Invoice0 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Invoice0?.setVisit) {
    await Invoice0.setVisit(relatedVisit0);
  }

  const relatedVisit1 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const Invoice1 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Invoice1?.setVisit) {
    await Invoice1.setVisit(relatedVisit1);
  }

  const relatedVisit2 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const Invoice2 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Invoice2?.setVisit) {
    await Invoice2.setVisit(relatedVisit2);
  }

  const relatedVisit3 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const Invoice3 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Invoice3?.setVisit) {
    await Invoice3.setVisit(relatedVisit3);
  }
}

async function associateInvoiceWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Invoice0 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Invoice0?.setOrganization) {
    await Invoice0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Invoice1 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Invoice1?.setOrganization) {
    await Invoice1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Invoice2 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Invoice2?.setOrganization) {
    await Invoice2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Invoice3 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Invoice3?.setOrganization) {
    await Invoice3.setOrganization(relatedOrganization3);
  }
}

async function associateInvoiceWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Invoice0 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Invoice0?.setOrganization) {
    await Invoice0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Invoice1 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Invoice1?.setOrganization) {
    await Invoice1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Invoice2 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Invoice2?.setOrganization) {
    await Invoice2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Invoice3 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Invoice3?.setOrganization) {
    await Invoice3.setOrganization(relatedOrganization3);
  }
}

async function associateLabOrderItemWithLab_order() {
  const relatedLab_order0 = await LabOrders.findOne({
    offset: Math.floor(Math.random() * (await LabOrders.count())),
  });
  const LabOrderItem0 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (LabOrderItem0?.setLab_order) {
    await LabOrderItem0.setLab_order(relatedLab_order0);
  }

  const relatedLab_order1 = await LabOrders.findOne({
    offset: Math.floor(Math.random() * (await LabOrders.count())),
  });
  const LabOrderItem1 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (LabOrderItem1?.setLab_order) {
    await LabOrderItem1.setLab_order(relatedLab_order1);
  }

  const relatedLab_order2 = await LabOrders.findOne({
    offset: Math.floor(Math.random() * (await LabOrders.count())),
  });
  const LabOrderItem2 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (LabOrderItem2?.setLab_order) {
    await LabOrderItem2.setLab_order(relatedLab_order2);
  }

  const relatedLab_order3 = await LabOrders.findOne({
    offset: Math.floor(Math.random() * (await LabOrders.count())),
  });
  const LabOrderItem3 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (LabOrderItem3?.setLab_order) {
    await LabOrderItem3.setLab_order(relatedLab_order3);
  }
}

async function associateLabOrderItemWithLab_test() {
  const relatedLab_test0 = await LabTests.findOne({
    offset: Math.floor(Math.random() * (await LabTests.count())),
  });
  const LabOrderItem0 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (LabOrderItem0?.setLab_test) {
    await LabOrderItem0.setLab_test(relatedLab_test0);
  }

  const relatedLab_test1 = await LabTests.findOne({
    offset: Math.floor(Math.random() * (await LabTests.count())),
  });
  const LabOrderItem1 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (LabOrderItem1?.setLab_test) {
    await LabOrderItem1.setLab_test(relatedLab_test1);
  }

  const relatedLab_test2 = await LabTests.findOne({
    offset: Math.floor(Math.random() * (await LabTests.count())),
  });
  const LabOrderItem2 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (LabOrderItem2?.setLab_test) {
    await LabOrderItem2.setLab_test(relatedLab_test2);
  }

  const relatedLab_test3 = await LabTests.findOne({
    offset: Math.floor(Math.random() * (await LabTests.count())),
  });
  const LabOrderItem3 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (LabOrderItem3?.setLab_test) {
    await LabOrderItem3.setLab_test(relatedLab_test3);
  }
}

async function associateLabOrderItemWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabOrderItem0 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (LabOrderItem0?.setOrganization) {
    await LabOrderItem0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabOrderItem1 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (LabOrderItem1?.setOrganization) {
    await LabOrderItem1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabOrderItem2 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (LabOrderItem2?.setOrganization) {
    await LabOrderItem2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabOrderItem3 = await LabOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (LabOrderItem3?.setOrganization) {
    await LabOrderItem3.setOrganization(relatedOrganization3);
  }
}

async function associateLabOrderWithVisit() {
  const relatedVisit0 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const LabOrder0 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (LabOrder0?.setVisit) {
    await LabOrder0.setVisit(relatedVisit0);
  }

  const relatedVisit1 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const LabOrder1 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (LabOrder1?.setVisit) {
    await LabOrder1.setVisit(relatedVisit1);
  }

  const relatedVisit2 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const LabOrder2 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (LabOrder2?.setVisit) {
    await LabOrder2.setVisit(relatedVisit2);
  }

  const relatedVisit3 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const LabOrder3 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (LabOrder3?.setVisit) {
    await LabOrder3.setVisit(relatedVisit3);
  }
}

async function associateLabOrderWithLab_technician() {
  const relatedLab_technician0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const LabOrder0 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (LabOrder0?.setLab_technician) {
    await LabOrder0.setLab_technician(relatedLab_technician0);
  }

  const relatedLab_technician1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const LabOrder1 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (LabOrder1?.setLab_technician) {
    await LabOrder1.setLab_technician(relatedLab_technician1);
  }

  const relatedLab_technician2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const LabOrder2 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (LabOrder2?.setLab_technician) {
    await LabOrder2.setLab_technician(relatedLab_technician2);
  }

  const relatedLab_technician3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const LabOrder3 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (LabOrder3?.setLab_technician) {
    await LabOrder3.setLab_technician(relatedLab_technician3);
  }
}

async function associateLabOrderWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabOrder0 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (LabOrder0?.setOrganization) {
    await LabOrder0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabOrder1 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (LabOrder1?.setOrganization) {
    await LabOrder1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabOrder2 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (LabOrder2?.setOrganization) {
    await LabOrder2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabOrder3 = await LabOrders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (LabOrder3?.setOrganization) {
    await LabOrder3.setOrganization(relatedOrganization3);
  }
}

async function associateLabTestWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabTest0 = await LabTests.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (LabTest0?.setOrganization) {
    await LabTest0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabTest1 = await LabTests.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (LabTest1?.setOrganization) {
    await LabTest1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabTest2 = await LabTests.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (LabTest2?.setOrganization) {
    await LabTest2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const LabTest3 = await LabTests.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (LabTest3?.setOrganization) {
    await LabTest3.setOrganization(relatedOrganization3);
  }
}

async function associateMedicationWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Medication0 = await Medications.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Medication0?.setOrganization) {
    await Medication0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Medication1 = await Medications.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Medication1?.setOrganization) {
    await Medication1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Medication2 = await Medications.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Medication2?.setOrganization) {
    await Medication2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Medication3 = await Medications.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Medication3?.setOrganization) {
    await Medication3.setOrganization(relatedOrganization3);
  }
}

async function associatePatientDocumentWithPatient() {
  const relatedPatient0 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const PatientDocument0 = await PatientDocuments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (PatientDocument0?.setPatient) {
    await PatientDocument0.setPatient(relatedPatient0);
  }

  const relatedPatient1 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const PatientDocument1 = await PatientDocuments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (PatientDocument1?.setPatient) {
    await PatientDocument1.setPatient(relatedPatient1);
  }

  const relatedPatient2 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const PatientDocument2 = await PatientDocuments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (PatientDocument2?.setPatient) {
    await PatientDocument2.setPatient(relatedPatient2);
  }

  const relatedPatient3 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const PatientDocument3 = await PatientDocuments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (PatientDocument3?.setPatient) {
    await PatientDocument3.setPatient(relatedPatient3);
  }
}

async function associatePatientDocumentWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PatientDocument0 = await PatientDocuments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (PatientDocument0?.setOrganization) {
    await PatientDocument0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PatientDocument1 = await PatientDocuments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (PatientDocument1?.setOrganization) {
    await PatientDocument1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PatientDocument2 = await PatientDocuments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (PatientDocument2?.setOrganization) {
    await PatientDocument2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PatientDocument3 = await PatientDocuments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (PatientDocument3?.setOrganization) {
    await PatientDocument3.setOrganization(relatedOrganization3);
  }
}

async function associatePatientWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Patient0 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Patient0?.setUser) {
    await Patient0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Patient1 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Patient1?.setUser) {
    await Patient1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Patient2 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Patient2?.setUser) {
    await Patient2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Patient3 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Patient3?.setUser) {
    await Patient3.setUser(relatedUser3);
  }
}

async function associatePatientWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Patient0 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Patient0?.setOrganization) {
    await Patient0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Patient1 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Patient1?.setOrganization) {
    await Patient1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Patient2 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Patient2?.setOrganization) {
    await Patient2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Patient3 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Patient3?.setOrganization) {
    await Patient3.setOrganization(relatedOrganization3);
  }
}

async function associatePatientWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Patient0 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Patient0?.setOrganization) {
    await Patient0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Patient1 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Patient1?.setOrganization) {
    await Patient1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Patient2 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Patient2?.setOrganization) {
    await Patient2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Patient3 = await Patients.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Patient3?.setOrganization) {
    await Patient3.setOrganization(relatedOrganization3);
  }
}

async function associatePharmacyOrderItemWithPharmacy_order() {
  const relatedPharmacy_order0 = await PharmacyOrders.findOne({
    offset: Math.floor(Math.random() * (await PharmacyOrders.count())),
  });
  const PharmacyOrderItem0 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (PharmacyOrderItem0?.setPharmacy_order) {
    await PharmacyOrderItem0.setPharmacy_order(relatedPharmacy_order0);
  }

  const relatedPharmacy_order1 = await PharmacyOrders.findOne({
    offset: Math.floor(Math.random() * (await PharmacyOrders.count())),
  });
  const PharmacyOrderItem1 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (PharmacyOrderItem1?.setPharmacy_order) {
    await PharmacyOrderItem1.setPharmacy_order(relatedPharmacy_order1);
  }

  const relatedPharmacy_order2 = await PharmacyOrders.findOne({
    offset: Math.floor(Math.random() * (await PharmacyOrders.count())),
  });
  const PharmacyOrderItem2 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (PharmacyOrderItem2?.setPharmacy_order) {
    await PharmacyOrderItem2.setPharmacy_order(relatedPharmacy_order2);
  }

  const relatedPharmacy_order3 = await PharmacyOrders.findOne({
    offset: Math.floor(Math.random() * (await PharmacyOrders.count())),
  });
  const PharmacyOrderItem3 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (PharmacyOrderItem3?.setPharmacy_order) {
    await PharmacyOrderItem3.setPharmacy_order(relatedPharmacy_order3);
  }
}

async function associatePharmacyOrderItemWithMedication() {
  const relatedMedication0 = await Medications.findOne({
    offset: Math.floor(Math.random() * (await Medications.count())),
  });
  const PharmacyOrderItem0 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (PharmacyOrderItem0?.setMedication) {
    await PharmacyOrderItem0.setMedication(relatedMedication0);
  }

  const relatedMedication1 = await Medications.findOne({
    offset: Math.floor(Math.random() * (await Medications.count())),
  });
  const PharmacyOrderItem1 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (PharmacyOrderItem1?.setMedication) {
    await PharmacyOrderItem1.setMedication(relatedMedication1);
  }

  const relatedMedication2 = await Medications.findOne({
    offset: Math.floor(Math.random() * (await Medications.count())),
  });
  const PharmacyOrderItem2 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (PharmacyOrderItem2?.setMedication) {
    await PharmacyOrderItem2.setMedication(relatedMedication2);
  }

  const relatedMedication3 = await Medications.findOne({
    offset: Math.floor(Math.random() * (await Medications.count())),
  });
  const PharmacyOrderItem3 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (PharmacyOrderItem3?.setMedication) {
    await PharmacyOrderItem3.setMedication(relatedMedication3);
  }
}

async function associatePharmacyOrderItemWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PharmacyOrderItem0 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (PharmacyOrderItem0?.setOrganization) {
    await PharmacyOrderItem0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PharmacyOrderItem1 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (PharmacyOrderItem1?.setOrganization) {
    await PharmacyOrderItem1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PharmacyOrderItem2 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (PharmacyOrderItem2?.setOrganization) {
    await PharmacyOrderItem2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PharmacyOrderItem3 = await PharmacyOrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (PharmacyOrderItem3?.setOrganization) {
    await PharmacyOrderItem3.setOrganization(relatedOrganization3);
  }
}

async function associatePharmacyOrderWithVisit() {
  const relatedVisit0 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const PharmacyOrder0 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (PharmacyOrder0?.setVisit) {
    await PharmacyOrder0.setVisit(relatedVisit0);
  }

  const relatedVisit1 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const PharmacyOrder1 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (PharmacyOrder1?.setVisit) {
    await PharmacyOrder1.setVisit(relatedVisit1);
  }

  const relatedVisit2 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const PharmacyOrder2 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (PharmacyOrder2?.setVisit) {
    await PharmacyOrder2.setVisit(relatedVisit2);
  }

  const relatedVisit3 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const PharmacyOrder3 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (PharmacyOrder3?.setVisit) {
    await PharmacyOrder3.setVisit(relatedVisit3);
  }
}

async function associatePharmacyOrderWithPharmacist() {
  const relatedPharmacist0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const PharmacyOrder0 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (PharmacyOrder0?.setPharmacist) {
    await PharmacyOrder0.setPharmacist(relatedPharmacist0);
  }

  const relatedPharmacist1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const PharmacyOrder1 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (PharmacyOrder1?.setPharmacist) {
    await PharmacyOrder1.setPharmacist(relatedPharmacist1);
  }

  const relatedPharmacist2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const PharmacyOrder2 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (PharmacyOrder2?.setPharmacist) {
    await PharmacyOrder2.setPharmacist(relatedPharmacist2);
  }

  const relatedPharmacist3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const PharmacyOrder3 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (PharmacyOrder3?.setPharmacist) {
    await PharmacyOrder3.setPharmacist(relatedPharmacist3);
  }
}

async function associatePharmacyOrderWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PharmacyOrder0 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (PharmacyOrder0?.setOrganization) {
    await PharmacyOrder0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PharmacyOrder1 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (PharmacyOrder1?.setOrganization) {
    await PharmacyOrder1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PharmacyOrder2 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (PharmacyOrder2?.setOrganization) {
    await PharmacyOrder2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const PharmacyOrder3 = await PharmacyOrders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (PharmacyOrder3?.setOrganization) {
    await PharmacyOrder3.setOrganization(relatedOrganization3);
  }
}

async function associateSickLeafeWithVisit() {
  const relatedVisit0 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const SickLeafe0 = await SickLeaves.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (SickLeafe0?.setVisit) {
    await SickLeafe0.setVisit(relatedVisit0);
  }

  const relatedVisit1 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const SickLeafe1 = await SickLeaves.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (SickLeafe1?.setVisit) {
    await SickLeafe1.setVisit(relatedVisit1);
  }

  const relatedVisit2 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const SickLeafe2 = await SickLeaves.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (SickLeafe2?.setVisit) {
    await SickLeafe2.setVisit(relatedVisit2);
  }

  const relatedVisit3 = await Visits.findOne({
    offset: Math.floor(Math.random() * (await Visits.count())),
  });
  const SickLeafe3 = await SickLeaves.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (SickLeafe3?.setVisit) {
    await SickLeafe3.setVisit(relatedVisit3);
  }
}

async function associateSickLeafeWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const SickLeafe0 = await SickLeaves.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (SickLeafe0?.setOrganization) {
    await SickLeafe0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const SickLeafe1 = await SickLeaves.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (SickLeafe1?.setOrganization) {
    await SickLeafe1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const SickLeafe2 = await SickLeaves.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (SickLeafe2?.setOrganization) {
    await SickLeafe2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const SickLeafe3 = await SickLeaves.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (SickLeafe3?.setOrganization) {
    await SickLeafe3.setOrganization(relatedOrganization3);
  }
}

async function associateVisitWithPatient() {
  const relatedPatient0 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Visit0 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Visit0?.setPatient) {
    await Visit0.setPatient(relatedPatient0);
  }

  const relatedPatient1 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Visit1 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Visit1?.setPatient) {
    await Visit1.setPatient(relatedPatient1);
  }

  const relatedPatient2 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Visit2 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Visit2?.setPatient) {
    await Visit2.setPatient(relatedPatient2);
  }

  const relatedPatient3 = await Patients.findOne({
    offset: Math.floor(Math.random() * (await Patients.count())),
  });
  const Visit3 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Visit3?.setPatient) {
    await Visit3.setPatient(relatedPatient3);
  }
}

async function associateVisitWithDoctor() {
  const relatedDoctor0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Visit0 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Visit0?.setDoctor) {
    await Visit0.setDoctor(relatedDoctor0);
  }

  const relatedDoctor1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Visit1 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Visit1?.setDoctor) {
    await Visit1.setDoctor(relatedDoctor1);
  }

  const relatedDoctor2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Visit2 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Visit2?.setDoctor) {
    await Visit2.setDoctor(relatedDoctor2);
  }

  const relatedDoctor3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Visit3 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Visit3?.setDoctor) {
    await Visit3.setDoctor(relatedDoctor3);
  }
}

async function associateVisitWithDepartment() {
  const relatedDepartment0 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Visit0 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Visit0?.setDepartment) {
    await Visit0.setDepartment(relatedDepartment0);
  }

  const relatedDepartment1 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Visit1 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Visit1?.setDepartment) {
    await Visit1.setDepartment(relatedDepartment1);
  }

  const relatedDepartment2 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Visit2 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Visit2?.setDepartment) {
    await Visit2.setDepartment(relatedDepartment2);
  }

  const relatedDepartment3 = await Departments.findOne({
    offset: Math.floor(Math.random() * (await Departments.count())),
  });
  const Visit3 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Visit3?.setDepartment) {
    await Visit3.setDepartment(relatedDepartment3);
  }
}

async function associateVisitWithAppointment() {
  const relatedAppointment0 = await Appointments.findOne({
    offset: Math.floor(Math.random() * (await Appointments.count())),
  });
  const Visit0 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Visit0?.setAppointment) {
    await Visit0.setAppointment(relatedAppointment0);
  }

  const relatedAppointment1 = await Appointments.findOne({
    offset: Math.floor(Math.random() * (await Appointments.count())),
  });
  const Visit1 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Visit1?.setAppointment) {
    await Visit1.setAppointment(relatedAppointment1);
  }

  const relatedAppointment2 = await Appointments.findOne({
    offset: Math.floor(Math.random() * (await Appointments.count())),
  });
  const Visit2 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Visit2?.setAppointment) {
    await Visit2.setAppointment(relatedAppointment2);
  }

  const relatedAppointment3 = await Appointments.findOne({
    offset: Math.floor(Math.random() * (await Appointments.count())),
  });
  const Visit3 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Visit3?.setAppointment) {
    await Visit3.setAppointment(relatedAppointment3);
  }
}

async function associateVisitWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Visit0 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Visit0?.setOrganization) {
    await Visit0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Visit1 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Visit1?.setOrganization) {
    await Visit1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Visit2 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Visit2?.setOrganization) {
    await Visit2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Visit3 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Visit3?.setOrganization) {
    await Visit3.setOrganization(relatedOrganization3);
  }
}

async function associateVisitWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Visit0 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Visit0?.setOrganization) {
    await Visit0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Visit1 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Visit1?.setOrganization) {
    await Visit1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Visit2 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Visit2?.setOrganization) {
    await Visit2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Visit3 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Visit3?.setOrganization) {
    await Visit3.setOrganization(relatedOrganization3);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Appointments.bulkCreate(AppointmentsData);

    await Departments.bulkCreate(DepartmentsData);

    await Holidays.bulkCreate(HolidaysData);

    await ImagingInvestigations.bulkCreate(ImagingInvestigationsData);

    await ImagingOrderItems.bulkCreate(ImagingOrderItemsData);

    await ImagingOrders.bulkCreate(ImagingOrdersData);

    await Insurances.bulkCreate(InsurancesData);

    await InvoiceItems.bulkCreate(InvoiceItemsData);

    await Invoices.bulkCreate(InvoicesData);

    await LabOrderItems.bulkCreate(LabOrderItemsData);

    await LabOrders.bulkCreate(LabOrdersData);

    await LabTests.bulkCreate(LabTestsData);

    await Medications.bulkCreate(MedicationsData);

    await PatientDocuments.bulkCreate(PatientDocumentsData);

    await Patients.bulkCreate(PatientsData);

    await PharmacyOrderItems.bulkCreate(PharmacyOrderItemsData);

    await PharmacyOrders.bulkCreate(PharmacyOrdersData);

    await SickLeaves.bulkCreate(SickLeavesData);

    await Visits.bulkCreate(VisitsData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateAppointmentWithPatient(),

      await associateAppointmentWithDoctor(),

      await associateAppointmentWithDepartment(),

      await associateAppointmentWithOrganization(),

      await associateAppointmentWithOrganization(),

      await associateDepartmentWithOrganization(),

      await associateDepartmentWithOrganization(),

      await associateHolidayWithOrganization(),

      await associateHolidayWithDoctor(),

      await associateHolidayWithDepartment(),

      await associateHolidayWithOrganization(),

      await associateImagingInvestigationWithOrganization(),

      await associateImagingOrderItemWithImaging_order(),

      await associateImagingOrderItemWithImaging_investigation(),

      await associateImagingOrderItemWithOrganization(),

      await associateImagingOrderWithVisit(),

      await associateImagingOrderWithImaging_technician(),

      await associateImagingOrderWithOrganization(),

      await associateInsuranceWithPatient(),

      await associateInsuranceWithOrganization(),

      await associateInvoiceItemWithInvoice(),

      await associateInvoiceItemWithOrganization(),

      await associateInvoiceWithPatient(),

      await associateInvoiceWithVisit(),

      await associateInvoiceWithOrganization(),

      await associateInvoiceWithOrganization(),

      await associateLabOrderItemWithLab_order(),

      await associateLabOrderItemWithLab_test(),

      await associateLabOrderItemWithOrganization(),

      await associateLabOrderWithVisit(),

      await associateLabOrderWithLab_technician(),

      await associateLabOrderWithOrganization(),

      await associateLabTestWithOrganization(),

      await associateMedicationWithOrganization(),

      await associatePatientDocumentWithPatient(),

      await associatePatientDocumentWithOrganization(),

      await associatePatientWithUser(),

      await associatePatientWithOrganization(),

      await associatePatientWithOrganization(),

      await associatePharmacyOrderItemWithPharmacy_order(),

      await associatePharmacyOrderItemWithMedication(),

      await associatePharmacyOrderItemWithOrganization(),

      await associatePharmacyOrderWithVisit(),

      await associatePharmacyOrderWithPharmacist(),

      await associatePharmacyOrderWithOrganization(),

      await associateSickLeafeWithVisit(),

      await associateSickLeafeWithOrganization(),

      await associateVisitWithPatient(),

      await associateVisitWithDoctor(),

      await associateVisitWithDepartment(),

      await associateVisitWithAppointment(),

      await associateVisitWithOrganization(),

      await associateVisitWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('appointments', null, {});

    await queryInterface.bulkDelete('departments', null, {});

    await queryInterface.bulkDelete('holidays', null, {});

    await queryInterface.bulkDelete('imaging_investigations', null, {});

    await queryInterface.bulkDelete('imaging_order_items', null, {});

    await queryInterface.bulkDelete('imaging_orders', null, {});

    await queryInterface.bulkDelete('insurances', null, {});

    await queryInterface.bulkDelete('invoice_items', null, {});

    await queryInterface.bulkDelete('invoices', null, {});

    await queryInterface.bulkDelete('lab_order_items', null, {});

    await queryInterface.bulkDelete('lab_orders', null, {});

    await queryInterface.bulkDelete('lab_tests', null, {});

    await queryInterface.bulkDelete('medications', null, {});

    await queryInterface.bulkDelete('patient_documents', null, {});

    await queryInterface.bulkDelete('patients', null, {});

    await queryInterface.bulkDelete('pharmacy_order_items', null, {});

    await queryInterface.bulkDelete('pharmacy_orders', null, {});

    await queryInterface.bulkDelete('sick_leaves', null, {});

    await queryInterface.bulkDelete('visits', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
