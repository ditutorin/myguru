document.addEventListener('DOMContentLoaded', () => {
    const btnGuru = document.getElementById('btnGuru');
    const btnSiswa = document.getElementById('btnSiswa');
    const menuGuru = document.getElementById('menuGuru');
    const menuSiswa = document.getElementById('menuSiswa');
    const contentGuru = document.getElementById('contentGuru');
    const contentSiswa = document.getElementById('contentSiswa');
    const dashboardTitle = document.getElementById('dashboardTitle');

    function showGuruDashboard() {
        menuGuru.classList.remove('hidden');
        menuSiswa.classList.add('hidden');
        contentGuru.classList.remove('hidden');
        contentSiswa.classList.add('hidden');
        btnGuru.classList.add('active-dashboard');
        btnSiswa.classList.remove('active-dashboard');
        dashboardTitle.textContent = 'Dashboard Guru';
    }

    function showSiswaDashboard() {
        menuGuru.classList.add('hidden');
        menuSiswa.classList.remove('hidden');
        contentGuru.classList.add('hidden');
        contentSiswa.classList.remove('hidden');
        btnSiswa.classList.add('active-dashboard');
        btnGuru.classList.remove('active-dashboard');
        dashboardTitle.textContent = 'Dashboard Siswa';
    }

    btnGuru.addEventListener('click', showGuruDashboard);
    btnSiswa.addEventListener('click', showSiswaDashboard);

    // Initialize with Guru dashboard shown
    showGuruDashboard();
});