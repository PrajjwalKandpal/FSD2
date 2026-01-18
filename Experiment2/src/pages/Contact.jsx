import { useState } from 'react';
export default function Contact() {
const [formData, setFormData] = useState({
name: '',
email: '',
message: ''
});
const [submitted, setSubmitted] = useState(false);
const handleChange = (e) => {
const { name, value } = e.target;
setFormData(prev => ({
...prev,
[name]: value
}));
};
const handleSubmit = (e) => {
e.preventDefault();
console.log('Form submitted:', formData);
setSubmitted(true);
// Reset after 2 seconds
setTimeout(() => {
setFormData({ name: '', email: '', message: '' });
setSubmitted(false);
}, 2000);
};
}