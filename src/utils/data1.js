import eye from "./apt/eye.jpg";
import vet2 from "./apt/vet2.jpg";
import vet3 from "./apt/vet3.jpg";
import vet4 from "./apt/vet4.jpg";
import vet5 from "./apt/vet5.jpg";
import micheal from "./apt/micheal.jpg";
import anna from "./apt/anna.png";
import henry from "./apt/henry.jpg";
import james from "./apt/james.jpg";
import annie from "./apt/annie.png";
import martin from "./apt/martin.jpg";
import Ken from "./apt/Ken.png";
import marie from "./apt/marie.png";
import ryan from "./apt/ryan.png";
import giggs from "./apt/giggs.png";
import dee from "./apt/dee.png";
import williams from "./apt/williams.png";
import quincy from "./apt/quincy.png";
import shee from "./apt/shee.png";
import summin from "./apt/summin.png";
import ali from "./apt/ali.png";
import kin from "./apt/kin.png";
import erik from "./apt/erik.png";
import alex from "./apt/alex.png";
import Sara from "./apt/Sara.png";
import luis from "./apt/luis.png";
import mourinho from "./apt/mourinho.png";
import pep from "./apt/pep.png";
import avish from "./apt/avish.png";
import amenda from "./apt/amenda.png";
import mosh from "./apt/mosh.png";

