import './css/App.css';
// import Auth from './components/Auth';
// import AdminPage from './components/AdminPage';
import ManagerPage from './components/ManagerPage';
import EmployeePage from './components/EmployeePage';


function App() {

  // const user = {
  //   name: "WhomLZT",
  //   role: "manager",
  //   department: ["Отдел разработки", "Отдела бета-теста"],
  //   haveEmployees: true,
  //   employees: ['b4jutsu', "retaker", 'hu88le', 'Donate', "ExtCoder"]
  // };

  const user = {
    name: "r3t4ker",
    role: "employee",
    managers: ['WhomLZT', "atom"],
  };

  // const projects = [
  //   {name: "Бот отчётов", manager: "WhomLZT", workers: ["hu88le"], status: "Разрабатывается"},
  //   {name: "Мониторинг конкрурентов", manager: "WhomLZT", workers: ["hu88le", "retaker"], status: "Разрабатывается"},
  //   {name: "LisBoa", manager: "WhomLZT", workers: ["hu88le", "retaker"], status: "Поддерживается"},
  //   {name: "Nordtox", manager: "WhomLZT", workers: ["hu88le", "retaker"], status: "Поддерживается"},
  //   {name: "Сортер", manager: "WhomLZT", workers: ["hu88le", "retaker"], status: "Не начат"},
  //   {name: "Сайт продажи аккаунтов", manager: "WhomLZT", workers: ["hu88le", "retaker"], status: "Заморожен"},
  //   {name: "Бот трафферов", manager: "WhomLZT", workers: ["hu88le", "retaker"], status: "Заморожен"},
  //   {name: "Складчина аккаунтов", manager: "WhomLZT", workers: ["hu88le", "retaker"], status: "Не начат"},
  //   {name: "Парсер телеграмм", manager: "WhomLZT", workers: ["hu88le", "retaker"], status: "Разрабатывается"},
  // ];

  const projects = [
    {name: "Бот Отчётов", manager: "Verif213", status: "Разрабатывается"},
    {name: "Nordtox", manager: "Verif213", status: "Поддерживается"},
    {name: "LisBoa", manager: "Web_Znahar", status: "Поддерживается"},
  ]

  return (
    <div>
      {/* <Auth/> */}
      {/* <AdminPage name={user.name}/> */}
      {/* <ManagerPage 
      name={user.name}
      role={user.role}  
      department={user.department}
      employees={user.employees}
      projects={projects}
      /> */}
      <EmployeePage user={user} projects={projects}/>

    </div>
  );
}

export default App;
