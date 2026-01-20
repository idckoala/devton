<script>
function login() {
  const u = document.getElementById('user').value;
  const p = document.getElementById('pass').value;

  if (u === 'admin' && p === '1234') {
    localStorage.setItem('login', 'true