const doctors = [
  {
    id: 1,
    name: "Dr. Hannah",
    specialty: "Cardiologist",
    image: eye,
    availableDays: ["Monday", "Wednesday", "Friday"],
    availableTimes: ["10:00 AM", "11:00 AM", "2:00 PM"],
    appointments: [],
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialty: "Dermatologist",
    image: vet2,
    availableDays: ["Tuesday", "Thursday"],
    availableTimes: ["9:00 AM", "1:00 PM", "3:00 PM"],
    appointments: [],
  },
  {
    id: 3,
    name: "Dr. David Lee",
    specialty: "Orthopedic Surgeon",
    image: vet3,
    availableDays: ["Monday", "Wednesday", "Friday"],
    availableTimes: ["9:00 AM", "2:00 PM", "4:00 PM"],
    appointments: [],
  },
  {
    id: 4,
    name: "Dr. Rachel Kim",
    specialty: "Pediatrician",
    image: vet4,
    availableDays: ["Tuesday", "Thursday"],
    availableTimes: ["10:00 AM", "1:00 PM", "3:00 PM"],
    appointments: [],
  },
  {
    id: 5,
    name: "Dr. Micheal",
    specialty: "Heart Specialist",
    image: micheal,
    availableDays: ["Monday", "Wednesday", "Friday"],
    availableTimes: ["10:00 AM", "11:00 AM", "2:00 PM"],
    appointments: [],
  },
  {
    id: 6,
    name: "Dr. Eve",
    specialty: "Cardiologist",
    image: vet5,
    availableDays: ["Monday", "Wednesday", "Friday"],
    availableTimes: ["10:00 AM", "11:00 AM", "2:00 PM"],
    appointments: [],
  },
  {
    id: 7,
    name: "Dr. Anna",
    specialty: "Oncologist",
    image: anna,
    availableDays: ["Monday", "Tuesday", "Thursday"],
    availableTimes: ["10:00 AM", "1:00 PM", "5:00 PM"],
    appointments: [],
  },
  {
    id: 8,
    name: "Dr. Annie",
    specialty: "Neurologist",
    image: annie,
    availableDays: ["Thursday", "Friday"],
    availableTimes: ["12:00 AM", "2:00 PM", "3:00 PM"],
    appointments: [],
  },
  {
    id: 9,
    name: "Dr. Henry",
    specialty: "Dermatologist",
    image: henry,
    availableDays: ["Monday", "Wednesday", "Thursday"],
    availableTimes: ["10:00 AM", "1:00 PM", "3:00 PM"],
    appointments: [],
  },
  {
    id: 10,
    name: "Dr. Ken",
    specialty: "Pediatrician",
    image: Ken,
    availableDays: ["Wednesday", "Friday"],
    availableTimes: ["10:00 AM", "12:00 AM", "4:00 PM"],
    appointments: [],
  },
  {
    id: 11,
    name: "Dr. Martin",
    specialty: "Heart Specialist",
    image: martin,
    availableDays: ["Monday", "Tuesday", "Friday"],
    availableTimes: ["9:00 AM", "10:00 AM", "12:00 PM"],
    appointments: [],
  },
  {
    id: 12,
    name: "Dr. James",
    specialty: "Oncologist",
    image: james,
    availableDays: ["Wednesday", "Thursday", "Friday"],
    availableTimes: ["9:00 AM", "11:00 AM", "12:00 PM"],
    appointments: [],
  },
  {
    id: 13,
    name: "Dr. Marie",
    specialty: "Cardiologist",
    image: marie,
    availableDays: ["Wednesday", "Thursday"],
    availableTimes: ["8:00 AM", "12:30 PM", "2:00 PM"],
    appointments: [],
  },
  {
    id: 14,
    name: "Dr. Mosh",
    specialty: "Neurologist",
    image: mosh,
    availableDays: ["Monday", "Friday"],
    availableTimes: ["1:00 PM", "2:00 PM", "3:00 PM"],
    appointments: [],
  },
  {
    id: 15,
    name: "Dr. Pep",
    specialty: "Surgeon",
    image: pep,
    availableDays: ["Thursday", "Friday", "Saturday"],
    availableTimes: ["2:00 PM", "4:00 PM"],
    appointments: [],
  },
  {
    id: 16,
    name: "Dr. Amenda",
    specialty: "Surgeon",
    image: amenda,
    availableDays: ["Monday", "Wednesday", "Thursday"],
    availableTimes: ["11:00 AM", "2:00 PM", "3:00 PM"],
    appointments: [],
  },
  {
    id: 17,
    name: "Dr. Avish",
    specialty: "Dermatologist",
    image: avish,
    availableDays: ["Wednesday", "Thursday", "Friday"],
    availableTimes: ["1:00 PM", "4:00 PM"],
    appointments: [],
  },
  {
    id: 18,
    name: "Dr. Mourinho",
    specialty: "Orthopedic Surgeon",
    image: mourinho,
    availableDays: ["Thursday", "Friday", "Saturday"],
    availableTimes: ["10:00 AM", "2:00 PM"],
    appointments: [],
  },
  {
    id: 19,
    name: "Dr. Luis",
    specialty: "Pediatrician",
    image: luis,
    availableDays: ["Monday", "Thursday", "Friday"],
    availableTimes: ["8:00 AM", "12:00 PM"],
    appointments: [],
  },
  {
    id: 20,
    name: "Dr. Quincy",
    specialty: "Dentist",
    image: quincy,
    availableDays: ["Tuesday", "Thursday"],
    availableTimes: ["9:00 AM", "12:00 PM", "4:00 PM"],
    appointments: [],
  },
  {
    id: 21,
    name: "Dr. Williams",
    specialty: "Nutritionist",
    image: williams,
    availableDays: ["Tuesday", "Thursday"],
    availableTimes: ["9:00 AM", "12:00 PM", "4:00 PM"],
    appointments: [],
  },
  {
    id: 22,
    name: "Dr. Dee",
    specialty: "Dentist",
    image: dee,
    availableDays: ["Monday", "Tuesday"],
    availableTimes: ["9:00 AM", "10:00 AM", "2:00 PM"],
    appointments: [],
  },
  {
    id: 23,
    name: "Dr. Giggs",
    specialty: "Oncologist",
    image: giggs,
    availableDays: ["Monday", "Tuesday"],
    availableTimes: ["9:00 PM", "10:00 PM"],
    appointments: [],
  },
  {
    id: 24,
    name: "Dr. Ryan",
    specialty: "Dentist",
    image: ryan,
    availableDays: ["Monday", "Tuesday", "Thursday"],
    availableTimes: ["11:00 AM", "1:00 PM", "3:00 PM"],
    appointments: [],
  },
  {
    id: 25,
    name: "Dr. Sara",
    specialty: "Oncologist",
    image: Sara,
    availableDays: ["Wednesday", "Friday"],
    availableTimes: ["12:00 PM", "2:00 PM", "3:00 PM"],
    appointments: [],
  },
  {
    id: 26,
    name: "Dr. Alex",
    specialty: "Dermatologist",
    image: alex,
    availableDays: ["Tuesday", "Friday"],
    availableTimes: ["9:30 AM", "10:00 AM", "1:00 PM"],
    appointments: [],
  },
  {
    id: 27,
    name: "Dr. Erik",
    specialty: "Nutritionist",
    image: erik,
    availableDays: ["Monday", "Thursday"],
    availableTimes: ["8:00 AM", "11:00 AM", "3:30 PM"],
    appointments: [],
  },
  {
    id: 28,
    name: "Dr. Kin",
    specialty: "Nutritionist",
    image: kin,
    availableDays: ["Friday", "Saturday"],
    availableTimes: ["7:00 PM", "8:00 PM", "9:00 PM"],
    appointments: [],
  },
  {
    id: 29,
    name: "Dr. Ali",
    specialty: "Orthopedic Surgeon",
    image: ali,
    availableDays: ["Monday", "Tuesday", "Thursday"],
    availableTimes: ["9:00 AM", "12:00 PM", "4:00 PM"],
    appointments: [],
  },
  {
    id: 30,
    name: "Dr. Summin",
    specialty: "Surgeon",
    image: summin,
    availableDays: ["Wednesday", "Thursday"],
    availableTimes: ["9:00 AM", "10:00 AM", "12:00 PM"],
    appointments: [],
  },
  {
    id: 31,
    name: "Dr. Shee",
    specialty: "Neurologist",
    image: shee,
    availableDays: ["Tuesday", "Thursday"],
    availableTimes: ["1:00 PM", "2:00 PM"],
    appointments: [],
  },
];
export default doctors;
