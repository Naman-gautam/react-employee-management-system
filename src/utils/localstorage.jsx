
const employees = [
  {
    id: 1,
    firstname: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Create Login Page",
        description: "Design and implement login UI",
        date: "2026-02-01",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navbar",
        date: "2026-01-28",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API Integration",
        description: "Connect frontend with backend API",
        date: "2026-02-03",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Dashboard UI",
        description: "Create employee dashboard layout",
        date: "2026-02-02",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Form Validation",
        description: "Add validation to signup form",
        date: "2026-01-30",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Performance Optimization",
        description: "Improve app loading speed",
        date: "2026-02-05",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    firstname: "Rohit",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Database Schema",
        description: "Design database models",
        date: "2026-01-27",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Auth Middleware",
        description: "Implement JWT authentication",
        date: "2026-02-01",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Error Handling",
        description: "Add global error handling",
        date: "2026-02-04",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstname: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Unit Testing",
        description: "Write unit tests for services",
        date: "2026-02-03",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Report",
        description: "Analyze reported bugs",
        date: "2026-01-29",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Refactor Code",
        description: "Improve code readability",
        date: "2026-02-06",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Deploy App",
        description: "Deploy application to server",
        date: "2026-02-02",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Environment Setup",
        description: "Configure production environment",
        date: "2026-01-26",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Server Monitoring",
        description: "Set up monitoring tools",
        date: "2026-02-07",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];


  
 const admin= {
    "id": 101,
    "email": "admin@example.com",
    "password": "123",
    "firstname":"admin"
  };

 export const setlocaStorage=()=>{
  localStorage.setItem("employee",JSON.stringify(employees) );
  localStorage.setItem("admin",JSON.stringify(admin) );
 }  

 export const getlocaStorage=()=>{
 const employee= JSON.parse(localStorage.getItem("employee"));
  const admin= JSON.parse(localStorage.getItem("admin"));

  return {employee ,admin}
 
 } 

