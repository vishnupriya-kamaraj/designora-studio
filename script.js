@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

:root {
    --background: #101010;
    --surface: #191919;
    --text: #f6f4ef;
    --muted: #a5a39e;
    --accent: #d7fb70;
}

body {
    background: var(--background);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    line-height: 1.6;
}

a {
    color: inherit;
    text-decoration: none;
}

.header {
    min-height: 85px;
    padding: 20px 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #292929;
}

.logo {
    font-size: 27px;
    font-weight: 700;
    letter-spacing: -1.5px;
}

.logo span,
h1 span,
h2 span {
    color: var(--accent);
}

nav {
    display: flex;
    gap: 32px;
}

nav a {
    color: var(--muted);
    font-size: 14px;
    transition: color 0.3s;
}

nav a:hover,
footer a:hover {
    color: var(--accent);
}

.header-btn {
    border: 1px solid #444;
    border-radius: 30px;
    padding: 11px 20px;
    font-size: 13px;
}

.menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 25px;
    cursor: pointer;
}

.hero {
    min-height: 650px;
    padding: 125px 8% 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background:
        radial-gradient(ellipse at 80% 25%, #29351d 0%, transparent 35%),
        var(--background);
}

.eyebrow {
    color: var(--accent);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 25px;
}

h1 {
    font-size: clamp(45px, 7vw, 88px);
    line-height: 1.08;
    letter-spacing: -4px;
    margin-bottom: 25px;
}

h1 span,
h2 span {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
}

.hero-text {
    max-width: 520px;
    color: var(--muted);
    font-size: 16px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 35px;
}

.primary-btn,
.secondary-btn {
    display: inline-block;
    padding: 14px 23px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 700;
    transition: transform 0.3s, background 0.3s;
}

.primary-btn {
    color: #101010;
    background: var(--accent);
}

.secondary-btn {
    border: 1px solid #444;
}

.primary-btn:hover,
.secondary-btn:hover {
    transform: translateY(-3px);
}

.hero-bottom {
    width: 100%;
    margin-top: auto;
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
    color: #777;
    font-size: 10px;
    letter-spacing: 2px;
}

.section {
    padding: 100px 8%;
}

h2 {
    font-size: clamp(35px, 5vw, 60px);
    line-height: 1.15;
    letter-spacing: -2px;
    margin-bottom: 45px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.card {
    padding: 30px;
    min-height: 290px;
    background: var(--surface);
    border: 1px solid #292929;
    border-radius: 18px;
    transition: transform 0.3s, border-color 0.3s;
}

.card:hover {
    transform: translateY(-7px);
    border-color: #657a37;
}

.card-number {
    color: var(--muted);
    font-size: 10px;
    letter-spacing: 1px;
}

.card-icon {
    margin: 25px 0;
    color: var(--accent);
    font-size: 35px;
}

.card h3 {
    font-size: 21px;
    margin-bottom: 10px;
}

.card p,
.contact p {
    color: var(--muted);
    font-size: 14px;
}

.card a {
    display: inline-block;
    margin-top: 25px;
    font-size: 12px;
    color: var(--accent);
}

.about {
    background: #171717;
}

.about-text {
    max-width: 700px;
    color: var(--muted);
    font-size: 16px;
}

.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 45px;
}

.stats div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-top: 1px solid #383838;
    padding-top: 20px;
}

.stats strong {
    color: var(--accent);
    font-size: 28px;
}

.stats span {
    color: var(--muted);
    font-size: 13px;
}

.contact {
    text-align: center;
    background:
        radial-gradient(ellipse at center, #26321a 0%, transparent 65%);
}

.contact h2 {
    margin-bottom: 20px;
}

.contact .primary-btn {
    margin-top: 30px;
}

footer {
    padding: 30px 8%;
    border-top: 1px solid #292929;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

footer p,
footer > a:last-child {
    color: var(--muted);
    font-size: 12px;
}

@media (max-width: 768px) {
    .header {
        padding: 18px 6%;
    }

    .header-btn {
        display: none;
    }

    .menu-btn {
        display: block;
    }

    nav {
        display: none;
        position: absolute;
        top: 75px;
        left: 0;
        width: 100%;
        padding: 25px 6%;
        flex-direction: column;
        gap: 20px;
        background: #191919;
        z-index: 10;
    }

    nav.show {
        display: flex;
    }

    .hero {
        min-height: 580px;
        padding: 100px 6% 30px;
    }

    h1 {
        letter-spacing: -2px;
    }

    .section {
        padding: 75px 6%;
    }

    .cards {
        grid-template-columns: 1fr;
    }

    .stats {
        grid-template-columns: 1fr;
    }

    footer {
        flex-direction: column;
        text-align: center;
    }
}
