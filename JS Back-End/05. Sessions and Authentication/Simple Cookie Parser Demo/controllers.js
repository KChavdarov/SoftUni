module.exports = (app) => {
    const layout = (title, content) => `<h1>${title}</h1>
<nav>
    <a href="/">Home</a>
    <a href="/register">Register</a>
    <a href="/login">Login</a>
    <hr>
    <br>
    <main>${content || ''}</main>
</nav>`;

    app.get('/', (req, res) => {
        const heading = req.session.user ? `Welcome, ${req.session.user.username}` : 'Welcome to my page';
        res.send(layout(heading));
    });

    app.get('/register', (req, res) => {
        const content = `
    <form action="/register" method="POST">
        <label>Username: <br><input type="text" name="username"></label><br>
        <label>Password: <br><input type="password" name="password"></label><br>
        <label>Repeat: <br><input type="password" name="repass"></label><br>
        <input type="submit" value="Register">
    </form>`;
        res.send(layout('Register', content));
    });

    app.get('/login', (req, res) => {
        const content = `
    <form action="/login" method="POST">
        <label>Username: <br><input type="text" name="username"></label><br>
        <label>Password: <br><input type="password" name="password"></label><br>
        <input type="submit" value="Login">
    </form>`;
        res.send(layout('Login', content));
    });
};