document.addEventListener('DOMContentLoaded', () => {
    const digitalClock = document.getElementById('digital-clock');
    const dateDisplay = document.getElementById('date-display');
    const greetingElement = document.getElementById('greeting');
    const userNameElement = document.getElementById('user-name');
    const dashboardToggleBtn = document.getElementById('dashboard-toggle');
    const currentDashboardTypeSpan = document.getElementById('current-dashboard-type');
    const studentDashboard = document.getElementById('student-dashboard');
    const teacherDashboard = document.getElementById('teacher-dashboard');

    // Mock User Data (replace with actual data from backend or authentication)
    const currentUser = {
        name: "Ahmad Wijaya", // Example user name
        type: "student" // Initial dashboard type: 'student' or 'teacher'
    };

    let isStudentDashboard = currentUser.type === 'student';

    // Initialize user and dashboard state
    userNameElement.textContent = currentUser.name;
    if (isStudentDashboard) {
        studentDashboard.classList.remove('hidden');
        teacherDashboard.classList.add('hidden');
        currentDashboardTypeSpan.textContent = 'Teacher';
    } else {
        studentDashboard.classList.add('hidden');
        teacherDashboard.classList.remove('hidden');
        currentDashboardTypeSpan.textContent = 'Student';
    }

    // Function to update clock and date
    function updateClockAndDate() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        digitalClock.textContent = `${hours}:${minutes}:${seconds}`;

        const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateDisplay.textContent = now.toLocaleDateString('id-ID', optionsDate);

        // Update greeting
        const currentHour = now.getHours();
        let greetingText;
        if (currentHour >= 5 && currentHour < 12) {
            greetingText = "Selamat Pagi";
        } else if (currentHour >= 12 && currentHour < 17) {
            greetingText = "Selamat Siang";
        } else if (currentHour >= 17 && currentHour < 20) {
            greetingText = "Selamat Sore";
        } else {
            greetingText = "Selamat Malam";
        }
        greetingElement.textContent = `${greetingText}, ${currentUser.name}`;
    }

    // Initial call and set interval for clock
    updateClockAndDate();
    setInterval(updateClockAndDate, 1000);

    // Dashboard Toggle Functionality
    dashboardToggleBtn.addEventListener('click', () => {
        isStudentDashboard = !isStudentDashboard;

        if (isStudentDashboard) {
            studentDashboard.classList.remove('hidden');
            teacherDashboard.classList.add('hidden');
            currentDashboardTypeSpan.textContent = 'Teacher';
        } else {
            studentDashboard.classList.add('hidden');
            teacherDashboard.classList.remove('hidden');
            currentDashboardTypeSpan.textContent = 'Student';
        }
    });
});
