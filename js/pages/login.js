
export function createLoginCard(){
    const loginCard = document.createElement('div')
    loginCard.id = "login-card" 
    loginCard.innerHTML = `
            <div>
                <h2>Welcome</h2>
                <p>Please log in to continue</p>
            </div>
            <form action="">
                <input type="text" placeholder="Name">
                <input type="email"placeholder="E-mail">
                <input type="password" placeholder="Password">
                <button>SIGN IN</button>
            </form>
            <div id="switch-container">
                <p>Already have an account?</p>
                <a href="">Sign Up</a>
            </div>
    
    `
    return loginCard
}
