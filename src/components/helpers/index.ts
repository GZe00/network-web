export const isEmailValid = (email: string) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email)
}

export const passwordStrong = (password: string) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    return re.test(password)
}

export const isUsernameValid = (username: string) => {
    const re = /[a-zA-Z0-9.]+/
    return re.test(username)
}


export const defineTitle = (value: string) => {
    let title = value

    switch (value) {

        case 'followers':
            title = 'Total de seguidores'
            break;

        case 'likes':
            title = 'Total de me gustas'
            break;

        case 'views':
            title = 'Vistas a mi perfil'
            break;

        case 'news':
            title = 'Nuevos seguidores'
            break;

        default:
            title = ''
            break;
    }
    return title
}