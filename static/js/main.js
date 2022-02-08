// Set darkmode
document.getElementById('mode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

document.getElementById('code-mode').addEventListener('click', () => {
    document.body.classList.toggle('code-theme-inverse');
    localStorage.setItem('code-theme',
        document.body.classList.contains('code-theme-inverse')
          ? 'enabled' : 'disabled');
});

document.body.classList.add('darkness-determined');

// enforce local storage setting but also fallback to user-agent preferences
if (localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') && window.matchMedia("(prefers-color-scheme: dark)").matches))
{
  document.body.classList.add('dark');
}

if (localStorage.getItem('code-theme') === 'enabled')
{
  document.body.classList.add('code-theme-inverse');
}
