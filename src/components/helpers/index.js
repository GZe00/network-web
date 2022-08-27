export const isEmailValid = email => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email)
}

export const passwordStrong = password => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    return re.test(password)
}


export const defineTitle = (value) => {
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