
export function createLoginCard(type){
    let opposite;

    if (type === "Sign In"){
        opposite = "Sign Up"
    }

    if (type === "Sign Up"){
        opposite = "Sign In"
    }

    const loginCard = document.createElement('div')
    loginCard.id = "login-card" 

    switch (type){
        case 'Sign Up':
            loginCard.innerHTML = `
                    <div>
                        <h2>Welcome</h2>
                        <p>Please ${type} to continue</p>
                    </div>
                    <form action="">
                        <input type="text" placeholder="Name">
                        <input type="email"placeholder="E-mail">
                        <input type="password" placeholder="Password">
                        <button>${type}</button>
                    </form>
                    <div id="switch-container">
                        <p>Already have an account?</p>
                        <a href="#" id="switch-login">${opposite}</a>
                    </div>
            
            `;
            break;
        case 'Sign In':
            loginCard.innerHTML = `
                    <div>
                        <h2>Welcome back</h2>
                        <p>Please ${type} to continue</p>
                    </div>
                    <form action="">
                        <input type="email"placeholder="E-mail">
                        <a>Forgot your password?</a>
                        <input type="password" placeholder="Password">
                        <button>${type}</button>
                    </form>
                    <div id="switch-container">
                        <p>Don't have an account?</p>
                        <a href="#" id="switch-login">${opposite}</a>
                    </div>
            
            `;
            break;
    }

    const switchLogin = loginCard.querySelector('#switch-login');

    switchLogin.addEventListener('click', () => {
        const newCard = createLoginCard(opposite)
        loginCard.replaceWith(newCard)
    })

    return loginCard
}
