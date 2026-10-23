export interface AdmissionCenter {
  id: string;
  name: string;
  city: string;
  state: string;
  zone: 'North' | 'North-East' | 'East' | 'West' | 'Central';
  address: string;
  phone: string;
  email: string;
  leadCoordinator: string;
  facilities: string[];
  status: 'Active' | 'Upcoming 2027';
}

export const ADMISSION_CENTERS: AdmissionCenter[] = [
  {
    id: 'center-dima-hasao',
    name: 'CNAP Dima Hasao Regional Skill & Innovation Center',
    city: 'Haflong',
    state: 'Assam',
    zone: 'North-East',
    address: 'Near District Council Administrative Complex, Haflong, Dima Hasao, Assam – 788819',
    phone: '+91 97161 11113',
    email: 'nareshgautam1981@gmail.com',
    leadCoordinator: 'Naresh Kr. Gautam / Regional Council Desk',
    facilities: ['Advanced CAD/CAM Lab', 'Cybersecurity SOC Simulator', 'Culinary & Hotel Training Kitchen', 'Classrooms'],
    status: 'Upcoming 2027'
  },
  {
    id: 'center-delhi-ncr',
    name: 'CNAP Corporate Liaison & Central Admissions Hub',
    city: 'New Delhi',
    state: 'Delhi NCR',
    zone: 'North',
    address: 'Barakhamba Road, Connaught Place, New Delhi – 110001',
    phone: '+91 97161 11113',
    email: 'nareshgautam1981@gmail.com',
    leadCoordinator: 'Sharad Narain (SRM / Admissions Dean)',
    facilities: ['Student Counseling Suite', 'Career Profiling Center', 'University Degrees Desk', 'Corporate Placements'],
    status: 'Active'
  },
  {
    id: 'center-hisar',
    name: 'CNAP Northern Vocational & Hotel Training Hub',
    city: 'Hisar',
    state: 'Haryana',
    zone: 'North',
    address: 'Model Town / Urban Estate II, Hisar, Haryana – 125005',
    phone: '+91 97161 11113',
    email: 'nareshgautam1981@gmail.com',
    leadCoordinator: 'Vikas Sheoran / Regional Partner',
    facilities: ['Hospitality & Bartending Suite', 'PLC Industrial Automation Lab', 'Electrician Workshop'],
    status: 'Active'
  },
  {
    id: 'center-guwahati',
    name: 'CNAP Assam State Outreach & Admission Desk',
    city: 'Guwahati',
    state: 'Assam',
    zone: 'North-East',
    address: 'GS Road, Christian Basti, Guwahati, Assam – 781005',
    phone: '+91 97161 11113',
    email: 'nareshgautam1981@gmail.com',
    leadCoordinator: 'Regional Admissions Officer',
    facilities: ['Admissions Desk', 'Psychometric Career Testing Center', 'Online Exam Terminal'],
    status: 'Active'
  },
  {
    id: 'center-silchar',
    name: 'CNAP Barak Valley Technical Admissions Center',
    city: 'Silchar',
    state: 'Assam',
    zone: 'North-East',
    address: 'Tarapur Main Road, Silchar, Assam – 788003',
    phone: '+91 97161 11113',
    email: 'nareshgautam1981@gmail.com',
    leadCoordinator: 'Barak Educational Alliance Desk',
    facilities: ['IT & Coding Lab', 'Student Counseling Hall'],
    status: 'Upcoming 2027'
  },
  {
    id: 'center-jaipur',
    name: 'CNAP Rajasthan Technical & Vocational Partner Desk',
    city: 'Jaipur',
    state: 'Rajasthan',
    zone: 'North',
    address: 'Tonk Road, Near University Campus, Jaipur, Rajasthan – 302015',
    phone: '+91 97161 11113',
    email: 'nareshgautam1981@gmail.com',
    leadCoordinator: 'State Skill Coordinator',
    facilities: ['Hospitality Training Mock Hotel', 'CAD Drafting Center'],
    status: 'Active'
  }
];

export interface StudentVerificationRecord {
  enrollmentNo: string;
  studentName: string;
  courseName: string;
  batchYear: string;
  centerLocation: string;
  status: 'Verified & Certified' | 'Active Enrolled' | 'Passed with Distinction';
  issueDate: string;
  gradeScore: string;
  nsqfLevel: string;
}

export const VERIFIED_RECORDS: Record<string, StudentVerificationRecord> = {
  'CNAP-2026-AS01': {
    enrollmentNo: 'CNAP-2026-AS01',
    studentName: 'Rongsenba Longchar',
    courseName: 'Cybersecurity, Digital Forensics & SOC Operations',
    batchYear: '2026 Batch Alpha',
    centerLocation: 'Haflong, Dima Hasao, Assam',
    status: 'Passed with Distinction',
    issueDate: 'October 15, 2026',
    gradeScore: 'A+ (94.2%)',
    nsqfLevel: 'NSQF Level 6'
  },
  'CNAP-2026-DH04': {
    enrollmentNo: 'CNAP-2026-DH04',
    studentName: 'Ananya Dimasa',
    courseName: 'Hospitality, Hotel Operations & Culinary Arts',
    batchYear: '2026 Learn-Work-Earn Track',
    centerLocation: 'Dima Hasao Regional Skill Hub',
    status: 'Active Enrolled',
    issueDate: 'July 10, 2026',
    gradeScore: 'On Track (Current Stipend: ₹14,000/mo)',
    nsqfLevel: 'B.Voc / NSQF Level 5'
  },
  'CNAP-2026-HR09': {
    enrollmentNo: 'CNAP-2026-HR09',
    studentName: 'Amitesh Sangwan',
    courseName: 'Product Design, SolidWorks 3D & Mechanical CAD',
    batchYear: '2025-2026 Spring',
    centerLocation: 'Hisar Hub, Haryana',
    status: 'Verified & Certified',
    issueDate: 'August 28, 2026',
    gradeScore: 'A (88.5%)',
    nsqfLevel: 'Certified CAD Professional'
  }
};
