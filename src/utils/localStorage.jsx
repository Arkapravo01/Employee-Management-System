const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2024-10-12",
                "category": "Design" 
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "category": "Meeting"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2024-10-11",
                "category": "Database"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Rahul",
        "email": "rahul@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix API issues",
                "taskDescription": "Resolve API bugs reported by QA",
                "taskDate": "2024-10-14",
                "category": "Backend"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "priya@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 1,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Write blog post",
                "taskDescription": "Create an article on JavaScript best practices",
                "taskDate": "2024-10-08",
                "category": "Content"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Amit",
        "email": "amit@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Frontend Bug Fix",
                "taskDescription": "Fix layout issues in mobile view",
                "taskDate": "2024-10-15",
                "category": "Frontend"
            }
        ]
    }
  ];
  
  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];
  
  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  };
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
  
    return { employees, admin };
  };
