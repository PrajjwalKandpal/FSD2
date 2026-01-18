export default function Footer() {
const currentYear = new Date().getFullYear();
return (
<footer className="footer">
<div className="container">
<p>&copy; {2026} CU AIT-CSE- Experiment 2</p>
<p>
Built with React | Deployed with Git
</p>
<div className="social-links">
<a href="https://github.com">GitHub</a>&nbsp;
<a href="https://linkedin.com">LinkedIn</a>&nbsp;
<a href="https://react.dev">React Docs</a>
</div>
</div>
</footer>
);
}