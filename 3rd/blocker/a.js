const allowedSites = [
    'https://www.wikipedia.org',
    'https://www.web3school.com',
    'https://www.khanacademy.org',
    'https://www.coursera.org'
];

const blockedSites = [
    'https://www.instagram.com',
    'https://www.facebook.com',
    'https://www.reddit.com', // Add more sites as needed
];

// Redirect if a blocked site is accessed
if (blockedSites.some(site => window.location.href.includes(site))) {
    window.location.href = 'https://www.wikipedia.org'; // Redirect to an allowed site
}

// Prevent access to links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            const href = event.currentTarget.href;

            if (!allowedSites.includes(href)) {
                event.preventDefault();
                document.getElementById('message').classList.remove('hidden');
            }
        });
    });
});
